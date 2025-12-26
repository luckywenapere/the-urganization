"use client";

import Link from "next/link";
import SignUpForm from "./components/SignUpForm";
import FAQ from "./components/FAQ";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiTwitterXFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";

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
        width={140}    // Adjust width to fit your logo's aspect ratio
        height={40}    // Adjust height to fit your logo's aspect ratio
        className="h-8 w-auto object-contain transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        priority       // Ensures the logo loads immediately
      />

      {/* Ambient Vibrant Glow (Visible on hover) */}
      <div className="absolute inset-0 bg-emerald-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </button>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8">
      <Link href="mailto:theurganization@gmail.com" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
        Request Meeting
      </Link>
      <Link
        href="#early-access"
        className="px-5 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
      >
        Get Early Access
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
          Get Early Access
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
              src="/images/hero-image.png"
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
              New for Music Teams
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[calc(-0.04em)] leading-[0.9] mb-8"
            >
              Run your artist career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600">
                from one place.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            >
              Urganize is the all-in-one hub that helps artists and their teams stay urganized, aligned, and on track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="#early-access"
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform"
              >
                Get Early Access
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- PROBLEM/SOLUTION BENTO GRID --- */}
        <section className="py-32 px-6 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Talent isn’t the issue. Lack of structure is.</h2>
            {/* <p className="text-neutral-500 text-lg">Talent isn’t the issue. Lack of structure is.</p> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5 flex flex-col justify-between min-h-[300px]">
              <div className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-4">The Old Way</div>
              <h3 className="text-2xl font-semibold">WhatsApp for conversations & random notes.</h3>
              <p className="text-neutral-500 text-sm">Communication is buried in group chats and personal DMs.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="md:col-span-2 p-1 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2rem] border border-white/10 group overflow-hidden">
              <div className="bg-black/80 rounded-[1.9rem] h-full p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-all" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">The Urganized Way</div>
                    <h3 className="text-4xl font-bold mb-6">One system for the <br /><span className="text-emerald-400">entire artist operation.</span></h3>
                    <ul className="grid grid-cols-2 gap-4 text-neutral-300">
                      <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Tasks & Responsibilities</li>
                      <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Files & Assets</li>
                      <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Timelines & Releases</li>
                      <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Team Comms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FOUNDER IDENTITY SECTION (FIXED) --- */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div {...fadeInUp} className="flex-1">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                Built by someone who <br />
                <span className="text-neutral-600">understands the chaos.</span>
              </h2>
            </motion.div>

            <motion.div {...fadeInUp} className="flex-1 w-full max-w-md">
              <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/10 shadow-2xl group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    L
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Lucky W.</h4>
                    <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Creator, Urganize</p>
                  </div>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Built from real experience working with artist teams. Not theory, not spreadsheets, not guesswork.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- WHY NOW SECTION --- */}
        <section className="py-40 bg-white text-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#050505] to-transparent" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 {...fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter mb-12">Why now</motion.h2>
            <div className="space-y-8">
              <p className="text-4xl md:text-5xl font-bold">Music is a business.</p>
              <p className="text-emerald-600 text-black text-2xl font-medium max-w-2xl mx-auto">
                Urganize is building the system artist teams have been missing.
              </p>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA FORM --- */}
        <section id="early-access" className="relative py-40 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-10 max-w-xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Secure your spot.</h2>
              <p className="text-neutral-400">Join early to help shape Urganize for artist teams.</p>
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
                  Limited slots available for Beta
                </p>
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
                <span className="text-emerald-400/50">Private by default</span>
                <span className="text-emerald-400/50">Built for music teams</span>
                <span className="text-emerald-400/50">Made for creatives</span>
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