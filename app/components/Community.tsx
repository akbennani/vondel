import Image from "next/image";

export default function Community() {
  return (
    <section id="community" className="scroll-mt-24 bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          A network of operators, not a directory.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          50+ fractional leaders, headhunters and specialists sit behind
          Vondel — people who&apos;ve actually built and scaled before, not
          career consultants.
        </p>
        <div className="relative mt-10 w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "1500 / 464" }}>
          <Image
            src="/photos/community.jpg"
            alt="Grid of black-and-white portrait photos of Vondel network members and partners"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
