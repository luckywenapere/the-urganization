interface FeatureStepListProps {
  steps: string[];
}

export function FeatureStepList({ steps }: FeatureStepListProps) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li key={step} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#b7ff6e]/16 bg-[#0d1914] text-sm font-semibold text-[#b7ff6e]">
                {index + 1}
              </span>
              {!isLast ? (
                <span className="mt-3 h-10 w-px bg-gradient-to-b from-white/20 to-transparent" />
              ) : null}
            </div>

            <div className="pt-2">
              <p className="mb-0 text-base font-medium text-white">{step}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
