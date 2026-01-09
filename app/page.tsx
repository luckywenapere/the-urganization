"use client";

import Link from "next/link";
import SignUpForm from "./components/SignUpForm";
import FAQ from "./components/FAQ";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiTwitterXFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import { FoundingCouncilSection } from './components/FoundingCouncilSection';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const 
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-emerald-500/30">
      
      {/* --- BACKGROUND MESH --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-600/10 rounded-full blur-[140px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] opacity-30" />
      </div>

      {/* --- NAVIGATION: FLOATING ISLAND --- */}
<nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl transition-all duration-500 ${
  scrolled ? "top-4" : "top-6"
}`}>
  <div className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-2xl transition-all duration-500 ${
    scrolled ? "bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : "bg-white/5"
  }`}>
        <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="relative group flex items-center transition-all active:scale-95"
      aria-label="Urganize Home"
    >
      {/* The Logo Image */}
      <Image 
        src="/images/urganize-logo.png"
        alt="Urganize Logo" 
        width={140}
        height={40}
        className="h-8 w-auto object-contain transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        priority
      />

      {/* Ambient Vibrant Glow (Visible on hover) */}
      <div className="absolute inset-0 bg-emerald-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </button>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8">
      <Link href="/features" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
        Features
      </Link>
      <Link href="mailto:theurganization@gmail.com" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
        Request Meeting
      </Link>
      <Link
        href="#early-access"
        className="px-5 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
      >
        Join the Waitlist
      </Link>
    </div>

    {/* Mobile Toggle Button */}
    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)} 
      className="md:hidden p-2 relative z-[110]"
      aria-label="Toggle Menu"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
          href="mailto:theurganization@gmail.com" 
          onClick={() => setIsMenuOpen(false)}
          className="text-2xl font-semibold text-neutral-400 hover:text-white transition-colors"
        >
          Request Meeting
        </Link>
        <Link
          href="#early-access"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-5 bg-emerald-500 text-black text-lg font-bold rounded-full hover:bg-emerald-400 active:scale-95 transition-all"
        >
          Join the Waitlist
        </Link>
        
        {/* Subtle Socials in Menu */}
        <div className="flex gap-6 pt-4 border-t border-white/5 w-full justify-center">
            <Link href="https://instagram.com/urganize" className="text-[10px] text-neutral-600 uppercase tracking-widest">Instagram</Link>
            <Link href="https://x.com/urganize" className="text-[10px] text-neutral-600 uppercase tracking-widest">X / Twitter</Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-image.webp"
              alt="Creative team"
              fill
              className="object-cover opacity-40 grayscale-[20%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_80%)]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              Launching January 28, 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              Stop losing releases to chaos.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Urganize is the operating system for music teams. One place for your releases, timelines, files, and promotion. Structured so nothing falls through the cracks.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="#early-access"
                className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Join the Waitlist
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-xs text-neutral-600 mt-6 uppercase tracking-widest">Built for managers and independent artists</p>
            </motion.div>
          </div>
        </section>

        {/* --- PROBLEM SECTION --- */}
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Music creation is easy. Managing releases is chaos.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Promotion falls apart</h3>
              <p className="text-neutral-400">Content plans made last-minute. Timelines ignored. Releases announced with no momentum.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Files are everywhere</h3>
              <p className="text-neutral-400">Stems in email. Artwork in DMs. Contracts in Google Drive. Nothing connected to the actual release.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Tasks live in your head</h3>
              <p className="text-neutral-400">WhatsApp reminders. Excel checklists. Constant mental load of "what did we forget?"</p>
            </motion.div>
          </div>
        </section>

        {/* --- SOLUTION SECTION --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Everything a release needs. Nothing it doesn't.</h2>
            <p className="text-xl text-neutral-400">Urganize doesn't ask what you want to do. It shows you what needs to happen next.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10">
              <div className="bg-black/80 rounded-[1.9rem] h-full p-8">
                <h3 className="text-2xl font-bold mb-4">Release Command Center</h3>
                <p className="text-neutral-400">Every release gets automatic structure: pre-defined tasks, organized folders, and clear phases from creation to promotion.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10">
              <div className="bg-black/80 rounded-[1.9rem] h-full p-8">
                <h3 className="text-2xl font-bold mb-4">Promotion Built In</h3>
                <p className="text-neutral-400">Stop winging it. Promotion tasks surface immediately. Content planning, shoot scheduling and rollout timelines so you're never scrambling.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10">
              <div className="bg-black/80 rounded-[1.9rem] h-full p-8">
                <h3 className="text-2xl font-bold mb-4">Timeline Enforcement</h3>
                <p className="text-neutral-400">The system prompts you when dates are missing. No more "we'll figure it out later" that turns into last-minute panic.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">From chaos to clarity in minutes.</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl">1</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Create a release</h3>
                <p className="text-neutral-400 text-lg">Name it, set the date. The system does the rest.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl">2</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">See what's next</h3>
                <p className="text-neutral-400 text-lg">Tasks, folders, and timelines auto-populate. No blank pages. No guessing.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl">3</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Execute with confidence</h3>
                <p className="text-neutral-400 text-lg">Upload files, assign tasks, track progress. Everything tied to the release.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- WHO THIS IS FOR SECTION --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Built for the people who make releases happen.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="p-10 rounded-[2.5rem] bg-neutral-900/80 border border-white/10">
              <h3 className="text-3xl font-bold mb-4">Artist Managers</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">You're responsible when things go wrong. Urganize gives you structure, visibility, and control so releases don't fall apart.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-10 rounded-[2.5rem] bg-neutral-900/80 border border-white/10">
              <h3 className="text-3xl font-bold mb-4">Independent Artists</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">Doing everything yourself? Same chaos, no support. Urganize gives you the same system managers use, adapted for one.</p>
            </motion.div>
          </div>
        </section>

        {/* --- WHY NOW SECTION --- */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Built from real conversations, not assumptions.</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                We interviewed artist managers who've shipped hundreds of releases. The pattern was clear: the industry scaled music creation, but operations stayed chaotic. Generic tools are too flexible. Music tools have terrible UX.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="text-center">
              <p className="text-2xl font-bold text-emerald-400">Urganize fixes both.</p>
            </motion.div>
          </div>
        </section>

        {/* --- FINAL CTA FORM --- */}
        <section id="early-access" className="relative py-40 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-10 max-w-xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Join managers and artists who refuse to lose releases to chaos.</h2>
              <p className="text-neutral-400">Urganize launches January 28, 2026. Get early access.</p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-emerald-500/5"
            >
              <SignUpForm />
              <div className="flex items-center justify-center gap-2 mt-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <p className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] font-bold">
                  No spam. Just launch updates and early access.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
{/*
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp} className="p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10">
              <FoundingCouncilSection />
            </motion.div>
          </div>
        </section>
*/}
        <FAQ />

        {/* --- FOOTER --- */}
        <footer className="py-20 border-t border-white/5 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center gap-12">
              <div className="flex gap-4">
                {/* X (Twitter) */}
                <Link 
                  href="https://x.com/urganize"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all group"
                >
                  <RiTwitterXFill className="text-xl" />
                </Link>

                {/* Instagram */}
                <Link 
                  href="https://instagram.com/urganize"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all group"
                >
                  <RiInstagramLine className="text-xl" />
                </Link>

                {/* LinkedIn */}
                <Link 
                  href="https://linkedin.com/company/urganize"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all group"
                >
                  <RiLinkedinBoxFill className="text-xl" />
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                <span className="text-emerald-400/50">Where music careers stop being chaotic</span>
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