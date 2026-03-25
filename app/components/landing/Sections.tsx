import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { FeatureStepList } from "./FeatureStepList";
import { LandingCTAGroup } from "./LandingCTAGroup";
import {
  CollaboratorLinkMockup,
  HeroReleaseWorkspaceMockup,
  ReleaseWorkspaceMockup,
} from "./Mockups";
import { SectionShell } from "./SectionShell";
import { TestimonialCard } from "./TestimonialCard";

const productValueCards = [
  {
    title: "Collect credits without chasing anyone",
    body: "Send one link. Collaborators fill in their details. Everything is structured automatically.",
  },
  {
    title: "Keep your release organized",
    body: "Assets, timelines, notes, and responsibilities all live in one workspace.",
  },
  {
    title: "Always know what happens next",
    body: "Each stage of your release is mapped so nothing gets missed.",
  },
] as const;

const workflowSteps = [
  "Create your release",
  "Send your collaborator link",
  "Collect credits automatically",
  "Track tasks and timelines",
  "Execute without missing steps",
] as const;

const trustBullets = [
  "One source of truth",
  "Clear timelines",
  "No scattered tools",
] as const;

type SocialProofLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const socialProofLogos: SocialProofLogo[] = [];

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
] as const;

function SectionHeading({
  title,
  body,
  align = "left",
  eyebrow,
}: {
  title: string;
  body?: string;
  align?: "left" | "center";
  eyebrow?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#7a7063]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mb-0 text-balance text-[2rem] font-semibold tracking-tight text-[#171311] sm:text-[2.6rem]">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 mb-0 text-lg leading-8 text-[#5c544a]">{body}</p>
      ) : null}
    </div>
  );
}

function SectionCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-[#e2d9cc] bg-white p-6 shadow-[0_20px_45px_rgba(23,19,17,0.05)] sm:p-8 ${className}`}
    >
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
    <SectionShell className="pt-10 sm:pt-14 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="max-w-2xl">
          <h1 className="mb-0 text-balance text-[2.9rem] font-semibold tracking-[-0.04em] text-[#171311] sm:text-[4.2rem] sm:leading-[1.02]">
            <span className="block">Collect song credits with one link.</span>
            <span className="mt-2 block">Run your entire release in one place.</span>
          </h1>

          <p className="mt-6 mb-0 max-w-xl text-lg leading-8 text-[#5c544a] sm:text-xl">
            Send one link to collaborators, collect structured credits, and keep your
            release organized from start to finish.
          </p>

          <LandingCTAGroup
            startReleaseHref={startReleaseHref}
            bookDemoHref={bookDemoHref}
            className="mt-8"
          />
        </div>

        <HeroReleaseWorkspaceMockup />
      </div>
    </SectionShell>
  );
}

export function LogoStripSection() {
  return (
    <section className="border-y border-[#ece4d8] bg-[#fbf8f2] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <p className="mb-5 text-center text-sm font-medium text-[#6d6459]">
          Trusted by artists, managers, and release teams
        </p>

        {socialProofLogos.length > 0 ? (
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {socialProofLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-16 items-center justify-center rounded-2xl border border-[#ece4d8] bg-white/80 px-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-8 w-auto opacity-60 grayscale"
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            aria-label="Social proof logo slots ready for approved artist and team logos"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-16 rounded-2xl border border-[#ece4d8] bg-white/75"
                aria-hidden="true"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ProductValueSection() {
  return (
    <SectionShell>
      <SectionHeading
        title="Everything your release needs. In one place."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {productValueCards.map((card) => (
          <SectionCard key={card.title} className="h-full">
            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#171311]">
              {card.title}
            </h3>
            <p className="mb-0 text-base leading-7 text-[#5c544a]">{card.body}</p>
          </SectionCard>
        ))}
      </div>
    </SectionShell>
  );
}

export function VisualProofSection() {
  return (
    <SectionShell className="border-y border-[#ece4d8] bg-[#fbf8f2]">
      <SectionHeading
        title="Start with the information every release needs. Then run the release with clarity."
        align="center"
      />

      <div className="mt-12 space-y-8">
        <SectionCard>
          <div className="grid items-center gap-10 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="max-w-xl">
              <h3 className="mb-3 text-3xl font-semibold tracking-tight text-[#171311]">
                Collect structured credits from collaborators
              </h3>
              <p className="mb-0 text-lg leading-8 text-[#5c544a]">
                Use a simple link to gather the information every release needs.
              </p>
            </div>

            <CollaboratorLinkMockup />
          </div>
        </SectionCard>

        <SectionCard>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ReleaseWorkspaceMockup />

            <div className="max-w-xl">
              <h3 className="mb-3 text-3xl font-semibold tracking-tight text-[#171311]">
                Track tasks, timelines, and assets in one place
              </h3>
              <p className="mb-0 text-lg leading-8 text-[#5c544a]">
                Turn release chaos into a structured workflow your team can actually
                execute.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>
    </SectionShell>
  );
}

export function HowItWorksSection() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading title="Set up your release in minutes" />

        <SectionCard>
          <FeatureStepList steps={[...workflowSteps]} />
        </SectionCard>
      </div>
    </SectionShell>
  );
}

export function TrustSection() {
  return (
    <SectionShell className="border-y border-[#ece4d8] bg-[#fbf8f2]">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionCard>
          <SectionHeading
            title="Built for teams that take releases seriously"
            body="Urganize gives artist teams structure, visibility, and control across the full release process."
          />

          <ul className="mt-8 grid gap-3">
            {trustBullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-[#ece3d7] bg-[#fbf8f2] px-4 py-3 text-base font-medium text-[#171311]"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </SectionCard>

        <TestimonialCard
          quote="It’s actually an industry need."
          attribution="Artist Manager"
        />
      </div>
    </SectionShell>
  );
}

export function FinalCTASection({ startReleaseHref, bookDemoHref }: CTAProps) {
  return (
    <SectionShell>
      <div className="rounded-[2.25rem] bg-[#171311] px-6 py-12 text-white shadow-[0_30px_80px_rgba(23,19,17,0.18)] sm:px-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-0 text-balance text-[2rem] font-semibold tracking-tight text-white sm:text-[2.8rem]">
            Run your next release with clarity
          </h2>
          <LandingCTAGroup
            startReleaseHref={startReleaseHref}
            bookDemoHref={bookDemoHref}
            align="center"
            tone="dark"
            className="mt-8"
          />
        </div>
      </div>
    </SectionShell>
  );
}

export function FooterTagline() {
  return (
    <footer className="border-t border-[#e6ded1] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="mb-0 text-sm font-medium text-[#4c443b]">
          Built for serious release teams
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a7063]">
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e6ddd1] bg-white text-[#4c443b] transition hover:border-[#d7ccbe] hover:text-[#171311]"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <Link href="/privacy" className="hover:text-[#171311]">
            Privacy
          </Link>
          <Link href="/team" className="hover:text-[#171311]">
            Team
          </Link>
          <a
            href="mailto:theurganization@gmail.com"
            className="hover:text-[#171311]"
          >
            Contact
          </a>
          <Link href="/terms" className="hover:text-[#171311]">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
