import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { SectionShell } from "./SectionShell";
import { WaitlistButton } from "./WaitlistButton";

type SocialProofLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  imageClassName?: string;
};

const socialProofLogos: SocialProofLogo[] = [
  {
    src: "/images/logos/logo-1.svg",
    alt: "Logo 1",
    width: 160,
    height: 160,
    imageClassName: "max-h-10 sm:max-h-11",
  },
  {
    src: "/images/logos/logo-2.svg",
    alt: "Logo 2",
    width: 160,
    height: 160,
    imageClassName: "max-h-10 sm:max-h-11",
  },
  {
    src: "/images/logos/logo-3.svg",
    alt: "Logo 3",
    width: 160,
    height: 160,
    imageClassName: "max-h-10 sm:max-h-11",
  },
  {
    src: "/images/logos/logo-4.svg",
    alt: "Logo 4",
    width: 240,
    height: 80,
    imageClassName: "max-h-7 sm:max-h-8",
  },
];

const featureColumns = [
  {
    title: "A process for every release.",
    body: "Structured phases from day one so your team always knows what stage you're in and what comes next.",
  },
  {
    title: "Collect collaborator credits without chasing anyone.",
    body: "Send one link. Everyone fills in their details. Everything is structured automatically - no follow-ups needed.",
  },
  {
    title: "One workspace. Zero confusion.",
    body: "Assets, tasks, timelines, and responsibilities all live in one place your whole team can see.",
  },
] as const;

const solidButtonClassName =
  "relative z-20 inline-flex cursor-pointer touch-manipulation items-center justify-center rounded-full bg-[var(--marketing-primary)] px-7 py-3.5 text-sm font-medium tracking-[-0.02em] text-[var(--marketing-primary-text)] shadow-[0_20px_45px_var(--marketing-shadow-strong)] hover:bg-[var(--marketing-primary-hover)] sm:text-base";

function LogoStrip({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mono-label text-center text-[var(--marketing-text-subtle)]">
        Labels are already inside.
      </p>

      <div className="mt-10 overflow-x-auto overscroll-x-contain pb-2">
        <div className="flex w-max min-w-full items-center justify-center gap-12 px-1 sm:gap-16">
          {socialProofLogos.map((logo) => (
            <div
              key={logo.alt}
              className="flex min-w-[9rem] shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`h-auto w-auto opacity-70 ${logo.imageClassName ?? ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <SectionShell
      className="pb-20 pt-[120px] sm:pb-24 sm:pt-[140px] lg:pb-32 lg:pt-[168px]"
      containerClassName="max-w-[84rem] px-6 sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex max-w-[56rem] flex-col items-center text-center">
        <div className="flex flex-col items-center gap-12 sm:gap-14">
          <h1 className="hero-fade-in mx-auto max-w-[16ch] text-balance text-[3.6rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--marketing-text)] sm:text-[5.4rem] lg:text-[7.1rem]">
            Your release deserves a process.
          </h1>

          <p className="hero-fade-in hero-delay-1 mx-auto block w-full max-w-[42rem] text-balance text-center text-lg leading-8 text-[var(--marketing-text-muted)] sm:text-[1.3rem] sm:leading-9">
            Urganize gives artist teams one place to run every stage of a release
            from credits to launch.
          </p>
        </div>

        <div className="hero-fade-in hero-delay-2 relative z-20 mt-10 flex justify-center">
          <WaitlistButton className={solidButtonClassName} source="hero_waitlist">
            Join the waitlist
          </WaitlistButton>
        </div>

        <LogoStrip className="hero-fade-in hero-delay-3 mt-14 w-full max-w-[64rem] sm:mt-16" />
      </div>

      <div className="hero-fade-in hero-delay-3 mt-14 sm:mt-18 lg:mt-24">
        <Image
          src="/images/landing/hero-dashboard.png"
          alt="Urganize dashboard showing releases, search, and readiness progress in one workspace."
          width={1920}
          height={1396}
          priority
          className="h-auto w-full"
          sizes="(min-width: 1440px) 1344px, (min-width: 1024px) calc(100vw - 80px), 100vw"
        />
      </div>
    </SectionShell>
  );
}

export function LogoStripSection() {
  return (
    <ScrollReveal>
      <SectionShell
        containerClassName="max-w-[84rem] px-6 sm:px-8 lg:px-10"
        className="bg-transparent py-[80px] sm:py-[80px] lg:py-[80px]"
      >
        <LogoStrip />
      </SectionShell>
    </ScrollReveal>
  );
}

export function MirrorSection() {
  return (
    <ScrollReveal>
      <SectionShell
        className="py-[100px] lg:py-[140px]"
        containerClassName="max-w-[74rem] px-6 sm:px-8 lg:px-10"
      >
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <p className="mx-auto block w-full max-w-[800px] text-center font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--marketing-text)]">
            Most artists are running releases out of Notes apps, group chats,
            and memory.
          </p>

          <p className="mx-auto mt-12 block w-full max-w-[640px] text-center font-sans text-[clamp(1.1rem,2vw,1.4rem)] leading-8 text-[var(--marketing-text-muted)]">
            Urganize replaces all of that with one structured workspace your
            entire team can actually use.
          </p>
        </div>
      </SectionShell>
    </ScrollReveal>
  );
}

export function PlaybookSpotlightSection() {
  return (
    <ScrollReveal>
      <SectionShell containerClassName="max-w-[84rem] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[46rem] text-center">
          <h2 className="text-balance text-[3rem] font-semibold tracking-[-0.05em] text-[var(--marketing-text)] sm:text-[4.2rem] lg:text-[5rem]">
            Every release has phases. Now yours does too.
          </h2>
        </div>

        <div className="mt-16 w-full">
          <Image
            src="/images/landing/release-playbook.png"
            alt="Urganize release playbook showing phased release progress and structured tasks."
            width={1920}
            height={932}
            className="block h-auto w-full"
            sizes="(min-width: 1440px) 1344px, (min-width: 1024px) calc(100vw - 80px), 100vw"
          />

          <p
            className="max-w-[42rem] text-lg leading-8 text-[var(--marketing-text-muted)]"
            style={{
              textAlign: "center",
              display: "block",
              width: "100%",
              margin: "24px auto 0 auto",
            }}
          >
            From pre-production to release day - every step is mapped so nothing
            gets missed.
          </p>
        </div>
      </SectionShell>
    </ScrollReveal>
  );
}

export function ThreeFeaturesSection() {
  return (
    <ScrollReveal>
      <SectionShell containerClassName="max-w-[84rem] px-6 sm:px-8 lg:px-10">
        <div className="grid divide-y divide-[color:var(--marketing-border)] border-y border-[color:var(--marketing-border)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {featureColumns.map((feature) => (
            <div key={feature.title} className="py-10 lg:px-10 lg:py-14">
              <h3 className="text-balance text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--marketing-text)] sm:text-[2.6rem]">
                {feature.title}
              </h3>
              <p className="mt-5 max-w-[22rem] text-base leading-8 text-[var(--marketing-text-muted)] sm:text-[1.05rem]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>
    </ScrollReveal>
  );
}

export function TestimonialSection() {
  return (
    <ScrollReveal>
      <SectionShell containerClassName="max-w-[64rem] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[54rem] text-center">
          <blockquote className="relative pt-20 before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:font-display before:text-[7rem] before:leading-none before:text-[var(--marketing-text-subtle)] before:content-['“'] sm:before:text-[8.5rem]">
            <p className="text-balance font-display text-[3rem] font-semibold leading-[1] tracking-[-0.05em] text-[var(--marketing-text)] sm:text-[4.2rem] lg:text-[5rem]">
              It’s actually an industry need.
            </p>
          </blockquote>

          <p className="mt-10 font-mono text-[0.8rem] uppercase tracking-[0.22em] text-[var(--marketing-text-subtle)]">
            Artist Manager
          </p>
        </div>
      </SectionShell>
    </ScrollReveal>
  );
}

export function FinalCTASection() {
  return (
    <ScrollReveal>
      <SectionShell
        id="waitlist"
        containerClassName="max-w-[56rem] px-6 sm:px-8 lg:px-10"
      >
        <div className="text-center">
          <h2 className="text-balance text-[3rem] font-semibold tracking-[-0.05em] text-[var(--marketing-text)] sm:text-[4.2rem] lg:text-[5rem]">
            Releases shouldn&apos;t be this hard to run.
          </h2>

          <div className="relative z-20 mt-10 flex justify-center">
            <WaitlistButton className={solidButtonClassName} source="final_cta_waitlist">
              Join the waitlist
            </WaitlistButton>
          </div>

        </div>
      </SectionShell>
    </ScrollReveal>
  );
}

export function FooterTagline() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pb-10 pt-14 sm:pb-12 sm:pt-16 lg:pb-14 lg:pt-20"
      style={{ borderTop: "0.5px solid var(--marketing-border)" }}
    >
      <div className="mx-auto max-w-[84rem] px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="flex h-12 items-center overflow-hidden"
              aria-label="Urganize home"
            >
              <Image
                src="/images/urganize-logo.svg"
                alt="Urganize"
                width={680}
                height={144}
                className="marketing-wordmark mt-[-0.6rem] h-24 w-auto max-w-none"
              />
            </Link>

          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm tracking-[-0.01em] text-[var(--marketing-text-subtle)]">
            <Link href="/privacy" className="hover:text-[var(--marketing-text)]">
              Privacy
            </Link>
            <Link href="/team" className="hover:text-[var(--marketing-text)]">
              Team
            </Link>
            <Link href="/press" className="hover:text-[var(--marketing-text)]">
              Press
            </Link>
            <a
              href="mailto:theurganization@gmail.com"
              className="hover:text-[var(--marketing-text)]"
            >
              Contact
            </a>
            <Link href="/terms" className="hover:text-[var(--marketing-text)]">
              Terms
            </Link>
          </div>
        </div>

        <p className="mt-12 text-center font-mono text-[0.68rem] tracking-[0.16em] text-[var(--marketing-text-subtle)]">
          &copy; {currentYear} Urganize. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
