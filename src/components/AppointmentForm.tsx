import { SignaturePad } from "@/components/SignaturePad";

export function AppointmentForm() {
  return (
    <section id="appointment" className="px-5 py-16 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white p-6 shadow-soft lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">Citas</p>
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Formulario previo a la cita</h2>
            <p className="text-base leading-7 text-black/65">
              Este formulario deja listo el flujo visual. La integración con Google Sheets, Calendar y Drive puede agregarse después.
            </p>
            <div className="rounded-[1.5rem] bg-paper p-5 text-sm leading-6 text-black/70">
              <p className="font-bold text-ink">Lista rápida:</p>
              <ul className="mt-3 space-y-2 pl-5">
                <li className="list-disc">Datos personales y contacto de emergencia.</li>
                <li className="list-disc">Idea del tatuaje, estilo y referencias.</li>
                <li className="list-disc">Consentimiento e información de salud.</li>
                <li className="list-disc">Firma digital incluida en este flujo.</li>
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Ubicación", "Ciudad de Guatemala"],
                ["Horario", "Lunes a sábado 10:00 - 19:00"],
                ["Contacto", "Instagram @tattoosby_ghost"],
              ].map(([label, value]) => (
                <article key={label} className="rounded-3xl border border-black/10 bg-[#fcfaf7] p-4 shadow-soft">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-accentDark">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-black/70">{value}</p>
                </article>
              ))}
            </div>
          </div>

          <form className="grid gap-4 rounded-[1.75rem] border border-black/10 bg-[#fcfaf7] p-5">
            {[
              ["Nombre completo", "text"],
              ["Teléfono", "tel"],
              ["Instagram", "text"],
              ["Idea del tatuaje", "text"],
              ["Parte del cuerpo", "text"],
              ["Fecha de la cita", "date"],
              ["Estilo deseado", "text"],
              ["Contacto de emergencia", "text"],
            ].map(([label, type]) => (
              <label key={label} className="grid gap-2 text-sm font-semibold text-black/70">
                {label}
                <input
                  type={type as string}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base outline-none transition placeholder:text-black/30 focus:border-accent focus:ring-4 focus:ring-accent/10"
                  placeholder={label}
                />
              </label>
            ))}

            <label className="grid gap-2 text-sm font-semibold text-black/70">
              Mensaje para el artista
              <textarea
                rows={5}
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base outline-none transition placeholder:text-black/30 focus:border-accent focus:ring-4 focus:ring-accent/10"
                placeholder="Describe el diseño, significado, referencias o cualquier detalle relevante."
              />
            </label>

            <label className="flex items-start gap-3 rounded-[1.5rem] border border-black/10 bg-white p-4 text-sm leading-6 text-black/70">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-black/20 text-accent focus:ring-accent" />
              <span>
                Confirmo que la información es correcta y acepto el consentimiento informado antes de enviar la solicitud.
              </span>
            </label>

            <div className="rounded-[1.5rem] border border-black/10 bg-white p-4">
              <p className="mb-3 text-sm font-bold text-ink">Firma digital</p>
              <SignaturePad />
            </div>

            <button type="button" className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:translate-y-[-1px]">
              Enviar formulario
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
