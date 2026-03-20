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
        <div className="flex items-center justify-between gap-4 border-b border-white/8 px-5 py-4">
          <div className="min-w-0">
            <p className="mb-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">
              {eyebrow}
            </p>
            <p className="mt-1 mb-0 truncate text-sm font-medium text-white/82">{title}</p>
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

        <div className="border-b border-white/8 px-5 py-3">
          <p className="mb-0 text-sm text-white/58">{subtitle}</p>
        </div>

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

      {children ? <div className="relative mt-4">{children}</div> : null}
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
        "rounded-[1.4rem] border px-4 py-3 shadow-[0_16px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl",
        tone === "default" && "border-white/10 bg-black/28",
        tone === "success" && "border-[#d0ff97]/18 bg-[#b7ff6e]/10",
        tone === "accent" && "border-[#94c4ff]/18 bg-[#94c4ff]/10",
      )}
    >
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
        <span className="text-[#d8ffab]">{icon}</span>
        <span>{label}</span>
      </div>
      <p className="mb-0 text-sm font-medium leading-6 text-white/88">{value}</p>
    </div>
  );
}

export function HeroCommandCenterMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/hero-dashboard.png"
      alt="Urganize release dashboard showing collaborator credits, structured metadata, and release readiness."
      eyebrow="Release command center"
      title="The real Urganize workspace"
      subtitle="Credits, release structure, and readiness in one dashboard"
      aspectClassName="aspect-[1895/890]"
      priority
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <InfoPill
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Live status"
          value="See what is complete without opening five different tools."
          tone="success"
        />
        <InfoPill
          icon={<Sparkles className="h-4 w-4" />}
          label="Structured"
          value="Collaborator inputs turn into organized release data automatically."
          tone="accent"
        />
        <InfoPill
          icon={<BellRing className="h-4 w-4" />}
          label="Next action"
          value="The dashboard keeps the team moving instead of waiting in chats."
        />
      </div>
    </ProductScreenshot>
  );
}

export function PublicCreditFormMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/credit-form-mobile.png"
      alt="Urganize mobile credit form used by collaborators to submit release information."
      eyebrow="Public credit link"
      title="Collaborators submit from their phone"
      subtitle="One secure link collects the details you need without back-and-forth"
      aspectClassName="aspect-[499/1080]"
      className="mx-auto max-w-[23rem]"
      imageClassName="object-contain bg-[#050806]"
      chrome="mobile"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoPill
          icon={<Sparkles className="h-4 w-4" />}
          label="One link"
          value="Share once and collect credits in a format the team can actually use."
          tone="success"
        />
        <InfoPill
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Cleaner intake"
          value="The form keeps submissions structured before they ever reach the release workspace."
        />
      </div>
    </ProductScreenshot>
  );
}

export function MetadataPageMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/release-info.png"
      alt="Urganize release information page showing structured output for a release."
      eyebrow="Structured output"
      title="Release information, already organized"
      subtitle="Use the real release record instead of rebuilding metadata in distributor tools"
      aspectClassName="aspect-[1403/848]"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoPill
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Prepared"
          value="Credit details are grouped and ready before distribution week."
          tone="success"
        />
        <InfoPill
          icon={<Sparkles className="h-4 w-4" />}
          label="Less re-entry"
          value="The page gives teams a structured source of truth for every release."
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
      eyebrow="Readiness guidance"
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
          label="Next"
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
      alt="Urganize credits section showing collaborator submissions inside a release."
      eyebrow="Submission proof"
      title="Real collaborator submissions in one place"
      subtitle="Track incoming credits inside the release instead of chasing updates across tools"
      aspectClassName="aspect-[887/693]"
    />
  );
}
