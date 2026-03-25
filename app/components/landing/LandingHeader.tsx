"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { clsx } from "clsx";

interface LandingHeaderProps {
  startReleaseHref: string;
  signInHref: string;
  bookDemoHref: string;
}

type MarketingTheme = "light" | "dark";

function readTheme(): MarketingTheme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.marketingTheme === "dark" ? "dark" : "light";
}

function writeTheme(theme: MarketingTheme) {
  document.documentElement.dataset.marketingTheme = theme;
  try {
    window.localStorage.setItem("urganize-marketing-theme", theme);
  } catch (error) {
    console.error("Unable to save marketing theme", error);
  }
}

function ThemeToggleButton({
  theme,
  onToggle,
  className,
}: {
  theme: MarketingTheme;
  onToggle: () => void;
  className?: string;
}) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={clsx(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--marketing-border)] bg-[var(--marketing-toggle-bg)] text-[var(--marketing-toggle-icon)] shadow-[0_12px_30px_var(--marketing-shadow)] transition hover:border-[color:var(--marketing-border-strong)]",
        className,
      )}
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </button>
  );
}

export function LandingHeader({
  startReleaseHref,
  signInHref,
  bookDemoHref,
}: LandingHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<MarketingTheme>("light");

  useEffect(() => {
    setTheme(readTheme());

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    const nextTheme: MarketingTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    writeTheme(nextTheme);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--marketing-border)] bg-[var(--marketing-bg)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
          <Link
            href="/"
            className="flex h-14 items-center overflow-hidden sm:h-16"
            aria-label="Urganize home"
          >
            <Image
              src="/images/urganize-logo.svg"
              alt="Urganize"
              width={680}
              height={144}
              className="marketing-wordmark mt-[-0.65rem] h-24 w-auto max-w-none sm:mt-[-0.8rem] sm:h-28"
              priority
            />
          </Link>

          <div className="hidden items-center gap-5 sm:flex">
            <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
            <a
              href={signInHref}
              className="text-sm font-medium text-[var(--marketing-text-muted)] transition hover:text-[var(--marketing-text)]"
            >
              Sign in
            </a>
            <a
              href={startReleaseHref}
              className="inline-flex items-center justify-center rounded-full bg-[var(--marketing-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--marketing-primary-text)] shadow-[0_14px_35px_var(--marketing-shadow-strong)] transition hover:bg-[var(--marketing-primary-hover)]"
            >
              Start your first release
            </a>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--marketing-border)] bg-[var(--marketing-toggle-bg)] text-[var(--marketing-text)] shadow-[0_12px_30px_var(--marketing-shadow)]"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={clsx(
            "overflow-hidden border-t border-[color:var(--marketing-border)] bg-[var(--marketing-bg-muted)] transition-[max-height,opacity] duration-300 sm:hidden",
            isOpen ? "max-h-[22rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="grid gap-3">
              <a
                href={startReleaseHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--marketing-primary)] px-5 py-3 text-sm font-semibold text-[var(--marketing-primary-text)]"
              >
                Start your first release
              </a>
              <a
                href={bookDemoHref}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--marketing-secondary-border)] bg-[var(--marketing-secondary)] px-5 py-3 text-sm font-semibold text-[var(--marketing-secondary-text)]"
              >
                Book a walkthrough
              </a>
              <a
                href={signInHref}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--marketing-border-strong)] bg-[var(--marketing-surface-muted)] px-5 py-3 text-sm font-medium text-[var(--marketing-text-muted)]"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[72px] sm:h-[84px]" />
    </>
  );
}
