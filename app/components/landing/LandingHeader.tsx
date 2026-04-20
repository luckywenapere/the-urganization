import Image from "next/image";
import Link from "next/link";
import { WaitlistButton } from "./WaitlistButton";

export function LandingHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--marketing-border)] bg-transparent">
        <div className="mx-auto flex max-w-[84rem] items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex h-11 shrink-0 items-center overflow-hidden sm:h-12"
            aria-label="Urganize home"
          >
            <Image
              src="/images/urganize-logo.svg"
              alt="Urganize"
              width={680}
              height={144}
              className="marketing-wordmark mt-[-0.55rem] h-20 w-auto max-w-none sm:mt-[-0.7rem] sm:h-24"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <WaitlistButton
              className="text-sm font-medium tracking-[-0.02em] text-[var(--marketing-text-muted)] hover:text-[var(--marketing-text)]"
              source="header_login"
            >
              Login
            </WaitlistButton>
            <WaitlistButton
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--marketing-border-strong)] px-4 py-2.5 text-sm font-medium tracking-[-0.02em] text-[var(--marketing-text)] hover:border-[color:var(--marketing-text)] hover:bg-[var(--marketing-surface)] sm:px-5"
              source="header_get_started"
            >
              Get started
            </WaitlistButton>
          </div>
        </div>
      </header>

      <div className="h-[76px] sm:h-[84px]" />
    </>
  );
}
