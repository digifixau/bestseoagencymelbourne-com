import { Phone } from "lucide-react";
import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div
      role="navigation"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-200 flex gap-3 border-t border-mist bg-white p-4 lg:hidden"
    >
      <a
        href="tel:+61 38 669 1773"
        aria-label="Call us now"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-midnight py-3 font-display text-base font-bold text-midnight"
      >
        <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
        Call Now
      </a>
      <Link
        href="/#audit"
        className="flex-1 rounded-full bg-magenta py-3 text-center font-display text-base font-bold text-white"
      >
        Free Audit →
      </Link>
    </div>
  );
}
