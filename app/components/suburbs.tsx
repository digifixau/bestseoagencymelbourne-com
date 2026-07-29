const suburbs = [
  "CBD",
  "Southbank",
  "Fitzroy",
  "Collingwood",
  "Richmond",
  "South Yarra",
  "St Kilda",
  "Prahran",
  "Carlton",
  "Brunswick",
  "Hawthorn",
  "Camberwell",
  "Brighton",
  "Port Melbourne",
  "Docklands",
  "Williamstown",
  "Footscray",
  "Northcote",
  "Essendon",
  "Moonee Ponds",
  "Box Hill",
  "Dandenong",
  "Frankston",
  "Knox",
];

export function Suburbs() {
  return (
    <section className="border-t border-line bg-white px-6 py-20 lg:px-15">
      <h3 className="mb-8 text-center font-serif text-[1.5rem] text-ink">
        We serve Melbourne businesses across every suburb
      </h3>
      <ul className="flex flex-wrap justify-center gap-2.5">
        {suburbs.map((suburb) => (
          <li
            key={suburb}
            className="cursor-default rounded-full border border-line bg-cream px-4.5 py-2 text-[0.82rem] font-medium text-body transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
          >
            {suburb}
          </li>
        ))}
      </ul>
    </section>
  );
}
