export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
        <p className="text-sm font-medium tracking-widest text-brand uppercase">
          Vondel Venture Development
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Your growth partner, not another vendor.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          Commercial strategy, senior talent and capital — combined into one
          partner that stays accountable for the result. Founded in
          Amsterdam in 2014, active globally across ventures, VC and PE.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Talk to us
          </a>
          <a
            href="#pillars"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            What we do
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,81,87,0.18),transparent_60%)]" />
    </section>
  );
}
