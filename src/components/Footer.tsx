import { BrandMark } from "@/components/BrandMark";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tattoosby_ghost/",
    icon: (
      <path d="M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5Zm5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm6-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@tattoos_ghost?_r=1&_t=ZS-96YydocNm4r",
    icon: (
      <path d="M16.6 3c.33 2.6 1.78 4.13 4.4 4.3v3.05a7.8 7.8 0 0 1-4.3-1.32v6.5c0 3.27-2.18 5.47-5.43 5.47A5.14 5.14 0 0 1 6 15.86c0-3.5 3.28-6.05 6.68-5.16v3.16c-1.45-.45-3.3.18-3.3 1.9 0 1.2.92 2.08 2.1 2.08 1.32 0 2.18-.82 2.18-2.45V3h2.94Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-ink px-5 py-12 text-paper lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <section className="space-y-4">
          <BrandMark className="h-24 w-24" />
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f0d8bf]">True Collective Tattoo</p>
          <p className="max-w-xl text-sm leading-7 text-paper/75">
            tattoosby_ghost, Edgar Garcia, enfocado en letras, sombras y trabajos personalizados con atencion directa antes de cada cita.
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
          <p>Ubicacion: C.C. Prisa zona 10, Ciudad de Guatemala.</p>
          <p>Horario: Lunes a sábado, 10:00 a 19:00.</p>
          <p>Atención: cita previa y mensajes directos para disponibilidad.</p>
        </section>

        <section className="space-y-4 text-sm text-paper/75">
          <h2 className="text-base font-black uppercase tracking-[0.24em] text-[#f0d8bf]">Contacto</h2>
          <p>Instagram: @tattoosby_ghost</p>
          <p>TikTok: @tattoos_ghost</p>
          <p>Artista: EDGAR GARCIA | LETRAS Y SOMBRAS</p>
          <p>WhatsApp: consulta por mensaje directo.</p>
          <p>Deposit required para confirmar agenda.</p>
        </section>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-paper/10 pt-6 text-sm text-paper/60 lg:flex-row lg:items-center lg:justify-between">
        <p>© 2026 True Collective Tattoo. Todos los derechos reservados.</p>
        <p>tattoosby_ghost · EDGAR GARCIA | LETRAS Y SOMBRAS</p>
      </div>
    </footer>
  );
}
