"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "How is Urganize different from other tools?",
    answer: "Most project management tools dump 50 tasks on you at once and expect you to figure it out. Urganize is different — it shows you one task at a time, guided by AI that understands where you are in your release. Complete a task, share how it went, and your next step adapts based on real outcomes. It's built specifically for music releases, not generic work."
  },
  {
    id: 2,
    question: "What does 'AI-guided' actually mean?",
    answer: "When you complete a task in Urganize, you answer a quick question about the outcome — did you get approval? Need revisions? Hit a blocker? The system uses this feedback to intelligently determine your next step. Instead of following a rigid checklist, your workflow adapts to what's actually happening with your release."
  },
  {
    id: 3,
    question: "Who is Urganize for?",
    answer: "Urganize is built for artist managers who are tired of releases falling apart, and independent artists who are doing everything themselves. Whether you manage multiple artists or you're a solo act handling your own releases, Urganize gives you the structure and guidance to ship music without the stress."
  },
  {
    id: 4,
    question: "Is Urganize a distributor?",
    answer: "No. Urganize is not a music distributor. We don't upload your music to streaming platforms like Spotify, Apple Music, or YouTube Music.\n\nUrganize is a release management platform. We help you organize everything that needs to happen before and around your release — the tasks, files, promotion planning, and timelines. Think of us as your AI-guided command center that ensures your release actually succeeds once it hits the platforms.\n\nYou'll still use your preferred distributor (DistroKid, TuneCore, CD Baby, etc.) to get your music live."
  },
  {
    id: 5,
    question: "Is the app currently in Beta?",
    answer: "Yes. We're currently in beta, launching January 28th, 2026.\n\nDuring beta, you'll get early access to the core platform — AI-guided task flow, release creation, timeline enforcement, and file organization. We're actively building alongside our first users, which means your feedback directly shapes what we ship next.\n\nBeta is free to join. If you want in, hop on the waitlist and we'll get you set up."
  },
  {
    id: 6,
    question: "Is my data secure?",
    answer: "Absolutely. All your files, release details, and project data are encrypted and stored securely. We use industry-standard security practices. Your creative work is yours alone — we never share or use your data for any purpose other than providing you with our service."
  },
  {
    id: 7,
    question: "Can I collaborate with my team?",
    answer: "Yes! You can invite team members to your releases — managers, producers, PR reps, photographers. Everyone sees the same task flow and can track progress together. External collaborators can be given limited access to just what they need."
  },
  {
    id: 8,
    question: "What if I don't want AI guidance?",
    answer: "The AI guidance is designed to reduce overwhelm, not control your workflow. You can always see all your tasks if you prefer, and the guidance is based on your own feedback — it's not making decisions for you, it's helping you focus on what matters next based on what you told it."
  }
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-neutral-900/30 to-transparent">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Questions?
          </h2>
          <p className="text-neutral-400 text-lg">
            Everything you need to know about Urganize.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/5 bg-neutral-900/30 overflow-hidden"
            >
              <button
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-semibold pr-8">{item.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                  activeId === item.id ? 'rotate-45 bg-emerald-500 border-emerald-500' : ''
                }`}>
                  <svg 
                    className={`w-4 h-4 transition-colors ${activeId === item.id ? 'text-black' : 'text-white'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-6" />
                      <p className="text-neutral-300 text-lg leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Sign Up CTA */}
        <div className="text-center mt-12">
          <a
            href="#early-access"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl
              bg-emerald-500/10 border border-emerald-500/30
              text-emerald-400 font-semibold text-lg
              hover:bg-emerald-500/20 hover:border-emerald-400
              transition-all duration-300
              shadow-[0_0_30px_-10px_rgba(16,185,129,0.25)]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
