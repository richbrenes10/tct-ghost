const faqs = [
  {
    q: "¿Cómo reservo una cita?",
    a: "Llena el formulario y el estudio revisa tu información antes de confirmar la sesión.",
  },
  {
    q: "¿Puedo ver el estilo de Ghost antes de agendar?",
    a: "Si. La galeria muestra referencias de letras, sombras y piezas del estilo que trabaja.",
  },
  {
    q: "¿Qué pasa después de enviar el formulario?",
    a: "El registro queda guardado para que el estudio lo revise y prepare la cita.",
  },
  {
    q: "¿Qué debo hacer antes de tatuarme?",
    a: "Llega descansado, come antes, evita alcohol o drogas y trae referencias de tu idea.",
  },
  {
    q: "¿Qué cuidados debo seguir después?",
    a: "Lava la zona con suavidad, mantenla limpia e hidratada y evita sol, piscina y fricción.",
  },
  {
    q: "¿Puedo tatuarme si tengo una condición médica?",
    a: "Depende de cada caso; por eso se pide información de salud y el artista la revisa antes.",
  },
];

export function FaqSection() {
  return (
    <section id="faqs" className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">FAQs</p>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Preguntas frecuentes</h2>
          <p className="text-base leading-7 text-black/65 sm:text-lg">
            Un bloque de respuestas cortas para reducir fricción antes de la cita y acompañar la decisión del cliente.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-soft">
              <summary className="cursor-pointer list-none text-base font-black text-ink">{faq.q}</summary>
              <p className="mt-3 text-sm leading-6 text-black/65">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
