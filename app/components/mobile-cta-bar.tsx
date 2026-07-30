export function MobileCtaBar() {
  return (
    <div
      role="navigation"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-200 flex gap-2.5 border-t border-border-gold bg-navy-2 p-4 lg:hidden"
    >
      <a
        href="tel:+611300000000"
        aria-label="Call us now"
        className="flex-1 rounded-md bg-gold py-3.5 text-center text-sm font-bold text-navy"
      >
        📞 Call Now
      </a>
      <a
        href="#audit"
        className="flex-1 rounded-md border border-gold py-3.5 text-center text-sm font-bold text-gold"
      >
        Free Audit →
      </a>
    </div>
  );
}
