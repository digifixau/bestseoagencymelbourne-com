import { BadgeCheck, Clock, ShieldCheck, Star } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "Google Partner Certified" },
  { icon: Star, label: "4.9/5 — 127 Google Reviews" },
  { icon: Clock, label: "Response Within 24 Hours" },
  { icon: ShieldCheck, label: "No Lock-In Contracts" },
];

export function ProofBar() {
  return (
    <div
      role="complementary"
      aria-label="Awards and recognition"
      className="border-y border-mist bg-paper px-6 py-6 lg:px-30"
    >
      <ul className="mx-auto flex max-w-360 flex-wrap items-center justify-center gap-x-12 gap-y-4 lg:justify-between">
        {items.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 font-mono text-xs font-medium tracking-[0.08em] text-midnight uppercase"
          >
            <Icon
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-power-blue-deep"
              strokeWidth={2}
            />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
