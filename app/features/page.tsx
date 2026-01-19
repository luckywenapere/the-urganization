"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";

export default function FeaturesPage() {
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

      {/* --- SIMPLE NAVIGATION --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-2xl bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/#early-access"
            className="px-5 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            Join the Waitlist
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              Features
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              AI-guided.
              <br />
              <span className="text-emerald-400">Stress-free.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            >
              Every feature in Urganize exists to remove overwhelm and guide you through your release — one intelligent step at a time.
            </motion.p>
          </div>
        </section>

        {/* --- CORE FEATURES --- */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Feature 1: AI-Guided Steps */}
            <motion.div {...fadeInUp} className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Core Feature
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Intelligent Guidance</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Instead of overwhelming you with a massive checklist, Urganize shows you one task at a time. Complete it, share the outcome, and get your next step — adapted to your results.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">One task at a time</p>
                        <p className="text-neutral-500 text-sm">Never see 50 tasks at once. Focus on what matters now.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Feedback-driven adaptation</p>
                        <p className="text-neutral-500 text-sm">Answer a quick question after each task. The system learns from real outcomes.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Smart next steps</p>
                        <p className="text-neutral-500 text-sm">Your next task is intelligently determined based on what just happened.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                  <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex flex-col items-center justify-center p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400 text-lg">✓</span>
                      </div>
                      <span className="text-neutral-400">Task completed</span>
                    </div>
                    <div className="w-full p-4 rounded-xl bg-neutral-900/80 border border-emerald-500/30 mb-4">
                      <p className="text-sm text-neutral-300 mb-2">How did it go?</p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Got approval</span>
                        <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-500 text-xs">Needs revision</span>
                      </div>
                    </div>
                    <div className="text-neutral-600 text-xs">→ Next step adapts based on your answer</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Promotion Built In */}
            <motion.div {...fadeInUp} className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                    <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex flex-col items-center justify-center p-6">
                      <div className="w-full space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/80 border border-white/5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">📸</div>
                          <span className="text-sm text-neutral-300">Plan content shoot</span>
                          <span className="ml-auto text-xs text-emerald-400">Now</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 border border-white/5 opacity-50">
                          <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-500 text-sm">📅</div>
                          <span className="text-sm text-neutral-500">Schedule rollout</span>
                          <span className="ml-auto text-xs text-neutral-600">Next</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 border border-white/5 opacity-30">
                          <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-500 text-sm">📣</div>
                          <span className="text-sm text-neutral-500">Announcement post</span>
                          <span className="ml-auto text-xs text-neutral-600">Later</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Game Changer
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Promotion First</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Promotion is where releases fail. That's why it's built into every release from day one — not an afterthought.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Promotion tasks surface early</p>
                        <p className="text-neutral-500 text-sm">Content planning, shoot schedules, social rollout — visible from the start</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">No last-minute scrambling</p>
                        <p className="text-neutral-500 text-sm">Timeline guidance prevents "we'll figure it out later"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Clear accountability</p>
                        <p className="text-neutral-500 text-sm">Track progress on every promotion task</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Release-First File System */}
            <motion.div {...fadeInUp} className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Organization
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Files That Make Sense</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Stop searching through Google Drive. Every file belongs to a release. Every release has structure.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Pre-built folder structure</p>
                        <p className="text-neutral-500 text-sm">Audio, stems, artwork, contracts — organized by default</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Release-connected</p>
                        <p className="text-neutral-500 text-sm">Files live with the release they belong to. No more hunting.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Nothing gets lost</p>
                        <p className="text-neutral-500 text-sm">Metadata, credits, assets — all in one place</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                  <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex flex-col items-center justify-center p-6">
                    <div className="w-full space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-900/50">
                        <span className="text-lg">📁</span>
                        <span className="text-sm text-neutral-300">Audio</span>
                        <span className="ml-auto text-xs text-neutral-600">3 files</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-900/50">
                        <span className="text-lg">📁</span>
                        <span className="text-sm text-neutral-300">Stems</span>
                        <span className="ml-auto text-xs text-neutral-600">8 files</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-900/50">
                        <span className="text-lg">📁</span>
                        <span className="text-sm text-neutral-300">Artwork</span>
                        <span className="ml-auto text-xs text-neutral-600">5 files</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-900/50">
                        <span className="text-lg">📁</span>
                        <span className="text-sm text-neutral-300">Contracts</span>
                        <span className="ml-auto text-xs text-neutral-600">2 files</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-900/50">
                        <span className="text-lg">📁</span>
                        <span className="text-sm text-neutral-300">Promotion</span>
                        <span className="ml-auto text-xs text-neutral-600">4 files</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: Timeline Enforcement */}
            <motion.div {...fadeInUp} className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                    <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex flex-col items-center justify-center p-6">
                      <div className="w-full p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-amber-400">⚠️</span>
                          <span className="text-sm text-amber-300 font-medium">Timeline Alert</span>
                        </div>
                        <p className="text-sm text-neutral-400">Release date not set. Set a date to unlock timeline-based guidance.</p>
                      </div>
                      <div className="w-full p-4 rounded-xl bg-neutral-900/80 border border-white/5">
                        <p className="text-xs text-neutral-500 mb-2">Suggested release window</p>
                        <p className="text-lg text-white font-semibold">March 14 - 21, 2026</p>
                        <p className="text-xs text-neutral-600 mt-1">Based on your current progress</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Enforcement
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Timeline Guidance</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    The system prompts you when dates are missing. No more "we'll figure it out later" that turns into last-minute panic.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Gentle prompts, not nagging</p>
                        <p className="text-neutral-500 text-sm">The system surfaces timeline issues before they become crises</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Smart deadline suggestions</p>
                        <p className="text-neutral-500 text-sm">Based on your progress and release date</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">No missed windows</p>
                        <p className="text-neutral-500 text-sm">Distributor deadlines, playlist pitches — all accounted for</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* --- WHAT WE DON'T DO --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">What Urganize Doesn't Do</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                We're opinionated about what we build. If a feature doesn't reduce operational chaos, it's out.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-neutral-400">❌ Revenue Tracking</h3>
                <p className="text-neutral-500">We don't track streams, splits, or royalties. That's what distributors are for.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-neutral-400">❌ Legal Contracts</h3>
                <p className="text-neutral-500">We don't generate or enforce contracts. Get a lawyer for that.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-neutral-400">❌ Analytics</h3>
                <p className="text-neutral-500">We don't show streaming numbers or social media metrics. Check your platforms.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-neutral-400">❌ Music Distribution</h3>
                <p className="text-neutral-500">We don't upload to Spotify or Apple Music. Use your preferred distributor.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Ready to release without the stress?</h2>
              <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                Join managers and artists who refuse to let chaos kill their releases.
              </p>
              <Link
                href="/#early-access"
                className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-black text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Join the Waitlist
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
