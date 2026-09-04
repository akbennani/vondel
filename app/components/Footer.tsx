import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo />
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Vondel Venture Development. Amsterdam.
        </p>
      </div>
    </footer>
  );
}
