"use client";

export function ConsultationForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="mb-6 flex flex-col items-center gap-3 rounded-xl bg-white p-2 shadow-[0_8px_32px_rgba(232,93,38,0.15)] sm:flex-row sm:pl-6"
    >
      <label htmlFor="consultation-contact" className="sr-only">
        Your website URL or email address
      </label>
      <input
        id="consultation-contact"
        name="contact"
        type="text"
        inputMode="email"
        placeholder="Enter your website URL or email address"
        className="w-full flex-1 bg-transparent px-4 py-3 text-[0.95rem] text-body outline-none placeholder:text-[#B0ADA7] sm:px-0 sm:py-0"
      />
      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-brand px-7 py-3.5 text-[0.9rem] font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-brand-light sm:w-auto"
      >
        Get Free Consultation
      </button>
    </form>
  );
}
