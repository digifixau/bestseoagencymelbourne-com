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
    <section
      aria-labelledby="suburbs-heading"
      className="border-t border-mist bg-paper px-6 py-16 lg:px-30 lg:py-20"
    >
      <h2
        id="suburbs-heading"
        className="mb-8 text-center font-display text-h3 font-bold text-midnight"
      >
        SEO Services Across All Melbourne Suburbs
      </h2>
      <ul className="mx-auto flex max-w-250 flex-wrap justify-center gap-3">
        {suburbs.map((suburb) => (
          <li
            key={suburb}
            className="rounded-full border border-mist bg-white px-4 py-1.5 font-mono text-xs font-medium tracking-[0.06em] text-midnight uppercase"
          >
            {suburb}
          </li>
        ))}
      </ul>
    </section>
  );
}
