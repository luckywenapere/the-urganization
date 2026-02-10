import Link from "next/link";

export default function SubprocessorsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mt-6">Subprocessors</h1>
        <p className="text-neutral-300 mt-4">
          Placeholder list. Replace with your real vendors before launch.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-3 text-neutral-300">
            <li>Hosting / Infrastructure — TBD</li>
            <li>Analytics — TBD</li>
            <li>Email / Notifications — TBD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
