"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
  { href: "/team", label: "Team" },
  { href: "mailto:theurganization@gmail.com", label: "Contact" },
];

interface LandingHeaderProps {
  startReleaseHref: string;
  bookDemoHref: string;
}

export function LandingHeader({
  startReleaseHref,
  bookDemoHref,
}: LandingHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
          <Link
            href="/"
            className="flex h-14 items-center overflow-hidden sm:h-16"
          >
            <Image
              src="/images/urganize-logo.svg"
              alt="Urganize"
              width={680}
              height={144}
              className="mt-[-0.65rem] h-28 w-auto max-w-none sm:mt-[-0.8rem] sm:h-32"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/60 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={bookDemoHref}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/82 hover:border-white/18 hover:bg-white/[0.08]"
            >
              Book a demo
            </a>
            <a
              href={startReleaseHref}
              className="inline-flex rounded-full border border-[#b7ff6e]/25 bg-[#b7ff6e] px-4 py-2 text-sm font-semibold text-[#08110a] shadow-[0_18px_50px_rgba(183,255,110,0.16)] hover:border-[#b7ff6e]/35 hover:bg-[#b7ff6e]"
            >
              Start your release
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={clsx(
            "overflow-hidden bg-[#06100d]/94 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
            isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="mx-auto max-w-6xl px-6 py-5 sm:px-8">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/82"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4">
              <a
                href={bookDemoHref}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/82"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[68px] sm:h-[74px]" />
    </>
  );
}
