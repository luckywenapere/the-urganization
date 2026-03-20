import type { ReactNode } from "react";
import Link from "next/link";
import { RiInstagramLine, RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";
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
  "Create release",
  "Copy credit link",
  "Send anywhere",
  "Credits come in",
  "Release info, urganized",
];

const socialLinks = [
  {
    href: "https://instagram.com/urganize",
    label: "Instagram",
    icon: RiInstagramLine,
  },
  {
    href: "https://linkedin.com/company/urganize",
    label: "LinkedIn",
    icon: RiLinkedinFill,
  },
  {
    href: "https://x.com/urganize",
    label: "X",
    icon: RiTwitterXLine,
  },
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
          <Eyebrow>Music Business Operations Software</Eyebrow>

          <h1 className="mt-8 mb-0 max-w-[12ch] text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.75rem] lg:leading-[0.96]">
            Send one link. Collect all your song credits.
          </h1>

          

          <div className="mt-8">
            <LandingCTAGroup
              startReleaseHref={startReleaseHref}
              bookDemoHref={bookDemoHref}
            />
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
            Urganized release info.
          </h2>
          <div className="mt-8">
            <FeatureStepList steps={solutionSteps} />
          </div>
        </div>

        <div>
          <PublicCreditFormMockup />
        </div>
      </div>
    </SectionShell>
  );
}

export function MetadataPayoffSection() {
  const bookDemoHref =
    "mailto:theurganization@gmail.com?subject=Book%20a%20demo%20with%20Urganize";

  return (
    <SectionShell className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <MetadataPageMockup />

        <div className="max-w-xl">
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Use everywhere.
          </h2>

          <div className="mt-8">
            <a
              href={bookDemoHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white hover:border-white/22 hover:bg-white/[0.08] sm:w-auto sm:text-base"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function DirectiveSection() {
  const bookDemoHref =
    "mailto:theurganization@gmail.com?subject=Book%20a%20demo%20with%20Urganize";

  return (
    <SectionShell id="directive">
      <div className="grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="order-2 max-w-xl lg:order-1">
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Always know the next action
          </h2>

          <div className="mt-8">
            <a
              href={bookDemoHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white hover:border-white/22 hover:bg-white/[0.08] sm:w-auto sm:text-base"
            >
              Book a demo
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <DirectiveCardMockup />
        </div>
      </div>
    </SectionShell>
  );
}

export function SocialProofSection() {
  return (
    <SectionShell className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
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
          Music Business Operating System
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/52">
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/team" className="hover:text-white">
            Team
          </Link>
          <a
            href="mailto:theurganization@gmail.com"
            className="hover:text-white"
          >
            Contact
          </a>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
