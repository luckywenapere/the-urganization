import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export function TestimonialCard({
  quote,
  attribution,
}: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-[color:var(--marketing-border)] bg-[var(--marketing-bg-muted)] p-8 shadow-[0_20px_45px_var(--marketing-shadow)]">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--marketing-border)] bg-[var(--marketing-surface)]">
        <Quote className="h-5 w-5 text-[var(--marketing-text)]" />
      </div>
      <p className="mb-5 max-w-3xl text-2xl font-medium leading-tight text-[var(--marketing-text)] sm:text-3xl">
        {quote}
      </p>
      <p className="mb-0 text-sm uppercase tracking-[0.22em] text-[var(--marketing-text-subtle)]">
        {attribution}
      </p>
    </article>
  );
}
