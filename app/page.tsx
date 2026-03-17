import type { Metadata } from "next";
import { LandingHeader } from "./components/landing/LandingHeader";
import {
  ComparisonSection,
  DirectiveSection,
  FinalCTASection,
  FooterTagline,
  HeroSection,
  MetadataPayoffSection,
  PricingSection,
  ProblemCardsSection,
  SolutionStepsSection,
  SocialProofSection,
} from "./components/landing/Sections";

const START_RELEASE_HREF = "https://app.urganize.app/auth";
const BOOK_DEMO_HREF =
  "mailto:theurganization@gmail.com?subject=Book%20a%20demo%20with%20Urganize";

export const metadata: Metadata = {
  title: "Stop chasing collaborators and re-typing song credits",
  description:
    "Stop chasing collaborators and re-typing song credits. Collect collaborator credits once, structure metadata automatically, and prepare releases weeks before deadlines.",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06100d] text-[#f6f7ef] selection:bg-[#b7ff6e]/30">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,255,110,0.16),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(120,182,255,0.14),transparent_24%),linear-gradient(180deg,#08130f_0%,#06100d_42%,#040705_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#081512] to-transparent" />
      </div>

      <div className="relative z-10">
        <LandingHeader
          startReleaseHref={START_RELEASE_HREF}
          bookDemoHref={BOOK_DEMO_HREF}
        />

        <main>
          <HeroSection
            startReleaseHref={START_RELEASE_HREF}
            bookDemoHref={BOOK_DEMO_HREF}
          />
          <ProblemCardsSection />
          <SolutionStepsSection />
          <MetadataPayoffSection />
          <DirectiveSection />
          <SocialProofSection />
          <ComparisonSection />
          <PricingSection
            startReleaseHref={START_RELEASE_HREF}
            bookDemoHref={BOOK_DEMO_HREF}
          />
          <FinalCTASection
            startReleaseHref={START_RELEASE_HREF}
            bookDemoHref={BOOK_DEMO_HREF}
          />
        </main>

        <FooterTagline />
      </div>
    </div>
  );
}
