import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /** Overall height; width follows aspect ratio */
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src="/guardian-logo.png"
      alt="Guardian Professional Security"
      width={420}
      height={120}
      decoding="async"
      className={cn("h-7 sm:h-9 w-auto max-w-[min(100%,220px)] sm:max-w-[260px] object-contain object-left", className)}
    />
  );
}
