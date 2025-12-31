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
              Built to end the chaos.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            >
              Every feature in Urganize exists for one reason: to prevent releases from falling apart.
            </motion.p>
          </div>
        </section>

        {/* --- CORE FEATURES --- */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Feature 1: Release Command Center */}
            <motion.div {...fadeInUp} className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Core Feature
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Release Command Center</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Every release becomes a structured workspace. No blank pages. No guessing. The system auto-generates everything you need.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Automatic task generation</p>
                        <p className="text-neutral-500 text-sm">Pre-defined frameworks for every phase of your release</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Smart folder structure</p>
                        <p className="text-neutral-500 text-sm">Audio, stems, artwork, contracts—organized by default</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Timeline enforcement</p>
                        <p className="text-neutral-500 text-sm">Get prompted when critical dates are missing</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                  <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex items-center justify-center">
                    <p className="text-neutral-600 text-sm">Release Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Promotion Built In */}
            <motion.div {...fadeInUp} className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                    <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex items-center justify-center">
                      <p className="text-neutral-600 text-sm">Promotion Timeline Preview</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Game Changer
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Promotion First</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Promotion is the highest-risk phase. That's why it's built into every release from day one.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Pre-defined promotion tasks</p>
                        <p className="text-neutral-500 text-sm">Content planning, shoot schedules, social rollout—visible immediately</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">No last-minute scrambling</p>
                        <p className="text-neutral-500 text-sm">Timeline prompts prevent "we'll figure it out later"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Clear accountability</p>
                        <p className="text-neutral-500 text-sm">Assign promotion tasks to team members, track progress</p>
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
                        <p className="font-semibold mb-1">Default folder structure</p>
                        <p className="text-neutral-500 text-sm">Audio, stems, artwork, licenses—created automatically</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Minimum asset enforcement</p>
                        <p className="text-neutral-500 text-sm">Releases require at least one audio file to progress</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Everything connected</p>
                        <p className="text-neutral-500 text-sm">Files, tasks, and timelines tied to the same release</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                  <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex items-center justify-center">
                    <p className="text-neutral-600 text-sm">File System Preview</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: Team Collaboration */}
            <motion.div {...fadeInUp} className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                    <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex items-center justify-center">
                      <p className="text-neutral-600 text-sm">Collaboration Preview</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Teamwork
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Manager + Artist Sync</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Built for how music teams actually work. Managers lead operations. Artists stay informed and execute.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Role-based access</p>
                        <p className="text-neutral-500 text-sm">Managers control structure, artists complete assigned tasks</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Relationship tracking</p>
                        <p className="text-neutral-500 text-sm">Keep notes on producers, engineers, collaborators per release</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Works solo too</p>
                        <p className="text-neutral-500 text-sm">Independent artists get full access without manager complexity</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Feature 5: Budget Tracking */}
            <motion.div {...fadeInUp} className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Financial Clarity
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Light Budget Tracking</h2>
                  <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                    Track planned vs. actual spend per release. Simple, clear, no accounting degree required.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Release-level budgets</p>
                        <p className="text-neutral-500 text-sm">Set budgets per category: production, promotion, distribution</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">No payment processing</p>
                        <p className="text-neutral-500 text-sm">We track numbers, you handle payments however you want</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <RiCheckLine className="text-emerald-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Stay on top of spend</p>
                        <p className="text-neutral-500 text-sm">See at a glance if you're on track or over budget</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10">
                  <div className="aspect-[4/3] bg-neutral-800/50 rounded-2xl flex items-center justify-center">
                    <p className="text-neutral-600 text-sm">Budget Tracking Preview</p>
                  </div>
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
                <h3 className="text-xl font-bold mb-3 text-neutral-400">❌ AI Recommendations</h3>
                <p className="text-neutral-500">We don't tell you what to create. We help you execute what you've decided.</p>
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
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Ready to get organized?</h2>
              <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                Join managers and artists who refuse to lose releases to chaos.
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
