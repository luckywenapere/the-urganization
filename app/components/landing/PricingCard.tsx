import { clsx } from "clsx";

interface PricingCardProps {
  name: string;
  price: string;
  summary: string;
  highlight?: boolean;
  badge?: string;
}

export function PricingCard({
  name,
  price,
  summary,
  highlight = false,
  badge,
}: PricingCardProps) {
  return (
    <article
      className={clsx(
        "relative h-full rounded-[2rem] border p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl",
        highlight
          ? "border-[#b7ff6e]/24 bg-[linear-gradient(180deg,rgba(183,255,110,0.12),rgba(255,255,255,0.04))]"
          : "border-white/10 bg-white/[0.05]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-0 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
            {name}
          </p>
          <p className="mt-4 mb-0 text-3xl font-semibold tracking-tight text-white">
            {price}
          </p>
        </div>

        {badge ? (
          <span className="rounded-full border border-[#b7ff6e]/24 bg-[#b7ff6e]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b7ff6e]">
            {badge}
          </span>
        ) : null}
      </div>

      <p className="mt-6 mb-0 max-w-[24ch] text-sm leading-6 text-white/62">{summary}</p>
    </article>
  );
}
