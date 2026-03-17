import type { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  tone?: "neutral" | "warning" | "accent";
}

export function ProblemCard({
  icon: Icon,
  title,
  body,
  tone = "neutral",
}: ProblemCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div
        className={clsx(
          "mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border",
          tone === "neutral" && "border-white/10 bg-white/[0.05] text-white/74",
          tone === "warning" && "border-[#ffb47b]/18 bg-[#ffb47b]/10 text-[#ffd1ad]",
          tone === "accent" && "border-[#94c4ff]/18 bg-[#94c4ff]/10 text-[#d7e7ff]",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
      <p className="mb-0 max-w-[24ch] text-base leading-7 text-white/68">{body}</p>
    </article>
  );
}
