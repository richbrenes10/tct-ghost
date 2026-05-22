"use client";

import { FormEvent, useState } from "react";
import { SignaturePad } from "@/components/SignaturePad";

type UploadFile = {
  name: string;
  type: string;
  data: string;
};

const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

const fields = [
  ["name", "Nombre completo", "text"],
  ["email", "Correo electrónico", "email"],
  ["phone", "Teléfono", "tel"],
  ["instagram", "Instagram", "text"],
  ["tattooIdea", "Idea del tatuaje", "text"],
  ["bodyPart", "Parte del cuerpo", "text"],
  ["appointmentDate", "Fecha de la cita", "date"],
  ["appointmentTime", "Hora tentativa", "time"],
  ["durationHours", "Duración estimada en horas", "number"],
  ["style", "Estilo deseado", "text"],
  ["emergencyContact", "Contacto de emergencia", "text"],
];

async function fileToUpload(file: File): Promise<UploadFile> {
  const data = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

  return {
    name: file.name,
    type: file.type || "application/octet-stream",
    data,
  };
}

export function AppointmentForm() {
  const [signature, setSignature] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!scriptUrl) {
      setStatus("Falta configurar NEXT_PUBLIC_APPS_SCRIPT_URL con la URL del Web App de Google Apps Script.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const referenceFiles = formData.getAll("references").filter((file): file is File => file instanceof File && file.size > 0);

    setIsSubmitting(true);
    setStatus("Enviando solicitud...");

    try {
      const references = await Promise.all(referenceFiles.slice(0, 5).map(fileToUpload));
      const payload = {
        submittedAt: new Date().toISOString(),
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        instagram: String(formData.get("instagram") || ""),
        tattooIdea: String(formData.get("tattooIdea") || ""),
        bodyPart: String(formData.get("bodyPart") || ""),
        appointmentDate: String(formData.get("appointmentDate") || ""),
        appointmentTime: String(formData.get("appointmentTime") || ""),
        durationHours: String(formData.get("durationHours") || "2"),
        style: String(formData.get("style") || ""),
        emergencyContact: String(formData.get("emergencyContact") || ""),
        message: String(formData.get("message") || ""),
        consent: formData.get("consent") === "on",
        signature,
        references,
      };

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setStatus("Solicitud enviada. Edgar recibirá los datos y el cliente recibirá confirmación por correo.");
      form.reset();
      setSignature("");
    } catch {
      setStatus("No se pudo enviar la solicitud. Revisa la conexión o la configuración del Apps Script.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="px-5 py-16 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white p-6 shadow-soft lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">Citas</p>
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Formulario previo a la cita</h2>
            <p className="text-base leading-7 text-black/65">
              Los datos se guardan en Google Sheets. Las imágenes de referencia y la firma se guardan en Google Drive, y la hoja conserva sus enlaces.
            </p>
            <div className="rounded-[1.5rem] bg-paper p-5 text-sm leading-6 text-black/70">
              <p className="font-bold text-ink">Flujo de agenda:</p>
              <ul className="mt-3 space-y-2 pl-5">
                <li className="list-disc">Registro del cliente en Sheets.</li>
                <li className="list-disc">Referencias visuales en Drive.</li>
                <li className="list-disc">Evento en el calendario Cita de Edgar.</li>
                <li className="list-disc">Correo de confirmación al cliente.</li>
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Ubicación", "C.C. Prisa zona 10"],
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

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[1.75rem] border border-black/10 bg-[#fcfaf7] p-5">
            {fields.map(([name, label, type]) => (
              <label key={name} className="grid gap-2 text-sm font-semibold text-black/70">
                {label}
                <input
                  name={name}
                  type={type}
                  min={name === "durationHours" ? "1" : undefined}
                  step={name === "durationHours" ? "0.5" : undefined}
                  required={["name", "email", "phone", "tattooIdea", "appointmentDate", "appointmentTime"].includes(name)}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base outline-none transition placeholder:text-black/30 focus:border-accent focus:ring-4 focus:ring-accent/10"
                  placeholder={label}
                />
              </label>
            ))}

            <label className="grid gap-2 text-sm font-semibold text-black/70">
              Imágenes de referencia
              <input
                name="references"
                type="file"
                accept="image/*"
                multiple
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base file:mr-4 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-bold file:text-paper"
              />
              <span className="text-xs leading-5 text-black/50">Puedes cargar hasta 5 imágenes. Se guardarán en Drive y se enlazarán en Sheets.</span>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-black/70">
              Mensaje para el artista
              <textarea
                name="message"
                rows={5}
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base outline-none transition placeholder:text-black/30 focus:border-accent focus:ring-4 focus:ring-accent/10"
                placeholder="Describe el diseño, significado, referencias o cualquier detalle relevante."
              />
            </label>

            <label className="flex items-start gap-3 rounded-[1.5rem] border border-black/10 bg-white p-4 text-sm leading-6 text-black/70">
              <input name="consent" required type="checkbox" className="mt-1 h-4 w-4 rounded border-black/20 text-accent focus:ring-accent" />
              <span>
                Confirmo que la información es correcta y acepto el consentimiento informado antes de enviar la solicitud.
              </span>
            </label>

            <div className="rounded-[1.5rem] border border-black/10 bg-white p-4">
              <p className="mb-3 text-sm font-bold text-ink">Firma digital</p>
              <SignaturePad onChange={setSignature} />
            </div>

            {status ? <p className="rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-black/70">{status}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Enviar formulario"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
