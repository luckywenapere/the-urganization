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
    question: "How is Urganize different from other project management tools?",
    answer: "Urganize is made just for music teams. Most apps are built for any kind of work, but we created ours specifically for releasing music. We understand all the special things music makers have to do. From early recordings to the finished song, choosing artwork, planning announcements, and getting music on streaming apps. Everything in Urganize works the way music teams actually work."
  },
  // {
  //   id: 2,
  //   question: "Who is Urganize for?",
  //   answer: "Urganize is perfect for independent artists, producers, managers, and their teams. Whether you're a solo artist handling everything yourself or have a team of 5+ people (producers, PR, photographers, etc.), Urganize helps keep everyone aligned and focused on the creative process."
  // },
  // {
  //   id: 3,
  //   question: "Can I try it before committing?",
  //   answer: "Yes! We're offering early access to a limited number of teams. You can sign up for early access above, and we'll notify you when your spot is ready. Early access users will get free usage during our beta period and priority support."
  // },
  {
    id: 4,
    question: "How much does Urganize cost?",
    answer: "Urganize costs different amounts depending on how big your team is and what tools you need. But if you're one of the first people to try it, you'll get a special discount and more time to test it out for free. We want our prices to be fair - as your team grows and does better, that's when you pay more."
  },
  // {
  //   id: 5,
  //   question: "Is my data secure?",
  //   answer: "Absolutely. All your files, messages, and project details are encrypted and stored securely. We use industry-standard security practices and compliance measures. Your creative work is yours alone - we never share or use your data for any purpose other than providing you with our service."
  // },
  // {
  //   id: 6,
  //   question: "Can I collaborate with people outside my team?",
  //   answer: "Yes! You can easily share specific projects or files with external collaborators like studio engineers, featured artists, or graphic designers without giving them full access to your workspace. They get exactly what they need to contribute."
  // }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 hover:bg-emerald-500/20 transition-colors cursor-default">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Questions & Answers
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Frequently asked <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-teal-200">
              questions
            </span>
          </h2>
          {/* <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Everything you need to know about Urganize. Can&apos;t find what you&apos;re looking for?
            <a 
              href="mailto:theurganization@gmail.com" 
              className="ml-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Email our support team.
            </a>
          </p> */}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_DATA.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 ${
                openId === item.id
                  ? "bg-neutral-900/50 border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]"
                  : "bg-neutral-900/30 border-white/5 hover:bg-neutral-900/40 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                aria-expanded={openId === item.id}
              >
                <h3 className="text-lg md:text-xl font-bold text-white pr-8">
                  {item.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openId === item.id
                    ? "bg-emerald-500/20 text-emerald-400 rotate-180"
                    : "bg-white/5 text-neutral-400 group-hover:bg-white/10"
                }`}>
                  <svg
                    className="w-5 h-5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-6" />
                      <p className="text-neutral-300 text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-neutral-900/30 border border-white/5">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-neutral-300">
              <a 
                href="mailto:theurganization@gmail.com" 
                className="text-white font-semibold hover:text-emerald-400 transition-colors"
              >
                Contact us
              </a>
            </p>
          </div>
        </div> */}
        {/* Sign Up CTA */}
        <div className="text-center mt-6">
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
            Sign me up!
          </a>
        </div>
      </div>
    </section>
  );
}