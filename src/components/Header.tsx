type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Galeria", href: "/#artists" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Citas", href: "/cita" },
];

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-black/10 bg-[#f7f2eb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(182,95,66,0.2),_transparent_30%),radial-gradient(circle_at_right,_rgba(96,112,92,0.16),_transparent_28%)]" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight">True Collective Tattoo</span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-black/55">tattoosby_ghost</span>
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
            href="https://www.instagram.com/tattoosby_ghost/"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-ink transition hover:bg-black hover:text-paper"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de tattoosby_ghost"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path d="M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5Zm5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm6-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@tattoos_ghost?_r=1&_t=ZS-96YydocNm4r"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-ink transition hover:bg-black hover:text-paper"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok de tattoos_ghost"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path d="M16.6 3c.33 2.6 1.78 4.13 4.4 4.3v3.05a7.8 7.8 0 0 1-4.3-1.32v6.5c0 3.27-2.18 5.47-5.43 5.47A5.14 5.14 0 0 1 6 15.86c0-3.5 3.28-6.05 6.68-5.16v3.16c-1.45-.45-3.3.18-3.3 1.9 0 1.2.92 2.08 2.1 2.08 1.32 0 2.18-.82 2.18-2.45V3h2.94Z" />
            </svg>
          </a>
          <a
            href="/cita"
            className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-paper shadow-soft transition hover:translate-y-[-1px]"
          >
            Haz tu cita
          </a>
        </nav>
      </div>
    </header>
  );
}
