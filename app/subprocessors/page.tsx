import Link from "next/link";

export default function SubprocessorsPage() {
  const subprocessors = [
    {
      name: "Vercel",
      purpose: "Hosting and deployment",
      data: "App traffic, server logs, operational data",
    },
    {
      name: "Google Analytics",
      purpose: "Usage analytics",
      data: "Device identifiers, usage events, IP (may be processed), cookies",
    },
    {
      name: "Google Gemini",
      purpose: "AI processing for guidance and recommendations",
      data: "User inputs and context needed to generate outputs",
    },
    {
      name: "Paystack",
      purpose: "Payment processing",
      data: "Billing metadata and transaction details (we do not store card details)",
    },
    {
      name: "Gmail",
      purpose: "Email communications",
      data: "Email content and addresses",
    },
    {
      name: "Neon",
      purpose: "Database infrastructure",
      data: "User account and product data stored by Urganize",
    },
    {
      name: "Supabase",
      purpose: "Authentication and storage services",
      data: "Auth identifiers, tokens, and files you upload (if enabled)",
    },
    {
      name: "Slack",
      purpose: "Internal team communication",
      data: "Operational messages (may include support context if shared internally)",
    },
    {
      name: "WhatsApp",
      purpose: "Customer messaging and support",
      data: "Messages and identifiers needed to communicate with you",
    },
    {
      name: "Telegram",
      purpose: "Customer messaging and support",
      data: "Messages and identifiers needed to communicate with you",
    },
    {
      name: "MailerLite",
      purpose: "Product updates and marketing emails",
      data: "Email address, subscription preferences, email engagement metrics",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
        >
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-6">
          Subprocessors
        </h1>

        <p className="text-neutral-300 mt-6 text-lg max-w-3xl">
          Urganize uses trusted third-party services (“subprocessors”) to help us operate
          the platform. This page lists the subprocessors we may use and what they do.
        </p>

        <div className="mt-10 p-8 rounded-[2rem] bg-neutral-900/50 border border-white/10">
          <h2 className="text-xl font-bold text-white">Quick summary</h2>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• We use subprocessors for hosting, analytics, payments, AI, and communication.</li>
            <li>• We do not store your card details. Payments are processed by Paystack.</li>
            <li>• This list may change as Urganize evolves.</li>
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {subprocessors.map((s) => (
            <div
              key={s.name}
              className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-white">{s.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Subprocessor
                </span>
              </div>

              <p className="mt-4 text-neutral-300">
                <span className="text-neutral-400">Purpose:</span> {s.purpose}
              </p>

              <p className="mt-3 text-neutral-300">
                <span className="text-neutral-400">Data involved:</span> {s.data}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10">
          <h2 className="text-2xl font-bold text-white">Changes to subprocessors</h2>
          <p className="mt-4 text-neutral-300 text-lg">
            We may add, remove, or replace subprocessors as Urganize evolves. If you have
            questions about this list, contact us at{" "}
            <a
              href="mailto:theurganization@gmail.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              theurganization@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
          <span>© Urganize</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
