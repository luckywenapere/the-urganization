import type { Metadata } from "next";
import Image from "next/image";
import { LandingHeader } from "./components/landing/LandingHeader";
import {
  DirectiveSection,
  FooterTagline,
  HeroSection,
  MetadataPayoffSection,
  SolutionStepsSection,
  SocialProofSection,
} from "./components/landing/Sections";

const START_RELEASE_HREF = "https://app.urganize.app/auth";
const BOOK_DEMO_HREF =
  "mailto:theurganization@gmail.com?subject=Book%20a%20demo%20with%20Urganize";

export const metadata: Metadata = {
  title: "Send one link. Collect all your song credits.",
  description:
    "Create a release, copy one credit link, collect credits, and organize release info weeks before deadline week.",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06100d] text-[#f6f7ef] selection:bg-[#b7ff6e]/30">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-x-0 top-0 h-[34rem] overflow-hidden sm:h-[40rem] lg:h-[46rem]">
          <Image
            src="/images/hero-image.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-22"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,13,0.06)_0%,rgba(6,16,13,0.18)_28%,rgba(6,16,13,0.52)_62%,#06100d_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),linear-gradient(90deg,#06100d_0%,rgba(6,16,13,0.34)_20%,rgba(6,16,13,0.18)_80%,#06100d_100%)]" />
        </div>
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
          <SolutionStepsSection />
          <MetadataPayoffSection />
          <DirectiveSection />
          <SocialProofSection />
        </main>

        <FooterTagline />
      </div>
    </div>
  );
}
