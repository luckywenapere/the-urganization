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
    <article className="rounded-[2rem] border border-[#e3dacd] bg-[#fbf8f2] p-8 shadow-[0_20px_45px_rgba(23,19,17,0.06)]">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e6ddd1] bg-white">
        <Quote className="h-5 w-5 text-[#171311]" />
      </div>
      <p className="mb-5 max-w-3xl text-2xl font-medium leading-tight text-[#171311] sm:text-3xl">
        {quote}
      </p>
      <p className="mb-0 text-sm uppercase tracking-[0.22em] text-[#6d6459]">
        {attribution}
      </p>
    </article>
  );
}
