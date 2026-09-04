export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to grow with a partner, not a vendor?
        </h2>
        <p className="mt-4 text-lg text-neutral-300">
          Tell us what you're building. We'll tell you honestly if we're the
          right fit.
        </p>
        <a
          href="mailto:hello@vondel.co"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          hello@vondel.co
        </a>
      </div>
    </section>
  );
}
