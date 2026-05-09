type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Artistas", href: "#artists" },
  { label: "FAQs", href: "#faqs" },
  { label: "Citas", href: "#appointment" },
];

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-black/10 bg-[#f7f2eb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(182,95,66,0.2),_transparent_30%),radial-gradient(circle_at_right,_rgba(96,112,92,0.16),_transparent_28%)]" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-bold text-paper shadow-soft">TCT</span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight">True Collective Tattoo</span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-black/55">Portal de clientes</span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-black/70 transition hover:bg-black hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#appointment"
            className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-paper shadow-soft transition hover:translate-y-[-1px]"
          >
            Haz tu cita
          </a>
        </nav>
      </div>
    </header>
  );
}
