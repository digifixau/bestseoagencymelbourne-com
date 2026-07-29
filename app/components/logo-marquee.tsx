const clients = [
  "Fitzroy Legal",
  "Richmond Dental Co",
  "Southbank Finance",
  "Port Melbourne Auto",
  "CBD Accounting Group",
  "Collingwood Trade",
  "St Kilda Hospitality",
  "Carlton Health Clinic",
];

export function LogoMarquee() {
  return (
    <div className="flex items-center gap-10 overflow-hidden bg-ink p-6 lg:px-15 lg:py-8">
      <span className="hidden text-[0.75rem] font-medium whitespace-nowrap text-white/40 sm:block">
        Trusted by Melbourne&apos;s best
      </span>
      <div className="hidden h-6 w-px shrink-0 bg-white/15 sm:block" />
      <div className="flex animate-marquee gap-12">
        {[...clients, ...clients].map((client, index) => (
          <span
            key={`${client}-${index}`}
            className="text-[0.88rem] font-semibold tracking-[-0.01em] whitespace-nowrap text-white/30"
            aria-hidden={index >= clients.length}
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}
