import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Agenda tu cita | True Collective Tattoo",
  description: "Agenda tu cita con Ghost Tattoo."
};

export default function AppointmentPage() {
  return (
    <main>
      <Header />
      <section className="px-5 pb-4 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">Agenda</p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-5xl">Datos y agenda de la cita</h1>
          <p className="max-w-2xl text-base leading-7 text-black/65">
            Comparte tus datos, referencias y disponibilidad para preparar tu sesion con Ghost.
          </p>
        </div>
      </section>
      <AppointmentForm />
      <Footer />
    </main>
  );
}
