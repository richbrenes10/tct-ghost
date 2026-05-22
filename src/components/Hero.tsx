import { BrandMark } from "@/components/BrandMark";

const coverImage =
  "https://instagram.fgua9-1.fna.fbcdn.net/v/t39.30808-6/476094903_510782908708416_3619068814381180415_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzMwMjAxNTc1NzMzNTU5MDQ1Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuOTYwLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=an0o8hBM00kQ7kNvwECa-tM&_nc_oc=AdqE70VD7s0d6QHKdRrA7WD7nLha8fDBWhICu2xE3ioDxgXJAg8uOJbGpp96yCmKuBY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgua9-1.fna&_nc_gid=tMDa6tjWVapn4fDgbgll7A&_nc_ss=7a22e&oh=00_Af48jxNyUGrp-Uf-OgeHUaJJfgzm4cRCCZgCJoaT7YabPA&oe=6A15B118";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-7">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <BrandMark className="h-24 w-24 sm:h-28 sm:w-28" />
              <p className="rounded-full border border-accent/20 bg-ink px-5 py-3 text-xs font-black uppercase tracking-[0.28em] text-paper shadow-soft">
                tattoosby_ghost
              </p>
            </div>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Ghost
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-black/68 sm:text-xl">
              Lettering, sombras y composiciones black and grey con lectura fuerte, volumen y presencia visual.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/cita" className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper shadow-soft transition hover:translate-y-[-1px]">
              Haz tu cita
            </a>
            <a href="#artists" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-bold text-ink transition hover:bg-black hover:text-paper">
              Ver galeria
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-x-5 translate-y-5 rounded-[2rem] bg-black/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
            <img src={coverImage} alt="Portada de True Collective Tattoo" className="h-[34rem] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
