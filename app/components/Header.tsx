import Logo from "./Logo";

const LINKS = [
  { href: "#pillars", label: "What we do" },
  { href: "#approach", label: "Approach" },
  { href: "#story", label: "Story" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden gap-8 text-sm font-medium text-white/80 sm:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
