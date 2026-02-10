// app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mt-6">Terms</h1>
        <p className="text-neutral-300 mt-4">
          Placeholder terms. Replace with your final terms before launch.
        </p>

        <div className="mt-10 space-y-6 text-neutral-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Use of service</h2>
            <p className="mt-2">Use Urganize responsibly and lawfully.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">No guarantees</h2>
            <p className="mt-2">Urganize provides guidance and organization, not guaranteed outcomes.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-2">
              <a className="text-emerald-400 hover:text-emerald-300" href="mailto:theurganization@gmail.com">
                theurganization@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
