"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

interface LandingHeaderProps {
  startReleaseHref: string;
  signInHref: string;
  bookDemoHref: string;
}

export function LandingHeader({
  startReleaseHref,
  signInHref,
  bookDemoHref,
}: LandingHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e6ded1] bg-[#f7f4ee]/90 backdrop-blur-xl">
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
              className="mt-[-0.65rem] h-24 w-auto max-w-none invert sm:mt-[-0.8rem] sm:h-28"
              priority
            />
          </Link>

          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={signInHref}
              className="text-sm font-medium text-[#5c544a] transition hover:text-[#171311]"
            >
              Sign in
            </a>
            <a
              href={startReleaseHref}
              className="inline-flex items-center justify-center rounded-full bg-[#171311] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(23,19,17,0.16)] transition hover:bg-[#2b241f]"
            >
              Start your first release
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e1d8cb] bg-white/80 text-[#171311] shadow-sm sm:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={clsx(
            "overflow-hidden border-t border-[#ece4d8] bg-[#fbf8f2] transition-[max-height,opacity] duration-300 sm:hidden",
            isOpen ? "max-h-[22rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="grid gap-3">
              <a
                href={startReleaseHref}
                className="inline-flex items-center justify-center rounded-full bg-[#171311] px-5 py-3 text-sm font-semibold text-white"
              >
                Start your first release
              </a>
              <a
                href={bookDemoHref}
                className="inline-flex items-center justify-center rounded-full border border-[#ddd4c7] bg-white px-5 py-3 text-sm font-semibold text-[#171311]"
              >
                Book a walkthrough
              </a>
              <a
                href={signInHref}
                className="inline-flex items-center justify-center rounded-full border border-[#ddd4c7] bg-[#f5f0e8] px-5 py-3 text-sm font-medium text-[#4c443b]"
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
