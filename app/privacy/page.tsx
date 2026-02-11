"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-emerald-500/30">
      {/* Background mesh (matches home) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-600/10 rounded-full blur-[140px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] opacity-30" />
      </div>

      <main className="relative z-10 px-6 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Top nav line */}
          <motion.div {...fadeInUp} className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
            >
              <span className="text-emerald-400">←</span>
              Back to home
            </Link>

            <Link
              href="mailto:theurganization@gmail.com?subject=Privacy%20question%20-%20Urganize"
              className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </motion.div>

          {/* Header card */}
          <motion.div
            {...fadeInUp}
            className="mt-10 p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                Privacy Policy
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
                How Urganize handles your data
              </h1>

              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-3xl">
                This policy explains what we collect, why we collect it, how we use it, and
                the choices you have. We aim to keep this simple and transparent.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Last updated
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-200">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="mt-10 space-y-8">

            {/* Summary / quick bullets */}
            <motion.div
              {...fadeInUp}
              className="p-8 rounded-[2rem] bg-neutral-900/40 border border-white/10"
            >
              <h2 className="text-xl font-bold tracking-tight mb-4">Quick summary</h2>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>We collect data needed to run Urganize and improve it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>Payments are processed by Paystack. We do not store your card details.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>We use analytics (Google Analytics) to understand product usage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>
                    We use AI (including Google Gemini). Inputs may be processed by providers, and
                    may be used to improve Urganize and underlying AI systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>You can request access, correction, or deletion of your data.</span>
                </li>
              </ul>
            </motion.div>

            {/* Sections */}
            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                1. Who we are
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Urganize (“we”, “our”, “us”) is a release operating system for artist managers.
                We are not currently registered, but we intend to register in Nigeria.
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mt-4">
                If you have privacy questions, email{" "}
                <a
                  href="mailto:theurganization@gmail.com?subject=Privacy%20question%20-%20Urganize"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                >
                  theurganization@gmail.com
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                2. Who can use Urganize
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Urganize is not intended for children under 13. We do not knowingly collect
                personal information from children under 13. If you believe a child has
                provided us personal data, contact us and we will take steps to delete it.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                3. Information we collect
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-[1.75rem] bg-black/30 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">Account data</h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Email address</li>
                    <li>• Login credentials</li>
                    <li>• Basic profile details (if provided)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-[1.75rem] bg-black/30 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">Release data</h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Artist and release info</li>
                    <li>• Dates, tasks, plans, notes</li>
                    <li>• Assets you upload or reference</li>
                  </ul>
                </div>

                <div className="p-6 rounded-[1.75rem] bg-black/30 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">Usage & device data</h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Pages viewed, features used</li>
                    <li>• IP address, browser, device info</li>
                    <li>• Logs for debugging and security</li>
                  </ul>
                </div>

                <div className="p-6 rounded-[1.75rem] bg-black/30 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-3">Payments</h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Processed by Paystack</li>
                    <li>• We do not store card details</li>
                    <li>• We may store billing status and receipts</li>
                  </ul>
                </div>
              </div>

              <p className="text-neutral-400 text-sm mt-6">
                Note: Some of these may apply “eventually” as Urganize evolves. We aim to
                collect only what we need.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                4. How we use your information
              </h2>

              <ul className="space-y-3 text-neutral-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>To provide and operate Urganize</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>To generate AI-guided tasks and workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>To improve performance, reliability, and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>To communicate product updates and announcements (you can unsubscribe)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-2xl leading-none">•</span>
                  <span>To prevent fraud, abuse, and security issues</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                5. AI processing
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed">
                Urganize uses third-party AI services (including Google Gemini) to generate
                recommendations, guidance, and workflows. Your inputs may be processed by
                those providers to produce outputs.
              </p>

              <p className="text-neutral-300 text-lg leading-relaxed mt-4">
                You agree that your data may be used to improve Urganize and underlying AI
                systems. AI outputs are informational only and do not replace professional
                advice.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                6. Cookies & analytics
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed">
                We use Google Analytics to understand how users interact with Urganize.
                We may use cookies or similar technologies to measure performance and improve
                the product. We also collect anonymized usage data to improve experience.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                7. Data storage & international transfers
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed">
                Urganize serves users internationally. Your information may be stored and
                processed on global cloud infrastructure and may be transferred outside your
                country of residence.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                8. Your rights
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed">
                Depending on where you live, you may have the right to access, correct, or
                delete your personal data. You may also withdraw consent where applicable.
              </p>

              <div className="mt-6 p-6 rounded-[1.75rem] bg-black/30 border border-white/10">
                <p className="text-neutral-300">
                  To make a request, email{" "}
                  <a
                    href="mailto:theurganization@gmail.com?subject=Privacy%20request%20-%20Urganize"
                    className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                  >
                    theurganization@gmail.com
                  </a>{" "}
                  and include the email associated with your Urganize account.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                9. Account deletion
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed">
                When you delete your account, we remove your data within a reasonable time.
                Some backups may remain temporarily for security, compliance, or disaster
                recovery, and will be overwritten over time.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                10. Security
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed">
                We use reasonable measures to protect your data. No system can guarantee
                absolute security.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                11. Changes to this policy
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed">
                We may update this policy as Urganize evolves. We will post updates on this
                page and update the “Last updated” date at the top.
              </p>
            </motion.div>

            {/* Footer line */}
            <motion.div {...fadeInUp} className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">
                &copy; {new Date().getFullYear()} The Urganization
              </p>

              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/subprocessors" className="hover:text-white transition-colors">
                  Subprocessors
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}
