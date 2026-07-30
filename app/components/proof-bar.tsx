export function ProofBar() {
  return (
    <div
      role="complementary"
      aria-label="Awards and recognition"
      className="flex flex-wrap items-center justify-center gap-12 border-y border-border-gold bg-navy-2 px-6 py-5 lg:px-15"
    >
      <div className="flex items-center gap-2.5 text-xs tracking-[0.06em] text-slate uppercase">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
          className="h-4.5 w-4.5 shrink-0"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span>Google Partner Certified</span>
      </div>
      <div className="flex items-center gap-2.5 text-xs tracking-[0.06em] text-slate uppercase">
        <span
          aria-label="4.9 out of 5 stars"
          className="text-[0.85rem] tracking-[2px] text-[#F59E0B]"
        >
          ★★★★★
        </span>
        <span>4.9/5 — 127 Google Reviews</span>
      </div>
      <div className="flex items-center gap-2.5 text-xs tracking-[0.06em] text-slate uppercase">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
          className="h-4.5 w-4.5 shrink-0"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M12 6v6l4 2" />
        </svg>
        <span>Response Within 24 Hours</span>
      </div>
      <div className="flex items-center gap-2.5 text-xs tracking-[0.06em] text-slate uppercase">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
          className="h-4.5 w-4.5 shrink-0"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>No Lock-In Contracts</span>
      </div>
    </div>
  );
}
