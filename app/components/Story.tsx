import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            From two brothers to a partner network.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-neutral-600">
            <p>
              Vondel started in Amsterdam in 2014, built by two brothers who had
              spent their careers doing business development across Europe,
              Latin America and Asia — for the likes of Rocket Internet and
              Delivery Hero.
            </p>
            <p>
              What began as commercial and capital consulting grew into a
              broader network of fractional and full-time leaders, spanning
              consumer marketplaces, B2B platforms, SaaS, fintech and AI.
            </p>
            <p>
              Today, a group of partners with deep operating and network
              experience work under one roof — still hands-on, still
              accountable, just at a bigger scale.
            </p>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl lg:col-span-2">
          <Image
            src="/photos/saopaulo.jpg"
            alt="Railway station in São Paulo, Brazil — one of the markets where Vondel's founders worked before starting the company"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        </div>
      </div>
    </section>
  );
}
