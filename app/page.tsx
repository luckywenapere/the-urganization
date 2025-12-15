
import SignUpForm from "./components/SignUpForm";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden font-sans">
      <main className="relative z-10 flex flex-col min-h-screen w-full items-center px-4 py-8 sm:px-8 md:px-16">
        {/* HERO SECTION */}
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center pt-16 pb-10 md:pt-28 md:pb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6" style={{letterSpacing: '-0.04em'}}>
            One workspace to manage artists from day one to career scale
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-xl mx-auto mb-8">
            Plan releases, manage tasks, organize files, and keep artist teams aligned — without WhatsApp chaos or scattered tools.
          </p>
          <a
            href="#early-access"
            className="inline-block border border-cyan-600 bg-cyan-700/80 px-8 py-3 rounded-md text-white font-bold tracking-widest uppercase text-base shadow-md hover:bg-cyan-800 hover:border-cyan-400 transition-all duration-200 mb-2"
          >
            Get early access
          </a>
          <div className="text-sm text-neutral-400 mt-2">
            Join managers and teams building structure before the spotlight hits.
          </div>
        </section>

        {/* WHAT IT IS (Clarity section) */}
        <section className="w-full max-w-2xl mx-auto text-center py-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">What is The Urganization?</h2>
          <p className="text-neutral-200 mb-3">The Urganization is a private management platform for up-and-coming artists and their teams.</p>
          <p className="text-neutral-300 mb-3">It gives managers, artists, and collaborators one place to plan releases, track tasks, store files, and stay aligned as the artist grows.</p>
          <p className="text-neutral-400 italic">No spreadsheets. No lost files. No missed deadlines.</p>
        </section>

        {/* WHO IT'S FOR */}
        <section className="w-full max-w-2xl mx-auto py-10">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-3">Built for:</h2>
          <ul className="text-neutral-200 list-disc list-inside space-y-2 mb-4">
            <li>Artist managers managing one or multiple artists</li>
            <li>Independent artists building structure early</li>
            <li>Collaborators (producers, designers, videographers, PR) working with clear access and accountability</li>
          </ul>
          <p className="text-neutral-400 mt-2">If you’re serious about turning momentum into a career, this is your control room.</p>
        </section>

        {/* CORE BENEFITS (Value props) */}
        <section className="w-full max-w-3xl mx-auto py-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Manage artists, not mess</h3>
            <p className="text-neutral-200">Create artist workspaces with everything in one place — tasks, files, releases, collaborators.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Plan releases with clarity</h3>
            <p className="text-neutral-200">Use release calendars and checklists to execute drops properly, not last minute.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Keep collaborators aligned</h3>
            <p className="text-neutral-200">Invite collaborators with role-based access so everyone sees what they need — nothing more.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Organize files properly</h3>
            <p className="text-neutral-200">Store music, artwork, videos, contracts, and press assets in artist-specific folders.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Scale as the artist grows</h3>
            <p className="text-neutral-200">What works for one artist scales cleanly to many — without rebuilding your process.</p>
          </div>
        </section>

        {/* HOW IT WORKS (Simple steps) */}
        <section className="w-full max-w-2xl mx-auto py-10">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">How it works</h2>
          <ol className="list-decimal list-inside text-neutral-200 space-y-2 mb-4">
            <li>Create an artist workspace</li>
            <li>Invite collaborators</li>
            <li>Assign tasks & upload files</li>
            <li>Plan releases & track progress</li>
          </ol>
          <p className="text-neutral-400">Everything stays private, structured, and easy to manage.</p>
        </section>

        {/* WHY IT EXISTS (Trust / vision) */}
        <section className="w-full max-w-2xl mx-auto py-10">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">Why it exists</h2>
          <p className="text-neutral-200 mb-2">Most artist teams operate on vibes, DMs, and shared drives.</p>
          <p className="text-neutral-300 mb-2">The Urganization exists to give independent artists and managers the same operational clarity major teams have — without major-label infrastructure.</p>
          <p className="text-neutral-400 italic">Structure early. Scale cleanly.</p>
        </section>

        {/* EARLY ACCESS SECTION (Signup reinforcement) */}
        <section id="early-access" className="w-full max-w-md mx-auto flex flex-col items-center justify-center py-12">
          <h2 className="font-display text-2xl font-bold mb-4">Be first to use The Urganization</h2>
          <p className="text-neutral-200 mb-2 text-center">We’re opening early access to a small group of managers and artists shaping the product.</p>
          <ul className="text-neutral-300 list-disc list-inside mb-4 text-left">
            <li>Get early access</li>
            <li>Influence features</li>
            <li>Lock in early pricing</li>
          </ul>
          <a
            href="#signup"
            className="inline-block border border-cyan-600 bg-cyan-700/80 px-8 py-3 rounded-md text-white font-bold tracking-widest uppercase text-base shadow-md hover:bg-cyan-800 hover:border-cyan-400 transition-all duration-200 mb-2"
          >
            Request early access
          </a>
          <div className="text-xs text-neutral-400 mt-2">No spam. Product updates only.</div>
        </section>

        {/* SIGN UP FORM SECTION */}
        <section id="signup" className="w-full max-w-md mx-auto flex flex-col items-center justify-center pb-16">
          <div className="w-full">
            <SignUpForm />
          </div>
        </section>

        {/* FOOTER MICROCOPY */}
        <footer className="w-full border-t border-neutral-800 py-6 text-center bg-black/80 mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-neutral-500 tracking-widest uppercase">
            <span>Private by default</span>
            <span className="hidden md:inline">|</span>
            <span>Built for real teams</span>
            <span className="hidden md:inline">|</span>
            <span>Web now, mobile coming soon</span>
          </div>
          <p className="mt-2">&copy; {new Date().getFullYear()} The Urganization. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}