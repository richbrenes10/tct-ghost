const pre = [
  "Duerme bien y come antes de llegar.",
  "Evita alcohol, drogas y exceso de cafeína.",
  "Hidrata tu piel los días previos.",
  "Trae ropa cómoda y referencias claras.",
];

const post = [
  "Sigue las instrucciones del artista.",
  "Lava y seca la zona con suavidad.",
  "No rasques ni desprendas costras.",
  "Evita sol, piscina, sauna y fricción.",
];

const followUp = [
  "Si notas algo raro, contacta al estudio.",
  "Mantén el área limpia durante la cicatrización.",
  "La hidratación y la paciencia ayudan al resultado final.",
  "Vuelve a calificar tu experiencia después de la cita.",
];

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">Recomendaciones</p>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Antes y después de tatuarte</h2>
          <p className="text-base leading-7 text-black/65 sm:text-lg">
            Una guía práctica para llegar listo a la cita y cuidar mejor tu pieza después del tatuaje.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Antes", "Prepara tu cita", pre],
            ["Después", "Cuida tu tatuaje", post],
            ["Seguimiento", "Observa la cicatrización", followUp],
          ].map(([eyebrow, title, points]) => (
            <article key={String(title)} className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-accentDark">{eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black text-ink">{title}</h3>
              <ul className="mt-4 space-y-3 pl-5 text-sm leading-6 text-black/65">
                {(points as string[]).map((point) => (
                  <li key={point} className="list-disc">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
