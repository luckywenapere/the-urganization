import Image from "next/image";
import { clsx } from "clsx";

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
}: ProductScreenshotProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[2rem] border border-[#e2d9cc] bg-white p-3 shadow-[0_28px_60px_rgba(23,19,17,0.08)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.55rem] border border-[#ddd3c7] bg-[#16120f]">
        {showHeader ? (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-white/8 px-4 py-3 sm:px-5 sm:py-4">
              <div className="min-w-0">
                <p className="mb-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  {eyebrow}
                </p>
                <p className="mt-1 mb-0 text-sm font-medium leading-5 text-white/82">
                  {title}
                </p>
              </div>

              {chrome === "desktop" ? (
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff8d79]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd76d]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f6f0e6]" />
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

        <div className={clsx("relative overflow-hidden bg-[#120f0d]", aspectClassName)}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 720px, (min-width: 1024px) 56vw, (min-width: 640px) 88vw, 100vw"
            className={clsx(
              "object-cover object-top transition-transform duration-500",
              imageClassName,
            )}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,15,13,0)_0%,rgba(18,15,13,0.04)_72%,rgba(18,15,13,0.12)_100%)]" />
        </div>
      </div>
    </div>
  );
}

export function HeroReleaseWorkspaceMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/hero-dashboard - Copy.png"
      alt="Urganize release dashboard showing a release workspace, credit-link flow, and active releases."
      eyebrow="Release Workspace"
      title="Create the release, send the link, track progress"
      subtitle="One workspace for credits, release info, and execution"
      aspectClassName="aspect-[1664/754]"
      priority
      showHeader={false}
    />
  );
}

export function CollaboratorLinkMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/credit-form-mobile.png"
      alt="Urganize collaborator form showing a no-login credit submission flow."
      eyebrow="Collaborator Link"
      title="Collect the right details"
      subtitle="Send one form and capture the information every release needs"
      aspectClassName="aspect-[499/1080]"
      className="mx-auto max-w-[22rem]"
      imageClassName="object-contain bg-[#120f0d]"
      chrome="mobile"
    />
  );
}

export function ReleaseWorkspaceMockup() {
  return (
    <ProductScreenshot
      src="/images/landing/readiness-next-action2.png"
      alt="Urganize release playbook showing progress, phases, and what to do next."
      eyebrow="Release Playbook"
      title="Keep execution visible"
      subtitle="Track progress, ownership, and the next action from one place"
      aspectClassName="aspect-[1324/768]"
      showHeader={false}
    />
  );
}
