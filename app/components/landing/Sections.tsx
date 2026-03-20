import type { ReactNode } from "react";
import Link from "next/link";
import { Check, ChevronRight, CircleAlert } from "lucide-react";
import { FeatureStepList } from "./FeatureStepList";
import { LandingCTAGroup } from "./LandingCTAGroup";
import {
  DirectiveCardMockup,
  HeroCommandCenterMockup,
  MetadataPageMockup,
  PublicCreditFormMockup,
  SubmissionProofMockup,
} from "./Mockups";
import { SectionShell } from "./SectionShell";
import { TestimonialCard } from "./TestimonialCard";

const solutionSteps = [
  "Create your release",
  "Copy your credit link",
  "Send it anywhere",
  "Credits come in",
  "Release info is organized",
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
      {children}
    </div>
  );
}

function ProofLine({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <p
      className={[
        "mb-0 text-sm font-medium leading-6 text-white/64",
        align === "center" ? "text-center" : "text-left",
      ].join(" ")}
    >
      {children}
    </p>
  );
}

interface CTAProps {
  startReleaseHref: string;
  bookDemoHref: string;
}

export function HeroSection({ startReleaseHref, bookDemoHref }: CTAProps) {
  return (
    <SectionShell className="pt-12 sm:pt-16 lg:pt-20">
      <div className="grid items-center gap-10 xl:gap-14 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="max-w-2xl">
          <Eyebrow>Release operations software for music teams</Eyebrow>

          <h1 className="mt-8 mb-0 max-w-[12ch] text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.75rem] lg:leading-[0.96]">
            Send one link. Collect all your song credits.
          </h1>

          <p className="mt-6 mb-0 max-w-[62ch] text-base leading-8 text-white/72 sm:text-lg">
            Create a release, copy one credit link, collect credits, and keep your release info
            organized before deadline week.
          </p>

          <div className="mt-8">
            <LandingCTAGroup
              startReleaseHref={startReleaseHref}
              bookDemoHref={bookDemoHref}
            />
          </div>

          <div className="mt-5">
            <ProofLine>100+ credits collected through Urganize</ProofLine>
          </div>

        </div>

        <HeroCommandCenterMockup />
      </div>
    </SectionShell>
  );
}

export function SolutionStepsSection() {
  return (
    <SectionShell id="mechanism">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-xl">
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            One link. All credits. Organized release info.
          </h2>
          <p className="mt-5 mb-0 max-w-[52ch] text-base leading-8 text-white/70">
            Copy your credit link once, send it anywhere, and let Urganize collect credits inside
            the release.
          </p>

          <div className="mt-4">
            <ProofLine>Used on real releases — 100+ credits collected</ProofLine>
          </div>

          <div className="mt-8">
            <FeatureStepList steps={solutionSteps} />
          </div>
        </div>

        <PublicCreditFormMockup />
      </div>
    </SectionShell>
  );
}

export function MetadataPayoffSection() {
  return (
    <SectionShell className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <MetadataPageMockup />

        <div className="max-w-xl">
          <Eyebrow>Release Info</Eyebrow>
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Collect once. Use everywhere.
          </h2>
          <p className="mt-5 mb-0 text-base leading-8 text-white/72">
            Every credit submitted is organized into release info you can actually use.
          </p>
          <p className="mt-4 mb-0 text-base leading-8 text-white/72">
            When it&apos;s time to distribute your release, the details are already prepared.
          </p>
          <p className="mt-4 mb-0 text-base leading-8 text-white/72">
            No more re-entering credits across distributor forms.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

export function DirectiveSection() {
  return (
    <SectionShell id="directive">
      <div className="grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="max-w-xl">
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Always know the next action
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Ready",
                body: "See what is complete without opening five different tools.",
                icon: Check,
              },
              {
                label: "Missing",
                body: "See blockers early enough to fix them before deadline week.",
                icon: CircleAlert,
              },
              {
                label: "Next Action",
                body: "See the next action without guessing or chasing updates.",
                icon: ChevronRight,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="mb-3 flex items-center gap-2 text-[#d8ffab]">
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    {item.label}
                  </span>
                </div>
                <p className="mb-0 text-sm leading-6 text-white/68">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <DirectiveCardMockup />
      </div>
    </SectionShell>
  );
}

export function SocialProofSection() {
  return (
    <SectionShell className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Built for real release workflows
        </h2>
        <p className="mt-5 mb-0 text-base leading-8 text-white/68">
          Real submissions live inside the release so managers and artists can see what&apos;s in,
          what&apos;s missing, and what still needs a follow-up.
        </p>
      </div>

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <SubmissionProofMockup />

        <div className="space-y-5">
          <TestimonialCard
            quote="“Mad. It works as a storage system also.”"
            supportingText="Built for managers and small label teams handling multiple artists"
          />
        </div>
      </div>
    </SectionShell>
  );
}

export function FooterTagline() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="mb-0 text-sm font-medium text-white/78">
          Urganize is the operating system for music teams.
        </p>

        <div className="flex items-center gap-5 text-sm text-white/52">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
