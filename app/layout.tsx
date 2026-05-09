import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Collective Tattoo | Portal de clientes",
  description: "Portal de clientes para True Collective Tattoo con artistas, FAQs, recomendaciones, firma digital y formulario de cita."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
