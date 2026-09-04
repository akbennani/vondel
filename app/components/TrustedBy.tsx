import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="border-b border-neutral-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-medium tracking-widest text-neutral-400 uppercase">
          A selection of companies and investors we&apos;ve worked with
        </p>
        <div className="relative mt-10 w-full" style={{ aspectRatio: "1500 / 718" }}>
          <Image
            src="/photos/trackrecord.png"
            alt="Logos of companies and investors Vondel has worked with, including Spotify, Uber, Delivery Hero, ABN AMRO, UBS, Rocket Internet, Sequoia and McKinsey & Company"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>
      </div>
    </section>
  );
}
