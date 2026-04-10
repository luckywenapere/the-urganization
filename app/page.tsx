import type { Metadata } from "next";
import { LandingHeader } from "./components/landing/LandingHeader";
import {
  FinalCTASection,
  FooterTagline,
  HeroSection,
  HowItWorksSection,
  LogoStripSection,
  ProductValueSection,
  TrustSection,
  VisualProofSection,
} from "./components/landing/Sections";

const SIGN_IN_HREF = "https://app.urganize.app/auth";
const START_RELEASE_HREF = "https://app.urganize.app/auth";
const BOOK_WALKTHROUGH_HREF =
  "mailto:theurganization@gmail.com?subject=Book%20a%20walkthrough%20with%20Urganize";

const HOMEPAGE_TITLE =
  "Urganize — Collect Song Credits and Run Releases in One Place";
const HOMEPAGE_DESCRIPTION =
  "Urganize helps artist teams collect collaborator credits, organize release assets, and track every step of a release from start to finish.";

export const metadata: Metadata = {
  title: {
    absolute: HOMEPAGE_TITLE,
  },
  description: HOMEPAGE_DESCRIPTION,
  openGraph: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    url: "https://urganize.app",
  },
  twitter: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--marketing-bg)] text-[var(--marketing-text)] selection:bg-[var(--marketing-selection)] selection:text-[var(--marketing-text)]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--marketing-glow-left),transparent_38%),radial-gradient(circle_at_top_right,var(--marketing-glow-right),transparent_42%)]" />
      </div>

      <div className="relative z-10">
        <LandingHeader signInHref={SIGN_IN_HREF} />

        <main>
          <HeroSection />
          <LogoStripSection />
          <ProductValueSection />
          <VisualProofSection />
          <HowItWorksSection />
          <TrustSection />
          <FinalCTASection
            startReleaseHref={START_RELEASE_HREF}
            bookDemoHref={BOOK_WALKTHROUGH_HREF}
          />
        </main>

        <FooterTagline />
      </div>
    </div>
  );
}
