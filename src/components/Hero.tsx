import { heroArtwork } from "@/components/tattooArtwork";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-accentDark backdrop-blur">
              About · Artistas · FAQs · Citas
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
              True Collective Tattoo
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-black/68 sm:text-xl">
              Un estudio con varios artistas y un proceso simple para reservar, compartir tu idea y dejar listo el consentimiento antes de la cita.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#appointment" className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper shadow-soft transition hover:translate-y-[-1px]">
              Haz tu cita
            </a>
            <a href="#artists" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-bold text-ink transition hover:bg-black hover:text-paper">
              Ver artistas
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["About", "Estudio y proceso"],
              ["Artistas", "Conoce sus perfiles"],
              ["Citas", "Formulario rapido"],
            ].map(([label, description]) => (
              <article key={label} className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-accentDark">{label}</p>
                <p className="mt-3 text-sm leading-6 text-black/65">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-x-5 translate-y-5 rounded-[2rem] bg-black/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
            <img src={heroArtwork} alt="Arte inspirado en lettering chicano y sombras" className="h-[34rem] w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/70 p-4 text-paper backdrop-blur">
              <p className="text-sm font-semibold leading-6">
                True Collective Tattoo organiza cada cita para sus artistas y clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
