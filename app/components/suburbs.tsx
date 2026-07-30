const suburbs = [
  "Melbourne CBD",
  "Southbank",
  "Fitzroy",
  "Collingwood",
  "Richmond",
  "South Yarra",
  "St Kilda",
  "Prahran",
  "Carlton",
  "Brunswick",
  "Northcote",
  "Hawthorn",
  "Camberwell",
  "Box Hill",
  "Brighton",
  "Port Melbourne",
  "Docklands",
  "Williamstown",
  "Footscray",
  "Essendon",
  "Moonee Ponds",
  "Dandenong",
  "Frankston",
  "Knox",
];

export function Suburbs() {
  return (
    <div aria-label="Service areas across Melbourne" className="bg-navy-2 px-6 py-16 lg:px-15">
      <h3 className="mb-7 text-center font-serif text-xl font-semibold text-cream">
        SEO Services Across All Melbourne Suburbs
      </h3>
      <ul role="list" className="mx-auto flex max-w-250 flex-wrap justify-center gap-2.5">
        {suburbs.map((suburb) => (
          <li
            key={suburb}
            role="listitem"
            className="cursor-default rounded border border-border-gold bg-gold/6 px-4.5 py-1.75 text-xs tracking-[0.04em] text-cream/60 transition-all duration-200 hover:border-gold/40 hover:text-gold"
          >
            {suburb}
          </li>
        ))}
      </ul>
    </div>
  );
}
