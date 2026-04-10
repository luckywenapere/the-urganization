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

export const metadata: Metadata = {
  title: "Urganize — Your release deserves a process.",
  description:
    "Urganize gives artist teams one place to run every stage of a release — from credits to launch. Join the waitlist.",
  metadataBase: new URL("https://urganize.app"),
  openGraph: {
    title: "Urganize — Your release deserves a process.",
    description:
      "Urganize gives artist teams one place to run every stage of a release — from credits to launch.",
    url: "https://urganize.app",
    siteName: "Urganize",
    images: [
      {
        url: "/images/landing/hero-dashboard.png",
        width: 1280,
        height: 800,
        alt: "Urganize release dashboard — track every release in one place.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urganize — Your release deserves a process.",
    description:
      "Urganize gives artist teams one place to run every stage of a release — from credits to launch.",
    images: ["/images/landing/hero-dashboard.png"],
  },
  keywords: [
    "music release management",
    "artist release tool",
    "release playbook",
    "music credits",
    "release workflow",
    "artist team software",
    "music SaaS",
  ],
  robots: {
    index: true,
    follow: true,
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
