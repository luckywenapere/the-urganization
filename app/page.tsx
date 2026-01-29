"use client";

import Link from "next/link";
import FAQ from "./components/FAQ";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiTwitterXFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import { FoundingCouncilSection } from './components/FoundingCouncilSection';
import FounderPOV from "./components/FounderPOV";

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
          scrolled ? "bg-black/90 shadow-[0_8px_32px_rgba(0,0,0,0.9)]" : "bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        }`}>
          
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
            <Link 
              href="/features" 
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              See How It Works
            </Link>
            <Link
              href="https://app.urganize.app/auth"
              className="px-5 py-2 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/10 hover:scale-105 transition-all border border-white/20"
            >
              Login
            </Link>
            <Link
              href="https://app.urganize.app/auth"
              className="px-5 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <div className="flex flex-col gap-1.5 w-6">
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
                href="https://app.urganize.app/auth"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-5 text-white text-lg font-bold rounded-full hover:bg-white/10 active:scale-95 transition-all border border-white/20"
              >
                Login
              </Link>
              <Link
                href="https://app.urganize.app/auth"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-5 bg-emerald-500 text-black text-lg font-bold rounded-full hover:bg-emerald-400 active:scale-95 transition-all"
              >
                Sign Up
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              AI-Guided Release Decisions
            </motion.div>
            
            {/* Hero Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              Your music career,<br />
              <span className="text-emerald-400">organized and stress-free.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Urganize guides you through releasing your music, <span className="text-white font-semibold">one personalized task at a time</span>. 
              It adapts to your progress so you always know what to do next.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="https://app.urganize.app/auth"
                className="px-10 py-5 bg-emerald-500 text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Sign Up
              </Link>
              <Link
                href="https://app.urganize.app/auth"
                className="px-10 py-5 text-white text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/10 active:scale-95 transition-all border border-white/20"
              >
                Login
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- PROBLEM SECTION --- */}
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Releasing music is chaos.</h2>
            <p className="text-xl text-neutral-400">Promotion dates, distributor deadlines, credits, cover arts, metadata — all spread out everywhere.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Too many things, zero guidance</h3>
              <p className="text-neutral-400">Generic tools dump 50 tasks at once. You don’t know where to start, so you don’t.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Everything scattered</h3>
              <p className="text-neutral-400">Contracts, artwork, stems, metadata all in different places.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Stress steals your focus</h3>
              <p className="text-neutral-400">The constant question of "what did we forget?" stops creativity and slows your workflow.</p>
            </motion.div>
          </div>
        </section>
        {/* --- SOLUTION / FEATURES SECTION --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">One task. One focus. Always clear.</h2>
            <p className="text-xl text-neutral-400">Urganize doesn’t overwhelm you with everything at once. It shows you exactly what to do next and adapts based on your progress.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10">
              <div className="bg-black/80 rounded-[1.9rem] h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Guidance</h3>
                <p className="text-neutral-400">Our AI checks your release schedule and what you’ve already done to tell you the next step. It saves the results so future advice is clearer and easier.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10">
              <div className="bg-black/80 rounded-[1.9rem] h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Adaptive Flow</h3>
                <p className="text-neutral-400">Finish a task, share how it went, and Urganize adapts the next step automatically. One task at a time, always personalized.</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10">
              <div className="bg-black/80 rounded-[1.9rem] h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Everything In One Place</h3>
                <p className="text-neutral-400">Contracts, split sheets, artwork, song files, ads — keep everything organized and accessible.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">How it works.</h2>
            <p className="text-xl text-neutral-400">A simple loop that keeps you moving forward without overwhelm.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-start mb-16">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl">1</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Answer questions about your music & goals</h3>
                <p className="text-neutral-400 text-lg">This sets up a personalized workflow just for you.</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-start mb-16">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl">2</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Receive personalized tasks</h3>
                <p className="text-neutral-400 text-lg">Urganize shows you exactly what to do next — never a giant, overwhelming checklist.</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-start mb-16">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl">3</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Complete a task & provide feedback</h3>
                <p className="text-neutral-400 text-lg">This feeds the system so your next step is intelligently adapted.</p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-start mb-16">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl">4</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Repeat the loop, adapted to your progress</h3>
                <p className="text-neutral-400 text-lg">Urganize continuously adapts, keeping you on track until release day.</p>
              </div>
            </motion.div>

            {/* Loop Visual */}
            <motion.div {...fadeInUp} className="mt-12 p-8 rounded-[2rem] bg-neutral-900/50 border border-emerald-500/20 text-center">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 font-semibold">Task</span>
                <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 font-semibold">Feedback</span>
                <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 font-semibold">Adapt</span>
                <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 font-semibold">Repeat</span>
              </div>
              <p className="text-neutral-500 mt-6 text-sm">The AI-guided loop that keeps you on track without the overwhelm.</p>
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
              <p className="text-neutral-400 text-lg leading-relaxed">When things go wrong, it’s on you. Urganize gives you clear steps, shows you everything in one place, and helps you stay in control so releases don’t fall behind and you can relax.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-10 rounded-[2.5rem] bg-neutral-900/80 border border-white/10">
              <h3 className="text-3xl font-bold mb-4">Independent Artists</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">Doing everything yourself? Same chaos, no support. Urganize gives you the same system managers use, adapted for one. Focus on your music, not the stress.</p>
            </motion.div>
          </div>
        </section>

        <FounderPOV
          quote="I’ve seen too many great releases fail, not because the music wasn’t good, but because the work around it was chaotic. Talent isn’t the bottleneck anymore, operations are. Urganize exists to bring structure to releases so creativity isn’t constantly interrupted by stress."
        />

        {/* --- EARLY ACCESS / SIGN UP SECTION --- */}
        {/* --- SIGN UP / LOGIN SECTION --- */}
        <section id="early-access" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Ready to get started?</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Sign up to start managing your releases with AI-guided workflows, or login to continue where you left off.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="https://app.urganize.app/auth"
                className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] text-center"
              >
                Sign Up
              </Link>
              <Link
                href="https://app.urganize.app/auth"
                className="w-full sm:w-auto px-10 py-5 text-white text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/10 active:scale-95 transition-all border border-white/20 text-center"
              >
                Login
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} className="mt-12 text-center">
              <div className="inline-flex items-center gap-6 text-neutral-600 text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-guided workflows
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  One task at a time
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <FAQ />

        {/* --- FOOTER --- */}
        <footer className="py-20 border-t border-white/5 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center gap-12">
              <div className="flex gap-4">
                {/* X */}
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
                <span className="text-emerald-400/50">AI-guided release management</span>
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