export function FeaturesSection() {
  return (
    <section id="about" className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 border-y border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">About</p>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">EDGAR GARCIA | LETRAS Y SOMBRAS</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-black/65 sm:text-lg">
          <p>
            El lettering en tatuajes dibuja letras y frases a medida para darles una identidad propia. Cada palabra se trabaja como composicion: lectura, peso visual, ritmo y adaptacion al cuerpo.
          </p>
          <p>
            El sombreado define luz, volumen y profundidad. Puede levantar una frase con efecto 3D, separarla de la piel con una sombra suave o darle un caracter mas oscuro con negros profundos.
          </p>
          <div className="grid gap-4 text-sm leading-7 text-black/65 sm:grid-cols-2">
            <div>
              <h3 className="font-black text-ink">Estilos</h3>
              <p>Chicano, gotico, script y dark lettering, segun la zona, el tamano y la fuerza que pida la pieza.</p>
            </div>
            <div>
              <h3 className="font-black text-ink">Sombras</h3>
              <p>Drop shadow, relieve, brillos e iluminacion para que el texto tenga contraste y presencia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
