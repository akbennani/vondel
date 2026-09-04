import AnimatedNumber from "./AnimatedNumber";

const STATS = [
  { target: 2014, suffix: "", label: "Founded in Amsterdam" },
  { target: 3, suffix: "", label: "Service pillars, one team" },
  { target: 15, suffix: "+", label: "Countries with active network" },
  { target: 10, suffix: "+", label: "Years in ventures, VC & PE" },
];

export default function Stats() {
  return (
    <section className="border-b border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <AnimatedNumber target={stat.target} suffix={stat.suffix} />
            <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
