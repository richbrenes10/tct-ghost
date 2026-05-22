import { BrandMark } from "@/components/BrandMark";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center px-5 py-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <BrandMark className="h-20 w-20" />
        <p className="text-sm font-black uppercase tracking-[0.28em] text-accentDark">Cargando</p>
      </div>
    </main>
  );
}
