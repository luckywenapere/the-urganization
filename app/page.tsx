"use client";

import SignUpForm from "./components/SignUpForm";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden font-sans">
      {/* Top Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-black/80 border-b border-neutral-800 fixed top-0 left-0 z-20">
        {/* Logo */}
        <button
          onClick={() => window.location.reload()}
          className="font-display text-xl md:text-2xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors"
          aria-label="Refresh page"
        >
          The Urganization
        </button>
        <div className="flex items-center gap-4">
          <a
            href="mailto:theurganization@gmail.com"
            className="text-sm md:text-base text-neutral-300 hover:text-emerald-400 transition-colors underline underline-offset-2"
          >
            Contact: theurganization@gmail.com
          </a>
          <a
            href="#early-access"
            className="hidden md:inline-block border border-emerald-600 bg-emerald-700/80 px-5 py-2 rounded-md text-white font-bold tracking-widest uppercase text-xs md:text-sm shadow-md hover:bg-emerald-800 hover:border-emerald-400 transition-all duration-200"
          >
            GET EARLY ACCESS
          </a>
        </div>
      </nav>
      <main className="relative z-10 flex flex-col min-h-screen w-full items-center px-4 py-8 sm:px-8 md:px-16">
        {/* Spacer to push content below fixed header */}
        <div style={{ height: '7rem' }} aria-hidden="true" />
        {/* HERO SECTION */}
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center pb-10 md:pb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6" style={{letterSpacing: '-0.04em'}}>
            One workspace to manage artists from day one to career scale
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-xl mx-auto mb-8">
            Plan releases, manage tasks, organize files, and keep artist teams aligned — without WhatsApp chaos or scattered tools.
          </p>
          <a
            href="#early-access"
            className="inline-block border border-emerald-600 bg-emerald-700/80 px-8 py-3 rounded-md text-white font-bold tracking-widest uppercase text-base shadow-md hover:bg-emerald-800 hover:border-emerald-400 transition-all duration-200 mb-2"
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
          {/* Value Props with outlined icons and card surfaces */}
          <div className="bg-slate-900/70 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            {/* Icon: Users */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-10 h-10 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m10-6.13a4 4 0 11-8 0 4 4 0 018 0zM15 20v-2a4 4 0 00-3-3.87A4 4 0 009 18v2" />
            </svg>
            <h3 className="font-bold text-lg mb-2 text-emerald-400">Manage artists, not mess</h3>
            <p className="text-neutral-200">Create artist workspaces with everything in one place — tasks, files, releases, collaborators.</p>
          </div>
          <div className="bg-slate-900/70 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            {/* Icon: Calendar */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-10 h-10 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold text-lg mb-2 text-emerald-400">Plan releases with clarity</h3>
            <p className="text-neutral-200">Use release calendars and checklists to execute drops properly, not last minute.</p>
          </div>
          <div className="bg-slate-900/70 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            {/* Icon: Users Cog */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-10 h-10 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m10-6.13a4 4 0 11-8 0 4 4 0 018 0zM15 20v-2a4 4 0 00-3-3.87A4 4 0 009 18v2" />
            </svg>
            <h3 className="font-bold text-lg mb-2 text-emerald-400">Keep collaborators aligned</h3>
            <p className="text-neutral-200">Invite collaborators with role-based access so everyone sees what they need — nothing more.</p>
          </div>
          <div className="bg-slate-900/70 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            {/* Icon: Folder */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-10 h-10 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h3.28a2 2 0 011.42.59l1.42 1.42A2 2 0 0012.72 7H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            <h3 className="font-bold text-lg mb-2 text-emerald-400">Organize files properly</h3>
            <p className="text-neutral-200">Store music, artwork, videos, contracts, and press assets in artist-specific folders.</p>
          </div>
          <div className="bg-slate-900/70 rounded-xl shadow-lg p-6 flex flex-col items-center text-center md:col-span-2">
            {/* Icon: Trending Up */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-10 h-10 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
            </svg>
            <h3 className="font-bold text-lg mb-2 text-emerald-400">Scale as the artist grows</h3>
            <p className="text-neutral-200">What works for one artist scales cleanly to many — without rebuilding your process.</p>
          </div>
        </section>

        {/* HOW IT WORKS (Simple steps) */}
        <section className="w-full max-w-2xl mx-auto py-10">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">How it works</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              {/* Icon: Workspace */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-9 h-9 mb-2">
                <rect x="4" y="4" width="16" height="16" rx="3" />
              </svg>
              <span className="text-neutral-200 font-medium mt-1">Create an artist workspace</span>
            </div>
            <div className="flex flex-col items-center text-center">
              {/* Icon: User Plus */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-9 h-9 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-3-3.87M12 7a4 4 0 110-8 4 4 0 010 8zm6 8v-2a4 4 0 00-3-3.87M6 11v2a4 4 0 003 3.87" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 8v6m3-3h-6" />
              </svg>
              <span className="text-neutral-200 font-medium mt-1">Invite collaborators</span>
            </div>
            <div className="flex flex-col items-center text-center">
              {/* Icon: Upload */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-9 h-9 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0l-4 4m4-4l4 4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
              </svg>
              <span className="text-neutral-200 font-medium mt-1">Assign tasks & upload files</span>
            </div>
            <div className="flex flex-col items-center text-center">
              {/* Icon: Chart Bar */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-9 h-9 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M8 17v-6m4 6v-4m4 4v-2" />
              </svg>
              <span className="text-neutral-200 font-medium mt-1">Plan releases & track progress</span>
            </div>
          </div>
          <p className="text-neutral-400 mt-6">Everything stays private, structured, and easy to manage.</p>
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
            className="inline-block border border-emerald-600 bg-emerald-700/80 px-8 py-3 rounded-md text-white font-bold tracking-widest uppercase text-base shadow-md hover:bg-emerald-800 hover:border-emerald-400 transition-all duration-200 mb-2"
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