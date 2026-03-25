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
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ddd2c3] bg-white text-sm font-semibold text-[#171311] shadow-sm">
                {index + 1}
              </span>
              {!isLast ? (
                <span className="mt-3 h-10 w-px bg-gradient-to-b from-[#d7cbbb] to-transparent" />
              ) : null}
            </div>

            <div className="pt-2">
              <p className="mb-0 text-base font-medium text-[#171311]">{step}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
