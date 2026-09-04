const SECTORS = [
  "Consumer marketplaces",
  "B2B SaaS",
  "Fintech",
  "D2C & retail",
  "AI & data",
  "Mobility & logistics",
];

export default function Sectors() {
  return (
    <section className="border-y border-neutral-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium tracking-widest text-neutral-400 uppercase">
          Where we play
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {SECTORS.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-600"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
