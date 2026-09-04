const AUDIENCES = [
  {
    title: "For founders & operators",
    description:
      "Bring us in when growth stalls or the next stage needs capability you don't have in-house yet — commercial firepower, a fractional exec, or warm capital intros.",
    cta: { label: "Talk about your growth plan", href: "#contact" },
  },
  {
    title: "For investors & portfolio teams",
    description:
      "We plug into portfolio companies as an extension of the board: hands-on commercial support, interim leadership, and access to our operator network — before problems become board slides.",
    cta: { label: "Discuss a portfolio company", href: "#contact" },
  },
];

export default function Audience() {
  return (
    <section id="audience" className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Where do you come in?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <h3 className="text-xl font-semibold text-neutral-950">{audience.title}</h3>
              <p className="mt-3 flex-1 text-neutral-600">{audience.description}</p>
              <a
                href={audience.cta.href}
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand transition hover:opacity-80"
              >
                {audience.cta.label}
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
