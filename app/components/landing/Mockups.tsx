import type { ReactNode } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { BellRing, CheckCircle2, Sparkles } from "lucide-react";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  aspectClassName: string;
  className?: string;
  imageClassName?: string;
  chrome?: "desktop" | "mobile";
  priority?: boolean;
  showHeader?: boolean;
  children?: ReactNode;
}

function ProductScreenshot({
  src,
  alt,
  eyebrow,
  title,
  subtitle,
  aspectClassName,
  className,
  imageClassName,
  chrome = "desktop",
  priority = false,
  showHeader = true,
  children,
}: ProductScreenshotProps) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.30)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,255,110,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(120,182,255,0.14),transparent_24%)] opacity-90" />
      <div className="pointer-events-none absolute inset-x-14 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

      <div className="relative overflow-hidden rounded-[1.95rem] border border-white/8 bg-[#09120f]">
        {showHeader ? (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-white/8 px-4 py-3 sm:px-5 sm:py-4">
              <div className="min-w-0">
                <p className="mb-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">
                  {eyebrow}
                </p>
                <p className="mt-1 mb-0 text-sm font-medium leading-5 text-white/82">{title}</p>
              </div>

              {chrome === "desktop" ? (
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff8d79]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd76d]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b7ff6e]" />
                </div>
              ) : (
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/48">
                  Mobile
                </div>
              )}
            </div>

            <div className="border-b border-white/8 px-4 py-3 sm:px-5">
              <p className="mb-0 text-sm leading-6 text-white/58">{subtitle}</p>
            </div>
          </>
        ) : null}

        <div className={clsx("relative overflow-hidden bg-[#050806]", aspectClassName)}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, (min-width: 640px) 88vw, 100vw"
            className={clsx(
              "object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]",
              imageClassName,
            )}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,6,0)_0%,rgba(5,8,6,0.06)_65%,rgba(5,8,6,0.18)_100%)]" />
        </div>
      </div>

      {children ? <div className="relative mt-3 sm:mt-4">{children}</div> : null}
    </div>
  );
}

function InfoPill({
  icon,
  label,
  value,
  tone = "default",
}: {
  icon: ReactNode;
  label: string;
  value: string;
  tone?: "default" | "success" | "accent";
}) {
  return (
    <div
      className={clsx(
        "rounded-[1.4rem] border px-3.5 py-3 sm:px-4 shadow-[0_16px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl",
        tone === "default" && "border-white/10 bg-black/28",
        tone === "success" && "border-[#d0ff97]/18 bg-[#b7ff6e]/10",
        tone === "accent" && "border-[#94c4ff]/18 bg-[#94c4ff]/10",
      )}
    >
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
        <span className="text-[#d8ffab]">{icon}</span>
        <span>{label}</span>
      </div>
      <p className="mb-0 text-sm font-medium leading-5 sm:leading-6 text-white/88">{value}</p>
    </div>
  );
}

export function HeroCommandCenterMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/hero-dashboard.png"
      alt="Urganize release dashboard showing credits, release info, readiness, and the next action."
      eyebrow="Release Dashboard"
      title="Credits, Release Info, and Readiness"
      subtitle="Copy Credit Link, collect credits, and keep the release moving"
      aspectClassName="aspect-[1895/890]"
      priority
      showHeader={false}
    />
  );
}

export function PublicCreditFormMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/credit-form-mobile.png"
      alt="Urganize mobile credit form used to collect credits from one shared link."
      eyebrow="Collect Credits"
      title="Copy Credit Link"
      subtitle="Send it anywhere and credits come in without the back-and-forth"
      aspectClassName="aspect-[499/1080]"
      className="mx-auto max-w-[23rem]"
      imageClassName="object-contain bg-[#050806]"
      chrome="mobile"
      showHeader={false}
    >
      <div className="grid gap-3">
        <InfoPill
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Release Info"
          value="Submissions stay urganized."
        />
      </div>
    </ProductScreenshot>
  );
}

export function MetadataPageMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/release-info.png"
      alt="Urganize release info page showing organized credits and release details."
      eyebrow="Release Info"
      title="Release info, already organized"
      subtitle="Use the real release record instead of re-typing details in distributor tools"
      aspectClassName="aspect-[1403/848]"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoPill
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Readiness"
          value="Credit details are grouped and ready before distribution week."
          tone="success"
        />
        <InfoPill
          icon={<Sparkles className="h-4 w-4" />}
          label="Release Info"
          value="The page gives teams one organized source of truth for every release."
          tone="accent"
        />
      </div>
    </ProductScreenshot>
  );
}

export function DirectiveCardMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/readiness-next-action.png"
      alt="Urganize readiness view highlighting release guidance and next actions."
      eyebrow="Readiness"
      title="Guidance built into the release"
      subtitle="Track blockers, readiness, and the next action from the product itself"
      aspectClassName="aspect-[1410/837]"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <InfoPill
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Ready"
          value="Spot completed work at a glance."
          tone="success"
        />
        <InfoPill
          icon={<BellRing className="h-4 w-4" />}
          label="Missing"
          value="Catch blockers before deadline week."
        />
        <InfoPill
          icon={<Sparkles className="h-4 w-4" />}
          label="Next Action"
          value="Give the team one clear action to keep moving."
          tone="accent"
        />
      </div>
    </ProductScreenshot>
  );
}

export function SubmissionProofMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/credits-section.png"
      alt="Urganize credits section showing credits collected inside a release."
      eyebrow="Submission proof"
      title="Real credits collected in one place"
      subtitle="Track incoming credits inside the release instead of chasing updates across tools"
      aspectClassName="aspect-[887/693]"
    />
  );
}
