"use client";

import Link from "next/link";
import FAQ from "./components/FAQ";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiTwitterXFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import { FoundingCouncilSection } from "./components/FoundingCouncilSection";
import FounderPOV from "./components/FounderPOV";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Floating nav CTA visibility control
  const [showNavCta, setShowNavCta] = useState(false);

  // Observe these areas:
  // 1) Hero CTA (top button)
  // 2) How-it-works CTA (button under How it works)
  // 3) Next CTA section (#early-access)
  const heroCtaWrapRef = useRef<HTMLDivElement | null>(null);
  const howItWorksCtaWrapRef = useRef<HTMLDivElement | null>(null);

  const [isHeroCtaVisible, setIsHeroCtaVisible] = useState(true);
  const [isHowItWorksCtaVisible, setIsHowItWorksCtaVisible] = useState(false);
  const [isNextCtaVisible, setIsNextCtaVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe hero CTA wrapper
  useEffect(() => {
    const el = heroCtaWrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsHeroCtaVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Observe How-it-works CTA wrapper
  useEffect(() => {
    const el = howItWorksCtaWrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsHowItWorksCtaVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Observe next CTA section (#early-access)
  useEffect(() => {
    const el = document.getElementById("early-access");
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsNextCtaVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Final rule:
  // Hide nav CTA when ANY main CTA is visible (hero / how-it-works CTA / early-access section)
  useEffect(() => {
    setShowNavCta(!isHeroCtaVisible && !isHowItWorksCtaVisible && !isNextCtaVisible);
  }, [isHeroCtaVisible, isHowItWorksCtaVisible, isNextCtaVisible]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  const logos = [
    { src: "/images/logo-1.png", alt: "Company Logo 1" },
    { src: "/images/logo-2.png", alt: "Company Logo 2" },
    { src: "/images/logo-3.png", alt: "Company Logo 3" },
    { src: "/images/logo-4.png", alt: "Company Logo 4" },
    { src: "/images/logo-5.png", alt: "Company Logo 5" },
    { src: "/images/logo-6.png", alt: "Company Logo 6" },
    { src: "/images/logo-7.png", alt: "Company Logo 7" },
  ];

  // Slide animation for floating-bar CTA (and layout shift for "How it works")
  const navCtaMotion = {
    initial: { opacity: 0, x: 14 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 14 },
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-emerald-500/30">
      {/* --- BACKGROUND MESH --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-600/10 rounded-full blur-[140px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] opacity-30" />
      </div>

      {/* --- NAVIGATION: FLOATING ISLAND --- */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl transition-all duration-500 ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-2xl transition-all duration-500 ${
            scrolled
              ? "bg-black/90 shadow-[0_8px_32px_rgba(0,0,0,0.9)]"
              : "bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/urganize-logo.png"
              alt="Urganize"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div layout>
              <Link
                href="/features"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                How it works
              </Link>
            </motion.div>

            <AnimatePresence mode="popLayout">
              {showNavCta && (
                <motion.div key="nav-cta" layout {...navCtaMotion}>
                  <Link
                    href="https://app.urganize.app/auth"
                    className="px-5 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    Start Your Release
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* --- MOBILE MENU PANEL --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-0 w-full mt-4 p-8 rounded-[2.5rem] bg-black/90 border border-white/10 backdrop-blur-3xl md:hidden flex flex-col items-center gap-8 shadow-2xl"
            >
              <Link
                href="/features"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold text-neutral-400 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="https://app.urganize.app/auth"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-5 bg-emerald-500 text-black text-lg font-bold rounded-full hover:bg-emerald-400 active:scale-95 transition-all"
              >
                Start Your Release
              </Link>

              {/* Subtle Socials in Menu */}
              <div className="flex gap-6 pt-4 border-t border-white/5 w-full justify-center">
                <Link
                  href="https://instagram.com/urganize"
                  className="text-[10px] text-neutral-600 uppercase tracking-widest"
                >
                  Instagram
                </Link>
                <Link
                  href="https://x.com/urganize"
                  className="text-[10px] text-neutral-600 uppercase tracking-widest"
                >
                  X / Twitter
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center justify-center pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-image.webp"
              alt="Creative team"
              fill
              className="object-cover opacity-40 grayscale-[20%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-[18ch] sm:max-w-[20ch] md:max-w-[24ch] text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[0.92]"
            >
              Release music without the stress of
              <span className="text-emerald-400"> not knowing what to do.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              <span className="text-white font-semibold">Urganize</span> is a release
              operating system for artist managers. It gives you AI-guided steps,
              organized tasks, and a content plan so you can promote music properly
              without guessing.
            </motion.p>

            {/* CTA Buttons (Observed) */}
            <motion.div
              ref={heroCtaWrapRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="https://app.urganize.app/auth"
                className="px-10 py-5 bg-emerald-500 text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Start Your Release
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- PROBLEM SECTION --- */}
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Artist managers don&apos;t fail because they don&apos;t care.
            </h2>
            <p className="text-xl text-neutral-400 mb-12">They fail because promotion is chaotic.</p>
            <div className="text-xl text-neutral-400 space-y-3">
              <p>No clear steps.</p>
              <p>No structure.</p>
              <p>Too many moving parts.</p>
              <p>Too much guessing.</p>
              <p className="pt-4 font-semibold">
                Most releases die quietly not because the music is bad, but because the process is broken.
              </p>
              <p className="pt-4 text-emerald-400 font-bold text-2xl">Urganize fixes that.</p>
            </div>
          </motion.div>
        </section>

        {/* --- SOLUTION / FEATURES SECTION --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Urganize helps artist managers release music with structure.
            </h2>
            <p className="text-2xl text-white font-semibold mb-8">
              Instead of wondering what to do next, Urganize tells you.
            </p>
            <div className="text-xl text-neutral-400 space-y-6">
              <p>Instead of scattered notes, you get organized tasks.</p>
              <p>Instead of random promotion, you get a content plan.</p>
              <p className="text-emerald-400 font-bold text-2xl">One system. One flow. Zero confusion.</p>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto mt-20">
            {/* Badge moved to just above Benefits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                Built by an Oracle Certified AI Pro
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-emerald-500/20">
              <h3 className="text-3xl font-bold mb-8 text-center">Benefits</h3>
              <ul className="space-y-4 text-neutral-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl mt-1">•</span>
                  <span>Clear step-by-step guidance for every release</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl mt-1">•</span>
                  <span>AI adapts tasks based on your current release stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl mt-1">•</span>
                  <span>Built-in content planning for promotion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl mt-1">•</span>
                  <span>Less stress. Better execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl mt-1">•</span>
                  <span>No prior marketing knowledge required</span>
                </li>
              </ul>
              <p className="text-emerald-400 font-semibold text-center mt-8 pt-8 border-t border-white/10">
                Currently free while we build with early users.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">How it works</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-neutral-300">
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <span className="text-emerald-400 font-bold text-3xl flex-shrink-0">1.</span>
                <p>Create a new release</p>
              </motion.div>
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <span className="text-emerald-400 font-bold text-3xl flex-shrink-0">2.</span>
                <p>Urganize asks a few questions about your current situation</p>
              </motion.div>
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <span className="text-emerald-400 font-bold text-3xl flex-shrink-0">3.</span>
                <p>AI generates personalized step-by-step tasks</p>
              </motion.div>
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <span className="text-emerald-400 font-bold text-3xl flex-shrink-0">4.</span>
                <p>You get a content plan for promotion</p>
              </motion.div>
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <span className="text-emerald-400 font-bold text-3xl flex-shrink-0">5.</span>
                <p>You execute with clarity</p>
              </motion.div>
            </div>

            <motion.div {...fadeInUp} className="mt-12 p-8 rounded-[2rem] bg-neutral-900/50 border border-emerald-500/20 text-center">
              <p className="text-emerald-400 font-bold text-2xl">That&apos;s it.</p>
              <p className="text-emerald-400 font-bold text-2xl">No guessing.</p>
            </motion.div>

            {/* CTA under How it works (Observed) */}
            <motion.div
              ref={howItWorksCtaWrapRef}
              {...fadeInUp}
              className="mt-10 flex justify-center"
            >
              <Link
                href="https://app.urganize.app/auth"
                className="px-10 py-5 bg-emerald-500 text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] text-center"
              >
                Start Your Release
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- EXAMPLE WORKFLOWS SECTION --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Example workflows</h2>
            <p className="text-xl text-neutral-400">early preview</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="p-10 rounded-[2.5rem] bg-neutral-900/80 border border-white/10">
              <h3 className="text-3xl font-bold mb-6">Example 1 - New single release</h3>
              <ul className="space-y-3 text-neutral-300 text-lg">
                <li>Manager creates release</li>
                <li>Answers questions (date, platforms, assets ready?)</li>
                <li className="pt-2 font-semibold text-white">Urganize generates:</li>
                <li className="ml-4">• Pre-release checklist</li>
                <li className="ml-4">• Content ideas</li>
                <li className="ml-4">• Posting timeline</li>
                <li className="pt-2">Manager follows tasks inside one dashboard</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="p-10 rounded-[2.5rem] bg-neutral-900/80 border border-white/10">
              <h3 className="text-3xl font-bold mb-6">Example 2 - Late promotion rescue</h3>
              <p className="text-neutral-300 text-lg mb-4">Artist already dropped music.</p>
              <p className="text-neutral-300 text-lg mb-4 font-semibold text-white">Urganize adjusts:</p>
              <ul className="space-y-3 text-neutral-300 text-lg">
                <li>• Focus shifts to post-release content</li>
                <li>• Playlist outreach tasks appear</li>
                <li>• Social engagement steps activate</li>
              </ul>
              <p className="pt-4 text-neutral-300 text-lg">Same system. Different stage.</p>
            </motion.div>
          </div>
        </section>

        {/* --- WHY DIFFERENT SECTION --- */}
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Why Urganize is different</h2>
            <p className="text-xl text-neutral-400 mb-8">Most tools give you empty task lists.</p>
            <p className="text-2xl font-semibold text-white mb-4">Urganize tells you what the tasks should be.</p>
            <p className="text-xl text-neutral-400 mb-8">It&apos;s not just organization.</p>
            <p className="text-2xl font-bold text-emerald-400">It&apos;s direction.</p>
          </motion.div>
        </section>

        {/* --- EARLY TRACTION SECTION --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">Early traction</h2>
            <ul className="space-y-4 text-xl text-neutral-300">
              <li className="flex items-center gap-3 justify-center">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Growing waitlist of artist managers
              </li>
              <li className="flex items-center gap-3 justify-center">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Built with real release workflows
              </li>
              <li className="flex items-center gap-3 justify-center">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Designed specifically for music promotion not generic productivity
              </li>
            </ul>
            <p className="text-neutral-400 text-lg mt-8">
              We&apos;re currently onboarding early users through demos.
            </p>
          </motion.div>
        </section>

        {/* --- CTA SECTION --- */}
        <section id="early-access" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Start Your Release</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
                Stop guessing.<br />
                Stop missing steps.<br />
                Start releasing with structure.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="https://app.urganize.app/auth"
                className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] text-center"
              >
                Start Your Release
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- THE TEAM SECTION --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Meet The Urganization</h2>
              <p className="text-xl text-neutral-400">
                Our founder brings 8 years of experience as a multimedia creative director in the creative industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
              <motion.div {...fadeInUp} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-lg bg-neutral-800 border border-white/10 mb-6 flex items-center justify-center">
                  <Image
                    src="/images/luckywenapere.png"
                    alt="Lucky Wenapere"
                    width={192}
                    height={192}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center">Lucky Wenapere</h3>
                <p className="text-emerald-400 font-semibold text-center mt-2">Founder</p>
              </motion.div>

              <motion.div {...fadeInUp} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-lg bg-neutral-800 border border-white/10 mb-6 flex items-center justify-center">
                  <Image
                    src="/images/bobsonprosper.png"
                    alt="Bobson Prosper"
                    width={192}
                    height={192}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center">Bobson Prosper</h3>
                <p className="text-emerald-400 font-semibold text-center mt-2">Lead Engineer</p>
              </motion.div>
            </div>

            <div className="mt-20">
              <div className="md:flex md:justify-center md:gap-8">
                <div className="relative w-full overflow-hidden md:max-w-5xl">
                  <div className="flex w-max gap-6 md:gap-8 animate-logo-marquee">
                    {[
                      "/images/logo-1.png",
                      "/images/logo-2.png",
                      "/images/logo-3.png",
                      "/images/logo-4.png",
                      "/images/logo-5.png",
                      "/images/logo-6.png",
                      "/images/logo-7.png",
                      "/images/logo-1.png",
                      "/images/logo-2.png",
                      "/images/logo-3.png",
                      "/images/logo-4.png",
                      "/images/logo-5.png",
                      "/images/logo-6.png",
                      "/images/logo-7.png",
                    ].map((src, i) => (
                      <motion.div
                        key={i}
                        {...fadeInUp}
                        className="flex-shrink-0 w-32 h-24 rounded-lg bg-neutral-900/50 border border-white/10 flex items-center justify-center overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`Company Logo ${i + 1}`}
                          width={128}
                          height={96}
                          className="w-full h-full object-contain p-4"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <style jsx global>{`
                @keyframes logoMarquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-logo-marquee {
                  animation: logoMarquee 22s linear infinite;
                  will-change: transform;
                }

                .animate-logo-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>

            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mt-16 mb-20">
              <p className="text-sm text-neutral-400">
                Recognition of these institutions reflects individual educational or professional experience only. It does not constitute an endorsement of Urganize, nor does it guarantee any specific results or outcomes.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <FAQ />

        {/* --- FOOTER (UPDATED) --- */}
        <footer className="py-20 border-t border-white/5 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center gap-10">
              {/* Socials */}
              <div className="flex gap-4">
                <Link
                  href="https://x.com/urganize"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all group"
                >
                  <RiTwitterXFill className="text-xl" />
                </Link>

                <Link
                  href="https://instagram.com/urganize"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all group"
                >
                  <RiInstagramLine className="text-xl" />
                </Link>

                <Link
                  href="https://linkedin.com/company/urganize"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all group"
                >
                  <RiLinkedinBoxFill className="text-xl" />
                </Link>
              </div>

              {/* Links block */}
              <div className="w-full max-w-4xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                        Company
                      </div>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
                        <Link href="/team" className="hover:text-white transition-colors">
                          Team
                        </Link>
                        <Link href="/press" className="hover:text-white transition-colors">
                          Press
                        </Link>
                        <a
                          href="mailto:theurganization@gmail.com?subject=Urganize%20-%20Contact"
                          className="hover:text-white transition-colors"
                        >
                          Contact Us
                        </a>
                        <a
                          href="mailto:luckywenapere@gmail.com?subject=Urganize%20-%20Investor%20Inquiry"
                          className="hover:text-white transition-colors"
                        >
                          For Investors
                        </a>
                      </div>
                    </div>

                    <div className="md:text-right">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                        Legal
                      </div>
                      <div className="mt-3 flex flex-wrap md:justify-end gap-x-6 gap-y-2 text-sm text-neutral-300">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                          Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                          Terms
                        </Link>
                        <Link href="/subprocessors" className="hover:text-white transition-colors">
                          Subprocessors
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    <span className="text-emerald-400/50">AI-guided release management</span>
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 text-sm">
                &copy; {new Date().getFullYear()} The Urganization.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
