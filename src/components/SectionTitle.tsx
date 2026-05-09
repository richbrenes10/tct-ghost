type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-accentDark">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-black/65 sm:text-lg">{description}</p>
    </div>
  );
}
