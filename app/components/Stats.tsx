const STATS = [
  { value: "2014", label: "Founded in Amsterdam" },
  { value: "3", label: "Service pillars, one team" },
  { value: "Global", label: "Network across markets" },
  { value: "10+", label: "Years in ventures, VC & PE" },
];

export default function Stats() {
  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-semibold text-neutral-950">{stat.value}</p>
            <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
