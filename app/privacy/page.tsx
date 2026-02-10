import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mt-6">Privacy Policy</h1>
        <p className="text-neutral-300 mt-4">
          Placeholder privacy policy. Replace with your final text before launch.
        </p>

        <div className="mt-10 space-y-6 text-neutral-300">
          <section>
            <h2 className="text-xl font-semibold text-white">What we collect</h2>
            <p className="mt-2">Account details, product usage, and release inputs you provide.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">How we use it</h2>
            <p className="mt-2">To run Urganize, improve workflows, and provide support.</p>
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
