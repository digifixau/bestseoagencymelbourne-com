"use client";

export function ConsultationForm() {
  return (
    <form
      action="/submit-audit"
      method="POST"
      aria-label="Request your free SEO audit"
      onSubmit={(event) => event.preventDefault()}
      className="mx-auto mb-6 flex max-w-[520px] flex-col gap-0 sm:flex-row"
    >
      <label htmlFor="cta-url" className="sr-only">
        Your website URL
      </label>
      <input
        id="cta-url"
        name="website_url"
        type="url"
        required
        autoComplete="url"
        aria-required="true"
        placeholder="yourwebsite.com.au"
        className="w-full flex-1 rounded border border-border-gold bg-white/6 px-5.5 py-4.5 text-base text-cream outline-none placeholder:text-slate focus:border-gold sm:rounded-r-none sm:border-r-0"
      />
      <button
        type="submit"
        className="cursor-pointer rounded bg-gold px-8 py-4.5 text-sm font-bold tracking-[0.04em] whitespace-nowrap text-navy transition-colors duration-200 hover:bg-gold-2 sm:rounded-l-none"
      >
        Get Free Audit →
      </button>
    </form>
  );
}
