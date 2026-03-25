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
      "bg-[#171311] text-white shadow-[0_20px_45px_rgba(23,19,17,0.14)] hover:bg-[#2b241f]",
    secondary:
      "border border-[#dcd3c6] bg-white text-[#171311] hover:border-[#cbbfad] hover:bg-[#f8f4ed]",
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
