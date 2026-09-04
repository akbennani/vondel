const PILLARS = [
  {
    title: "Commercial",
    description:
      "Go-to-market strategy, sales execution and expansion into new markets — driven by people who have actually done it.",
  },
  {
    title: "Talent",
    description:
      "Fractional and full-time leaders placed with intent: the right operator for the stage you're in, not just a resume match.",
  },
  {
    title: "Capital",
    description:
      "Access to a network of investors and operators who back companies with more than a check — advice, intros, follow-on.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Three ways in, one goal: growth.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-neutral-200 p-8">
              <div className="h-1 w-10 rounded-full bg-brand" />
              <h3 className="mt-6 text-lg font-semibold text-neutral-950">{pillar.title}</h3>
              <p className="mt-3 text-neutral-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
