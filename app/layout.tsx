import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Collective Tattoo | tattoosby_ghost",
  description: "EDGAR GARCIA | LETRAS Y SOMBRAS. Agenda y portafolio de tattoosby_ghost.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/ghost-icon.png"
  }
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
