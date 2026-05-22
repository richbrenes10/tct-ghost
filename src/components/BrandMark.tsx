type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-11 w-11" }: BrandMarkProps) {
  return (
    <span className={`grid shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-soft ${className}`}>
      <img src="/ghost-icon.png" alt="Ghost Tattoo" className="h-full w-full object-contain p-1" />
    </span>
  );
}
