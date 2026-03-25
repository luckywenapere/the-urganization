import { clsx } from "clsx";

interface LandingCTAGroupProps {
  startReleaseHref: string;
  bookDemoHref: string;
  align?: "left" | "center";
  size?: "sm" | "md";
  tone?: "light" | "dark";
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

const toneClasses = {
  light: {
    primary:
      "bg-[var(--marketing-primary)] text-[var(--marketing-primary-text)] shadow-[0_20px_45px_var(--marketing-shadow-strong)] hover:bg-[var(--marketing-primary-hover)]",
    secondary:
      "border border-[color:var(--marketing-secondary-border)] bg-[var(--marketing-secondary)] text-[var(--marketing-secondary-text)] hover:border-[color:var(--marketing-border-strong)] hover:bg-[var(--marketing-secondary-hover)]",
  },
  dark: {
    primary:
      "bg-[#f6f0e6] text-[#171311] shadow-[0_20px_45px_rgba(0,0,0,0.24)] hover:bg-white",
    secondary:
      "border border-white/18 bg-white/8 text-white hover:border-white/28 hover:bg-white/12",
  },
};

export function LandingCTAGroup({
  startReleaseHref,
  bookDemoHref,
  align = "left",
  size = "md",
  tone = "light",
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
          "inline-flex w-full items-center justify-center rounded-full font-semibold transition sm:w-auto",
          sizeClasses[size].primary,
          toneClasses[tone].primary,
        )}
      >
        Start your first release
      </a>

      <a
        href={bookDemoHref}
        className={clsx(
          "inline-flex w-full items-center justify-center rounded-full font-semibold transition sm:w-auto",
          sizeClasses[size].secondary,
          toneClasses[tone].secondary,
        )}
      >
        Book a walkthrough
      </a>
    </div>
  );
}
