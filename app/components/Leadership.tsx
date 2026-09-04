const LEADERSHIP = [
  {
    initials: "MS",
    name: "Maurits Stuyver",
    role: "Founder & Managing Partner",
    bio: "Built Vondel's commercial and capital network from the ground up after roles across Rocket Internet and Delivery Hero in Europe and Latin America.",
  },
  {
    initials: "ES",
    name: "Erik Stuyver",
    role: "Co-founder",
    bio: "Co-founded Vondel in 2014, applying business-development experience from Urban Sports Club and Delivery Hero across European and Asian markets.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Led by operators, not consultants.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {LEADERSHIP.map((person) => (
            <div key={person.name} className="flex gap-5 rounded-2xl border border-neutral-200 p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-lg font-semibold text-brand">
                {person.initials}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-950">{person.name}</h3>
                <p className="text-sm font-medium text-brand">{person.role}</p>
                <p className="mt-3 text-neutral-600">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
