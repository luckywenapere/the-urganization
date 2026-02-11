import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <Link href="/" className="text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white">
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-6">
          Terms of Service
        </h1>

        <p className="text-neutral-300 mt-6">
          By using Urganize, you agree to these Terms.
        </p>

        <div className="mt-12 space-y-10 text-neutral-300">

          <section>
            <h2 className="text-2xl font-bold text-white">Use of Service</h2>
            <p className="mt-3">
              Use Urganize lawfully. Abuse or misuse may result in termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Accounts</h2>
            <p className="mt-3">
              You are responsible for your account. We may suspend or permanently delete
              accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Content Ownership</h2>
            <p className="mt-3">
              You own your content. You grant Urganize permission to operate the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">AI Disclaimer</h2>
            <p className="mt-3">
              AI outputs are guidance only. Urganize does not guarantee results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Payments</h2>
            <p className="mt-3">
              Payments are processed via Paystack. Refunds handled case-by-case.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Liability</h2>
            <p className="mt-3">
              Liability is limited to amounts paid. No indirect damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by Nigerian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3">
              <a href="mailto:theurganization@gmail.com" className="text-emerald-400">
                theurganization@gmail.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
          <span>© The Urganization</span>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/subprocessors">Subprocessors</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
