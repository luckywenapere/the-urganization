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

const START_RELEASE_HREF = "https://app.urganize.app/auth";
const SIGN_IN_HREF = "https://app.urganize.app/auth";
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
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ee] text-[#171311] selection:bg-[#ddd2c3] selection:text-[#171311]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(228,220,208,0.78),transparent_38%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.96),transparent_42%)]" />
      </div>

      <div className="relative z-10">
        <LandingHeader
          startReleaseHref={START_RELEASE_HREF}
          signInHref={SIGN_IN_HREF}
          bookDemoHref={BOOK_WALKTHROUGH_HREF}
        />

        <main>
          <HeroSection
            startReleaseHref={START_RELEASE_HREF}
            bookDemoHref={BOOK_WALKTHROUGH_HREF}
          />
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
