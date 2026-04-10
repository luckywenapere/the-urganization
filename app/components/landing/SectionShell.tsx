import type { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionShellProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function SectionShell({
  children,
  id,
  className,
  containerClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={clsx("relative scroll-mt-24 py-20 sm:py-24 lg:py-32", className)}
    >
      <div className={clsx("mx-auto max-w-6xl px-6 sm:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
