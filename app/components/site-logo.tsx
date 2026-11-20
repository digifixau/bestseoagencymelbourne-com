import { Search } from "lucide-react";

/**
 * Endorsed-product lockup (brand guide slide 26): a Lucide icon in a Power
 * Blue tile, then the product name. The DigiFix logo itself appears only in
 * the footer endorsement.
 */
export function SiteLogo() {
  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-power-blue"
      >
        <Search className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span className="font-display text-lg leading-none font-bold tracking-[-0.01em] text-midnight">
        Best SEO Melbourne
      </span>
    </span>
  );
}
