import Image from "next/image";

export default function Logo({ size = 44, text = true }: { size?: number; text?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image src="/logo.svg" alt="Farral Sourcing Pakistan" width={size} height={size} priority unoptimized />
      {text && (
        <span className="leading-tight">
          <span className="block font-display text-lg tracking-wide text-white">Farral Sourcing</span>
          <span className="block text-[10px] uppercase tracking-[0.35em] text-gold-2">Pakistan</span>
        </span>
      )}
    </span>
  );
}
