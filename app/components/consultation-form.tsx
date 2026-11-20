"use client";

import { ArrowLeft, ArrowRight, Check, CircleCheck } from "lucide-react";
import Script from "next/script";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";

/*
 * Free audit request: a 3-step form that posts to FormHub
 * (POST /f/{publicKey}, JSON mode).
 *
 * FormHub's contract, which this component follows:
 *  - JSON requests must come from an Origin registered on the FormHub site.
 *  - `_hp` is the honeypot and `_t` the render time in epoch ms; both are
 *    control fields (stripped before storage) used to quarantine bots.
 *  - `cf-turnstile-response` carries the Turnstile token. FormHub verifies it
 *    server-side with the secret stored on the form, when Turnstile is enabled.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_FORMHUB_ENDPOINT;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const PHONE_DISPLAY = "+61 38 669 1773";

const GOALS = [
  "More calls and enquiries",
  "Show up in Google Maps",
  "Fix technical problems",
  "Beat a competitor",
  "Grow online sales",
] as const;

const STEPS = ["Your website", "Your goals", "Your details"] as const;

type TurnstileApi = {
  render: (
    el: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const HOSTNAME =
  /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;

/**
 * Accepts a bare domain ("digifix.com.au"), a www host, or a full URL, and
 * returns a normalised https URL. Returns null when it is not a real hostname.
 */
export function normaliseWebsite(input: string): string | null {
  let value = input.trim();
  if (!value) return null;
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) value = `https://${value}`;

  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (!HOSTNAME.test(url.hostname)) return null;
    const path = url.pathname === "/" ? "" : url.pathname;
    return `${url.protocol}//${url.hostname.toLowerCase()}${path}`;
  } catch {
    return null;
  }
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ERROR_MESSAGES: Record<string, string> = {
  rate_limited: "Too many attempts. Please wait a minute and try again.",
  captcha_failed:
    "We could not confirm you are human. Please complete the check and try again.",
};

const GENERIC_ERROR = `Your request did not go through. Please try again, or call us on ${PHONE_DISPLAY}.`;

const inputClass =
  "w-full rounded-full border border-mist bg-white px-6 py-4 text-base text-midnight outline-none placeholder:text-slate focus:border-power-blue-deep focus:ring-2 focus:ring-power-blue-deep/25 aria-invalid:border-magenta-deep";

const labelClass =
  "mb-2 block font-mono text-xs font-medium tracking-[0.08em] text-midnight uppercase";

const primaryClass =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-magenta px-8 py-4 font-display text-xl font-bold whitespace-nowrap text-white transition-colors duration-200 hover:bg-magenta-deep disabled:cursor-wait disabled:opacity-70";

const backClass =
  "inline-flex cursor-pointer items-center gap-1.5 font-display text-base font-bold text-power-blue-deep underline-offset-4 hover:underline";

export function ConsultationForm() {
  const id = useId();
  const [step, setStep] = useState(0);
  const [website, setWebsite] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [turnstileReady, setTurnstileReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const renderedAt = useRef<number>(0);
  const stepHeading = useRef<HTMLLegendElement>(null);

  // Render time for FormHub's timing check. Set on the client, never at build.
  useEffect(() => {
    renderedAt.current = Date.now();
    // Turnstile readiness comes from <Script onReady>, which also fires on
    // remount when the script is already cached.
  }, []);

  // Move focus to the new step so keyboard and screen reader users follow.
  useEffect(() => {
    if (step > 0) stepHeading.current?.focus();
  }, [step]);

  // Mount the Turnstile widget on the last step, once the script has loaded.
  useEffect(() => {
    if (step !== 2 || !TURNSTILE_SITE_KEY || !turnstileReady) return;
    const el = widgetRef.current;
    if (!el || !window.turnstile || widgetId.current) return;

    widgetId.current = window.turnstile.render(el, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: "light",
      callback: (value) => setToken(value),
      "expired-callback": () => setToken(null),
      "error-callback": () => setToken(null),
    });

    return () => {
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
      setToken(null);
    };
  }, [step, turnstileReady]);

  const resetTurnstile = useCallback(() => {
    setToken(null);
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
  }, []);

  function validate(current: number): Record<string, string> {
    const next: Record<string, string> = {};
    if (current === 0 && !normaliseWebsite(website)) {
      next.website = "Enter your website, for example yourbusiness.com.au";
    }
    if (current === 1 && goals.length === 0) {
      next.goals = "Choose at least 1 goal";
    }
    if (current === 2) {
      if (!name.trim()) next.name = "Enter your name";
      if (!EMAIL.test(email.trim())) next.email = "Enter a valid email address";
      if (TURNSTILE_SITE_KEY && !token) {
        next.turnstile = "Complete the check above to continue";
      }
    }
    return next;
  }

  function goNext() {
    const found = validate(step);
    setErrors(found);
    if (Object.keys(found).length === 0) setStep((s) => s + 1);
  }

  function toggleGoal(goal: string) {
    setGoals((current) =>
      current.includes(goal)
        ? current.filter((g) => g !== goal)
        : [...current, goal],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 2) {
      goNext();
      return;
    }

    const found = validate(2);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!ENDPOINT) {
      console.error("NEXT_PUBLIC_FORMHUB_ENDPOINT is not set");
      setSubmitError(GENERIC_ERROR);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const payload: Record<string, string | string[]> = {
      website: normaliseWebsite(website) ?? website.trim(),
      goals,
      service_area: area.trim(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      page: window.location.href,
      _hp: honeypot,
      _t: String(renderedAt.current),
    };
    if (token) payload["cf-turnstile-response"] = token;

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (response.ok && result?.ok) {
        setDone(true);
        return;
      }

      setSubmitError(
        (result?.error && ERROR_MESSAGES[result.error]) || GENERIC_ERROR,
      );
      // A Turnstile token is single use, so every failed attempt needs a new one.
      resetTurnstile();
    } catch {
      setSubmitError(GENERIC_ERROR);
      resetTurnstile();
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div
        role="status"
        className="mx-auto mb-8 max-w-150 rounded-card border border-mist bg-white p-8 text-left"
      >
        <CircleCheck
          aria-hidden="true"
          className="mb-4 h-8 w-8 text-power-blue-deep"
          strokeWidth={2}
        />
        <h3 className="mb-2 font-display text-h3 font-bold text-midnight">
          Thanks, {name.trim().split(" ")[0]}. Your audit request is in.
        </h3>
        <p className="text-base leading-[1.6] text-slate">
          We will review{" "}
          {normaliseWebsite(website)?.replace(/^https?:\/\//, "")} and email
          your audit to {email.trim()} within 48 hours.
        </p>
      </div>
    );
  }

  const errorId = (field: string) => `${id}-${field}-error`;

  const fieldError = (field: string) =>
    errors[field] ? (
      <p
        id={errorId(field)}
        role="alert"
        className="mt-2 pl-6 text-sm font-medium text-magenta-deep"
      >
        {errors[field]}
      </p>
    ) : null;

  return (
    <>
      {TURNSTILE_SITE_KEY ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          onReady={() => setTurnstileReady(true)}
        />
      ) : null}

      <form
        noValidate
        onSubmit={handleSubmit}
        aria-label="Request your free SEO audit"
        className="mx-auto mb-8 max-w-150 text-left"
      >
        {/* Progress: step label plus one segment per step. */}
        <div className="mb-6">
          <p className="mb-3 text-center font-mono text-xs font-medium tracking-[0.08em] text-power-blue-deep uppercase">
            Step {step + 1} of {STEPS.length} · {STEPS[step]}
          </p>
          <div aria-hidden="true" className="flex gap-2">
            {STEPS.map((label, index) => (
              <span
                key={label}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  index <= step ? "bg-power-blue-deep" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Honeypot: hidden from people, irresistible to bots. */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        >
          <label htmlFor={`${id}-hp`}>Leave this field empty</label>
          <input
            id={`${id}-hp`}
            name="_hp"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {step === 0 && (
          <fieldset>
            <legend className="sr-only">Your website</legend>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex-1">
                <label htmlFor={`${id}-website`} className="sr-only">
                  Your website
                </label>
                <input
                  id={`${id}-website`}
                  name="website"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="yourwebsite.com.au"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  aria-invalid={Boolean(errors.website)}
                  aria-describedby={
                    errors.website ? errorId("website") : undefined
                  }
                  className={inputClass}
                />
                {fieldError("website")}
              </div>
              <button type="submit" className={primaryClass}>
                Get Free Audit
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="rounded-card bg-white p-6 sm:p-8">
            <legend
              ref={stepHeading}
              tabIndex={-1}
              className="float-left mb-2 w-full font-display text-xl font-bold text-midnight outline-none"
            >
              What should SEO do for your business?
            </legend>
            <p className="clear-both mb-5 text-sm text-slate">
              Choose all that apply.
            </p>
            <div
              className="flex flex-wrap gap-3"
              aria-describedby={errors.goals ? errorId("goals") : undefined}
            >
              {GOALS.map((goal) => {
                const checked = goals.includes(goal);
                return (
                  <label
                    key={goal}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-base transition-colors duration-200 has-focus-visible:ring-2 has-focus-visible:ring-power-blue-deep ${
                      checked
                        ? "border-power-blue-deep bg-power-blue-deep text-white"
                        : "border-mist bg-white text-midnight hover:border-power-blue"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="goals"
                      value={goal}
                      checked={checked}
                      onChange={() => toggleGoal(goal)}
                      className="sr-only"
                    />
                    {checked ? (
                      <Check
                        aria-hidden="true"
                        className="h-4 w-4"
                        strokeWidth={2.5}
                      />
                    ) : null}
                    {goal}
                  </label>
                );
              })}
            </div>
            {errors.goals ? (
              <p
                id={errorId("goals")}
                role="alert"
                className="mt-3 text-sm font-medium text-magenta-deep"
              >
                {errors.goals}
              </p>
            ) : null}

            <div className="mt-6">
              <label htmlFor={`${id}-area`} className={labelClass}>
                Main area you serve{" "}
                <span className="text-slate">(optional)</span>
              </label>
              <input
                id={`${id}-area`}
                name="service_area"
                type="text"
                autoComplete="address-level2"
                placeholder="For example, Richmond or all of Melbourne"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(0)}
                className={backClass}
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back
              </button>
              <button type="submit" className={primaryClass}>
                Continue
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="rounded-card bg-white p-6 sm:p-8">
            <legend
              ref={stepHeading}
              tabIndex={-1}
              className="float-left mb-6 w-full font-display text-xl font-bold text-midnight outline-none"
            >
              Where should we send your audit?
            </legend>

            <div className="clear-both grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor={`${id}-name`} className={labelClass}>
                  Your name
                </label>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? errorId("name") : undefined}
                  className={inputClass}
                />
                {fieldError("name")}
              </div>
              <div>
                <label htmlFor={`${id}-email`} className={labelClass}>
                  Email
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? errorId("email") : undefined}
                  className={inputClass}
                />
                {fieldError("email")}
              </div>
              <div>
                <label htmlFor={`${id}-phone`} className={labelClass}>
                  Phone <span className="text-slate">(optional)</span>
                </label>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {TURNSTILE_SITE_KEY ? (
              <div className="mt-6">
                <div ref={widgetRef} />
                {errors.turnstile && !token ? (
                  <p
                    role="alert"
                    className="mt-2 text-sm font-medium text-magenta-deep"
                  >
                    {errors.turnstile}
                  </p>
                ) : null}
              </div>
            ) : null}

            {submitError ? (
              <p
                role="alert"
                className="mt-6 rounded-card border-l-4 border-magenta-deep bg-paper px-4 py-3 text-sm font-medium text-midnight"
              >
                {submitError}
              </p>
            ) : null}

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={submitting}
                className={backClass}
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className={primaryClass}
              >
                {submitting ? "Sending…" : "Send my audit request"}
              </button>
            </div>
          </fieldset>
        )}
      </form>
    </>
  );
}
