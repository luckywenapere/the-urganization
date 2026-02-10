import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mt-6">Team</h1>
        <p className="text-neutral-300 mt-4">The team behind Urganize.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-bold">Lucky Wenapere</div>
            <div className="text-emerald-400 font-semibold mt-1">Founder</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-bold">Bobson Prosper</div>
            <div className="text-emerald-400 font-semibold mt-1">Lead Engineer</div>
          </div>
        </div>
      </div>
    </main>
  );
}
