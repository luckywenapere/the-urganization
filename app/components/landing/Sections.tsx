import type { ReactNode } from "react";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  Copy,
  Folder,
} from "lucide-react";
import { FeatureStepList } from "./FeatureStepList";
import { LandingCTAGroup } from "./LandingCTAGroup";
import {
  DirectiveCardMockup,
  HeroCommandCenterMockup,
  MetadataPageMockup,
  PublicCreditFormMockup,
  SubmissionProofMockup,
} from "./Mockups";
import { PricingCard } from "./PricingCard";
import { ProblemCard } from "./ProblemCard";
import { SectionShell } from "./SectionShell";
import { TestimonialCard } from "./TestimonialCard";
import { WorkflowComparisonBlock } from "./WorkflowComparisonBlock";

const problemCards = [
  {
    icon: Clock3,
    title: "Chasing collaborators",
    body: "Still waiting for credits and details",
    tone: "warning" as const,
  },
  {
    icon: Folder,
    title: "Scattered information",
    body: "Notes, WhatsApp, docs, and spreadsheets everywhere",
    tone: "neutral" as const,
  },
  {
    icon: Copy,
    title: "Re-typing metadata",
    body: "Copying the same details into distributor dashboards",
    tone: "accent" as const,
  },
];

const solutionSteps = [
  "Create a release",
  "Add collaborators",
  "Send a credit link",
  "Collect credits",
  "Review structured metadata",
];

const currentWorkflowItems = [
  "WhatsApp",
  "Notes",
  "Spreadsheets",
  "Distributor dashboards",
];

const urganizeItems = [
  "One release workspace",
  "Structured metadata",
  "Collaborator credit collection",
  "Clear release readiness",
];

const pricingPlans = [
  {
    name: "Monthly",
    price: "₦8,000 / month",
    summary: "For teams testing the workflow on their next release.",
  },
  {
    name: "8 Months",
    price: "₦54,000",
    summary: "For active teams that need one system across a full release cycle.",
    highlight: true,
    badge: "Recommended",
  },
  {
    name: "Yearly",
    price: "₦80,000 / year",
    summary: "For managers and label teams running releases all year.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
      {children}
    </div>
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

          <h1 className="mt-8 mb-0 max-w-[13ch] text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.75rem] lg:leading-[0.96]">
            Stop chasing collaborators and re-typing song credits
          </h1>

          <p className="mt-6 mb-0 max-w-[62ch] text-base leading-8 text-white/72 sm:text-lg">
            Urganize helps music teams collect collaborator credits and automatically organize
            release metadata so releases are ready weeks before deadlines.
          </p>

          <div className="mt-8">
            <LandingCTAGroup
              startReleaseHref={startReleaseHref}
              bookDemoHref={bookDemoHref}
            />
          </div>

          <p className="mt-5 mb-0 text-sm font-medium text-white/62">
            Free 1-month trial • No credit card required
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
            {[
              "Collect credits once",
              "Structure metadata automatically",
              "Know what to do next",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroCommandCenterMockup />
      </div>
    </SectionShell>
  );
}

export function ProblemCardsSection() {
  return (
    <SectionShell
      id="problem"
      className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>The broken workflow</Eyebrow>
        <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Releases break down before they even start
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {problemCards.map((card) => (
          <ProblemCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            body={card.body}
            tone={card.tone}
          />
        ))}
      </div>
    </SectionShell>
  );
}

export function SolutionStepsSection() {
  return (
    <SectionShell id="mechanism">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-xl">
          <Eyebrow>The mechanism</Eyebrow>
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            One link. All credits. Ready metadata.
          </h2>
          <p className="mt-5 mb-0 max-w-[52ch] text-base leading-8 text-white/70">
            Stop chasing details across chats, notes, Notion pages, and spreadsheets. Send a
            public credit link once and let Urganize organize every submission inside the release.
          </p>

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
          <Eyebrow>Metadata payoff</Eyebrow>
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Collect once. Use everywhere.
          </h2>
          <p className="mt-5 mb-0 text-base leading-8 text-white/72">
            Every credit submitted is automatically organized into structured metadata.
          </p>
          <p className="mt-4 mb-0 text-base leading-8 text-white/72">
            When it&apos;s time to distribute your release, your information is already prepared.
          </p>
          <p className="mt-4 mb-0 text-base leading-8 text-white/72">
            No more re-entering details into distributor forms.
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
        <DirectiveCardMockup />

        <div className="max-w-xl">
          <Eyebrow>The directive system</Eyebrow>
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Always know what to do next
          </h2>
          <p className="mt-5 mb-0 text-base leading-8 text-white/72">
            Urganize shows you what&apos;s ready, what&apos;s missing, and what to do next — from
            collecting credits to preparing your release for distribution.
          </p>

          <div className="mt-6 rounded-[1.75rem] border border-[#d0ff97]/16 bg-[#b7ff6e]/8 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ffab]">
              The difference
            </p>
            <p className="mb-0 text-base leading-7 text-white/82">
              Most tools show information. Urganize shows the next action.
            </p>
          </div>

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
                label: "Next",
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
      </div>
    </SectionShell>
  );
}

export function SocialProofSection() {
  return (
    <SectionShell className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Submission proof</Eyebrow>
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

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ffab]">
              Why it matters
            </p>
            <p className="mb-0 text-base leading-7 text-white/78">
              The product itself becomes the source of truth for submissions, so proof of progress
              is already inside the workspace instead of buried in messages and notes.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function ComparisonSection() {
  return (
    <SectionShell id="comparison">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Why switch</Eyebrow>
        <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Stop using tools that weren&apos;t built for releases
        </h2>
        <p className="mt-5 mb-0 text-base leading-8 text-white/68">
          WhatsApp, Notes, spreadsheets, and distributor dashboards create fragments.
          Urganize gives your team one release workspace instead.
        </p>
      </div>

      <div className="mt-12">
        <WorkflowComparisonBlock
          currentWorkflow={currentWorkflowItems}
          urganizeWorkflow={urganizeItems}
        />
      </div>
    </SectionShell>
  );
}

export function PricingSection({ startReleaseHref, bookDemoHref }: CTAProps) {
  return (
    <SectionShell
      id="pricing"
      className="border-y border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Simple pricing for growing teams
        </h2>
        <p className="mt-5 mb-0 text-base leading-8 text-white/68">
          Free 1-month trial • No credit card required
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            summary={plan.summary}
            highlight={plan.highlight}
            badge={plan.badge}
          />
        ))}
      </div>

      <div className="mt-10">
        <LandingCTAGroup
          startReleaseHref={startReleaseHref}
          bookDemoHref={bookDemoHref}
          align="center"
        />
      </div>
    </SectionShell>
  );
}

export function FinalCTASection({ startReleaseHref, bookDemoHref }: CTAProps) {
  return (
    <SectionShell className="pb-16 sm:pb-20 lg:pb-24">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(183,255,110,0.14),rgba(255,255,255,0.03)_55%,rgba(120,182,255,0.09))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.24)] sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <Eyebrow>Final call</Eyebrow>
          <h2 className="mt-6 mb-0 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Prepare your next release the right way
          </h2>
          <p className="mt-5 mb-0 text-base leading-8 text-white/78">
            <span className="block">Stop chasing collaborators.</span>
            <span className="block">Stop re-typing metadata.</span>
            <span className="block">Start organizing your releases properly.</span>
          </p>

          <div className="mt-8">
            <LandingCTAGroup
              startReleaseHref={startReleaseHref}
              bookDemoHref={bookDemoHref}
            />
          </div>
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
