// app/press/page.tsx
import Link from "next/link";

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mt-6">Press Kit</h1>
        <p className="text-neutral-300 mt-4">
          Logos, product description, and contact for press inquiries.
        </p>

        <div className="mt-10 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Short description</h2>
            <p className="text-neutral-300 mt-2">
              Urganize is a release operating system for artist managers - AI-guided steps, organized tasks, and a content plan.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Media contact</h2>
            <p className="text-neutral-300 mt-2">
              <a className="text-emerald-400 hover:text-emerald-300" href="mailto:theurganization@gmail.com?subject=Urganize%20-%20Press">
                theurganization@gmail.com
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Logos</h2>
              {/* <a
                href="/press/urganize-press-kit.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all"
                >
                Download Press Kit (PDF)
                </a> */}

                <a
                href="/press/urganize-logo.zip"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                Download Logos (ZIP)
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
