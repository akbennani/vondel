const STEPS = [
  {
    step: "01",
    title: "We get in the room.",
    description:
      "No lengthy onboarding decks. We start with the problem you're actually trying to solve.",
  },
  {
    step: "02",
    title: "We bring the right people.",
    description:
      "From our network of operators, investors and specialists — matched to your stage, not a generic profile.",
  },
  {
    step: "03",
    title: "We stay accountable.",
    description:
      "We measure ourselves on your outcome: revenue, hires that stick, capital that closes.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          How we work.
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STEPS.map((item) => (
            <div key={item.step}>
              <p className="text-sm font-semibold text-brand">{item.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-neutral-950">{item.title}</h3>
              <p className="mt-3 text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
