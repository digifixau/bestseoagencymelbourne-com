"use client";

export function ConsultationForm() {
  return (
    <form
      action="/submit-audit"
      method="POST"
      aria-label="Request your free SEO audit"
      onSubmit={(event) => event.preventDefault()}
      className="mx-auto mb-8 flex max-w-150 flex-col gap-3 sm:flex-row"
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
        className="w-full flex-1 rounded-full border border-mist bg-white px-6 py-4 text-base text-midnight outline-none placeholder:text-slate focus:border-power-blue-deep focus:ring-2 focus:ring-power-blue-deep/25"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-full bg-magenta px-8 py-4 font-display text-xl font-bold whitespace-nowrap text-white transition-colors duration-200 hover:bg-magenta-deep"
      >
        Get Free Audit →
      </button>
    </form>
  );
}
