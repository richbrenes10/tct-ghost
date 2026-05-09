const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/tattoosby_ghost",
    icon: (
      <path d="M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5Zm5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm6-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <path d="M13.5 21v-7h2.5l.5-3H13.5V9.5c0-.87.28-1.5 1.55-1.5H16.5V5.1c-.62-.08-1.78-.15-3.1-.15-2.74 0-4.4 1.6-4.4 4.54V11H6.5v3H9v7h4.5Z" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/0000000000",
    icon: <path d="M12 3.5a8.5 8.5 0 0 0-7.2 12.9L4 20.5l4.25-1.1A8.5 8.5 0 1 0 12 3.5Zm4.9 12.2c-.2.56-1.2 1.05-1.66 1.1-.43.05-.98.07-1.58-.1-.36-.1-.81-.24-1.4-.5-2.44-1.06-4.02-3.48-4.15-3.64-.13-.16-1-1.33-1-2.54s.63-1.8.85-2.04c.22-.24.49-.3.66-.3h.47c.15 0 .35-.06.55.42.2.5.68 1.72.74 1.84.06.12.1.26.02.42-.08.16-.12.26-.24.4-.13.15-.27.34-.39.46-.13.12-.26.26-.11.52.15.26.65 1.08 1.39 1.75.95.86 1.75 1.12 2 .24.12-.37.2-.61.34-.74.13-.12.3-.16.45-.1.16.06 1.12.53 1.31.63.19.1.32.15.37.23.05.08.05.46-.15 1.03Z" />,
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-ink px-5 py-12 text-paper lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <section className="space-y-4">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f0d8bf]">True Collective Tattoo</p>
          <p className="max-w-xl text-sm leading-7 text-paper/75">
            Estudio de varios artistas enfocado en piezas de lettering, chicano style, sombras y trabajos personalizados con atención directa antes de cada cita.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-4 py-2 text-sm font-semibold text-paper/85 transition hover:bg-paper hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  {social.icon}
                </svg>
                {social.label}
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-4 text-sm text-paper/75">
          <h2 className="text-base font-black uppercase tracking-[0.24em] text-[#f0d8bf]">Ubicación y horario</h2>
          <p>Ubicación: Ciudad de Guatemala, Guatemala.</p>
          <p>Horario: Lunes a sábado, 10:00 a 19:00.</p>
          <p>Atención: cita previa y mensajes directos para disponibilidad.</p>
        </section>

        <section className="space-y-4 text-sm text-paper/75">
          <h2 className="text-base font-black uppercase tracking-[0.24em] text-[#f0d8bf]">Contacto</h2>
          <p>Instagram: @tattoosby_ghost</p>
          <p>WhatsApp: consulta por mensaje directo.</p>
          <p>Correo: citas@truecollectivetattoo.com</p>
        </section>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-paper/10 pt-6 text-sm text-paper/60 lg:flex-row lg:items-center lg:justify-between">
        <p>© 2026 True Collective Tattoo. Todos los derechos reservados.</p>
        <p>Diseño y contenido orientados a un lanzamiento con reserva previa.</p>
      </div>
    </footer>
  );
}
