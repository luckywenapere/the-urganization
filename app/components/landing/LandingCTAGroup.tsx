import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface LandingCTAGroupProps {
  startReleaseHref: string;
  bookDemoHref: string;
  align?: "left" | "center";
  size?: "sm" | "md";
  className?: string;
}

const sizeClasses = {
  sm: {
    primary: "px-4 py-2.5 text-sm",
    secondary: "px-4 py-2.5 text-sm",
  },
  md: {
    primary: "px-6 py-3.5 text-sm sm:text-base",
    secondary: "px-6 py-3.5 text-sm sm:text-base",
  },
};

export function LandingCTAGroup({
  startReleaseHref,
  bookDemoHref,
  align = "left",
  size = "md",
  className,
}: LandingCTAGroupProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 sm:flex-row",
        align === "center" ? "sm:justify-center" : "sm:justify-start",
        className,
      )}
    >
      <a
        href={startReleaseHref}
        className={clsx(
          "inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d0ff97]/30 bg-[#b7ff6e] font-semibold text-[#08110a] shadow-[0_22px_60px_rgba(183,255,110,0.18)] hover:bg-[#ceff98] sm:w-auto",
          sizeClasses[size].primary,
        )}
      >
        <span>Start your release</span>
        <ArrowRight className="h-4 w-4" />
      </a>

      <a
        href={bookDemoHref}
        className={clsx(
          "inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.04] font-semibold text-white hover:border-white/22 hover:bg-white/[0.08] sm:w-auto",
          sizeClasses[size].secondary,
        )}
      >
        Book a demo
      </a>
    </div>
  );
}
