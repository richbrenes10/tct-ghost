import { artistOneArtwork, artistThreeArtwork, artistTwoArtwork } from "@/components/tattooArtwork";

const artists = [
  {
    role: "Artista principal",
    name: 'Edgar Garcia “Ghost”',
    style: "Letras chicanas y sombras.",
    image: artistOneArtwork,
    alt: "Foto de Edgar Garcia, Ghost",
  },
  {
    role: "Estudio",
    name: "True Collective Tattoo",
    style: "Un estudio con varios artistas y distintos estilos disponibles.",
    image: artistTwoArtwork,
    alt: "Foto del estudio True Collective Tattoo",
  },
  {
    role: "Galeria",
    name: "Sesiones y referencias",
    style: "Consulta tu idea, define referencias y revisa disponibilidad para coordinar la cita.",
    image: artistThreeArtwork,
    alt: "Imagen de una sesion y ambiente de estudio",
  },
];

export function ArtistsSection() {
  return (
    <section id="artists" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">Artistas</p>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Conoce a los artistas antes de reservar</h2>
          <p className="text-base leading-7 text-black/65 sm:text-lg">
            Un bloque visual para que las personas identifiquen el estilo del estudio y elijan con más claridad.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {artists.map((artist) => (
            <article key={artist.name} className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
              <img src={artist.image} alt={artist.alt} className="h-64 w-full object-cover" />
              <div className="space-y-3 p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-accentDark">{artist.role}</p>
                <h3 className="text-2xl font-black tracking-tight text-ink">{artist.name}</h3>
                <p className="text-sm leading-6 text-black/65">{artist.style}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
