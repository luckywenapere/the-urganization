import { Check, Minus } from "lucide-react";

interface WorkflowComparisonBlockProps {
  currentWorkflow: string[];
  urganizeWorkflow: string[];
}

export function WorkflowComparisonBlock({
  currentWorkflow,
  urganizeWorkflow,
}: WorkflowComparisonBlockProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <article className="rounded-[2rem] border border-[#ffb47b]/16 bg-[#ffb47b]/7 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd1ad]">
          Current workflow
        </p>

        <div className="space-y-3">
          {currentWorkflow.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-white/54">
                <Minus className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-white/82">{item}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[2rem] border border-[#d0ff97]/18 bg-[#b7ff6e]/9 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8ffab]">
          Urganize
        </p>

        <div className="space-y-3">
          {urganizeWorkflow.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b7ff6e]/12 text-[#d8ffab]">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
