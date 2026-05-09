const items = [
  {
    title: "About",
    text: "Una estructura clara para que el cliente entienda el estudio y su proceso antes de agendar.",
  },
  {
    title: "FAQs",
    text: "Respuestas rápidas sobre cita, preparación, consentimiento y seguimiento.",
  },
  {
    title: "Citas",
    text: "Un acceso directo al formulario para reservar sin perder el hilo de la navegación.",
  },
];

export function FeaturesSection() {
  return (
    <section id="about" className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">About</p>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Estructura simple y directa</h2>
          <p className="text-base leading-7 text-black/65 sm:text-lg">
            La navegación sigue una lógica de portafolio de estudio: portada, artistas, FAQs y una llamada clara a reservar.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-soft backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-accentDark">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
