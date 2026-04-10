import type { Metadata } from "next";
import { LandingHeader } from "./components/landing/LandingHeader";
import {
  FinalCTASection,
  FooterTagline,
  HeroSection,
  LogoStripSection,
  MirrorSection,
  PlaybookSpotlightSection,
  TestimonialSection,
  ThreeFeaturesSection,
} from "./components/landing/Sections";

const SIGN_IN_HREF = "https://app.urganize.app/auth";

const HOMEPAGE_TITLE = "Urganize — Your Release Deserves a Process";
const HOMEPAGE_DESCRIPTION =
  "Urganize gives artist teams one place to run every stage of a release, from credits to launch.";

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
      <div className="relative">
        <LandingHeader signInHref={SIGN_IN_HREF} />

        <main>
          <HeroSection />
          <LogoStripSection />
          <MirrorSection />
          <PlaybookSpotlightSection />
          <ThreeFeaturesSection />
          <TestimonialSection />
          <FinalCTASection />
        </main>

        <FooterTagline />
      </div>
    </div>
  );
}
