import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  supportingText: string;
}

export function TestimonialCard({
  quote,
  supportingText,
}: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
        <Quote className="h-5 w-5 text-[#b7ff6e]" />
      </div>
      <p className="mb-5 max-w-3xl text-2xl font-medium leading-tight text-white sm:text-3xl">
        {quote}
      </p>
      <p className="mb-0 text-sm uppercase tracking-[0.22em] text-white/55">
        {supportingText}
      </p>
    </article>
  );
}
