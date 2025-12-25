"use client";

import Link from "next/link";
import SignUpForm from "./components/SignUpForm";
import FAQ from "./components/FAQ";
import { useState } from "react";
import Image from "next/image"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-emerald-500/30">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] opacity-30" />
      </div>

            {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 py-5"> 
          {/* Logo */}
          {/* <button
            onClick={() => window.location.reload()}
            className="hover:opacity-80 transition-opacity"
            aria-label="Refresh page"
          >
            <Image
              src="/images/urganize-logo.svg"
              alt="Urganize"
              width={140}
              height={32}
              className="h-18 w-auto"
              priority
            />
          </button> */}

          <button
            onClick={() => window.location.reload()}
            className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
            aria-label="Refresh page"
          >
            Urganize
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="mailto:theurganization@gmail.com"
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Request Meeting
            </Link>
            <Link
              href="#early-access"
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:border-emerald-500/50 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6 bg-black/95 border-t border-white/5 backdrop-blur-xl flex flex-col gap-6">
            <Link
              href="mailto:theurganization@gmail.com"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-neutral-400 hover:text-white transition-colors py-2"
            >
              Request Meeting
            </Link>
            <Link
              href="#early-access"
              onClick={() => setIsMenuOpen(false)}
              className="w-full px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:border-emerald-500/50 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] text-center"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col w-full items-center">
        
                {/* --- HERO SECTION with Background Image --- */}
        <section className="relative w-full max-w-5xl mx-auto px-6 md:px-16 pt-48 pb-32 md:pt-64 md:pb-40 flex flex-col items-center text-center">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/hero-image.png"
                alt="Creative team collaborating on music"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            
            {/* Gradient Fade Overlay - Fades image into black background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            
            {/* Subtle vignette effect for better fade */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_black_70%)]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-10 hover:bg-emerald-500/20 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              New for Music Teams
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.05]">
              Run your artist career <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-teal-200">
                from one place.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl mx-auto mb-12 leading-relaxed font-light">
              Urganize is an all-in-one hub that helps artists and their teams stay urganized, aligned, and on track without scattered tools.
            </p>
            
            <Link
              href="#early-access"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-emerald-600 rounded-full hover:bg-emerald-500 hover:scale-105 shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)] w-full md:w-auto text-center"
            >
              Get Early Access
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>


        {/* --- PROBLEM SECTION --- */}
        <section className="w-full py-32 bg-neutral-900/20 border-y border-white/5">
          {/* Strict max-w-5xl here for centralization */}
          <div className="max-w-5xl mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">
              
              {/* Text Side */}
              <div className="flex-1 md:sticky md:top-32 self-start">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  Managing an artist <br />
                  <span className="text-neutral-500">shouldn’t feel chaotic.</span>
               </h2>
                <div className="space-y-10">
                  {/* Problem */}
                  <div className="pl-6 border-l border-neutral-800">
                    <p className="text-lg text-white mb-4 font-medium">
                      Yet most teams are stuck using different tools for everything:
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-neutral-300 mb-4">
                      <li>WhatsApp for conversations</li>
                      <li>Notes for ideas</li>
                      <li>Drive for files</li>
                      <li>Random reminders for deadlines</li>
                    </ul>

                    <p className="text-neutral-400 leading-relaxed">
                      Things get missed. Momentum slows. Releases fall apart.
                      <br />
                      Talent isn’t the issue. Lack of structure is.
                    </p>
                  </div>

              {/* Solution */}
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  One system for the <br />
                  <span className="text-neutral-500">entire artist operation.</span>
               </h2>
                  <div className="pl-6 border-l border-emerald-500">
                    {/* <p className="text-lg text-emerald-400 mb-4 font-medium">
                      The Urganize fix is one system for the entire artist operation.
                    </p> */}

                    <p className="text-neutral-300 leading-relaxed mb-4">
                      Urganize brings everything together in one place:
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-neutral-300">
                      <li>Tasks and responsibilities</li>
                      <li>Files and assets</li>
                      <li>Timelines and releases</li>
                      <li>Team communication</li>
                    </ul>

                    <p className="text-neutral-400 leading-relaxed mt-4">
                      So artists and managers can focus on progress — not chasing people.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Side: Comparison */}
              <div className="flex-1 w-full space-y-8">
                {/* The "Mess" Card */}
                <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/5 grayscale opacity-70 hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-3 mb-4 text-neutral-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="font-bold tracking-widest text-xs uppercase">The Chaos</span>
                   </div>
                   <div className="space-y-3">
                      <div className="p-4 bg-black rounded border border-white/5 text-sm text-neutral-500">"Where is the latest mix?"</div>
                      <div className="p-4 bg-black rounded border border-white/5 text-sm text-neutral-500">"Link expired..."</div>
                      <div className="p-4 bg-black rounded border border-white/5 text-sm text-neutral-500">"Did you send the artwork?"</div>
                   </div>
                </div>

                {/* The "Solution" Card */}
                <div className="relative p-1 bg-gradient-to-b from-emerald-500/50 to-emerald-900/10 rounded-2xl">
                   <div className="p-8 rounded-xl bg-[#0A0A0A] h-full">
                      <div className="flex items-center gap-3 mb-6 text-emerald-400">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span className="font-bold tracking-widest text-xs uppercase">The Clarity</span>
                      </div>
                      <div className="space-y-4">
                         <div className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                            <span className="text-white font-medium">Master_vFinal.wav</span>
                         </div>
                         <div className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div>
                            <span className="text-white font-medium">Artwork Approved</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* --- BENEFITS GRID --- */}
        {/* Strict max-w-5xl here for centralization */}
        <section className="w-full py-32 px-6 md:px-16 max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Work together. <br className="md:hidden"/> Shine together.</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Focus on actions, not features. Here is how you get it done.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1 */}
            <div className="group p-10 bg-neutral-900/30 border border-white/5 rounded-3xl hover:bg-neutral-900/50 hover:border-emerald-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Track Tasks</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">Stay on track. Everyone knows what to do, so nothing gets forgotten before release day.</p>
            </div>

            {/* Card 2 */}
            <div className="group p-10 bg-neutral-900/30 border border-white/5 rounded-3xl hover:bg-neutral-900/50 hover:border-blue-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Share Files</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">Share easily. Keep all files, demos, and contracts in one secure place.</p>
            </div>

            {/* Card 3 */}
            <div className="group p-10 bg-neutral-900/30 border border-white/5 rounded-3xl hover:bg-neutral-900/50 hover:border-purple-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Make Music</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">Do your best work. Spend your time creating, not searching for that lost email.</p>
            </div>
          </div>
        </section>


        {/* --- HOW IT WORKS --- */}
        <section className="w-full py-32 bg-[#080808]">
          {/* Strict max-w-5xl here for centralization */}
          <div className="max-w-5xl mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
              
              <div className="flex-1 space-y-12">
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight">One place for <br/> your team.</h2>
                 
                 <div className="space-y-10">
                    <div className="group flex gap-6">
                       <span className="text-4xl font-black text-neutral-800 group-hover:text-emerald-500 transition-colors">01</span>
                       <div>
                          <h4 className="text-xl font-bold text-white mb-2">Plan your releases.</h4>
                          <p className="text-neutral-400 text-lg">See the whole year at a glance.</p>
                       </div>
                    </div>
                    <div className="w-full h-px bg-white/5" />
                    
                    <div className="group flex gap-6">
                       <span className="text-4xl font-black text-neutral-800 group-hover:text-emerald-500 transition-colors">02</span>
                       <div>
                          <h4 className="text-xl font-bold text-white mb-2">Track who does what.</h4>
                          <p className="text-neutral-400 text-lg">Assign tasks to producers or PR.</p>
                       </div>
                    </div>
                    <div className="w-full h-px bg-white/5" />

                    <div className="group flex gap-6">
                       <span className="text-4xl font-black text-neutral-800 group-hover:text-emerald-500 transition-colors">03</span>
                       <div>
                          <h4 className="text-xl font-bold text-white mb-2">Less confusion.</h4>
                          <p className="text-neutral-400 text-lg">More time for creating.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex-1 w-full relative">
                 <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />
                 <div className="relative bg-black border border-neutral-800 rounded-2xl p-6 shadow-2xl">
                    <div className="flex gap-4 mb-8">
                       <div className="h-2 w-20 bg-emerald-500 rounded-full" />
                       <div className="h-2 w-20 bg-neutral-800 rounded-full" />
                       <div className="h-2 w-20 bg-neutral-800 rounded-full" />
                    </div>
                    <div className="space-y-3">
                       {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-md bg-neutral-800" />
                                <div className="h-3 w-32 bg-neutral-700 rounded" />
                             </div>
                             <div className="h-3 w-12 bg-neutral-800 rounded" />
                          </div>
                       ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                       <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">+</div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>


        {/* --- SOCIAL PROOF --- */}
        {/* Strict max-w-5xl here for centralization */}
        <section className="w-full py-32 px-6 md:px-16 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Teams are loving it!</h2>
          </div>
          {/* max-w-4xl is appropriate here to keep the review cards tight */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> 
            <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/5">
              <p className="text-lg text-neutral-300 italic mb-6 leading-relaxed">"The idea of having one place to manage a release instead of juggling WhatsApp, Drive, and my notes sounds like a dream. I can't wait to try Urganize."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-700 border border-white/10" />
                <div>
                  <a 
                    href="https://instagram.com/quiriesmusic" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    Quiries
                  </a>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Independent Artist</div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/5">
              <p className="text-lg text-neutral-300 italic mb-6 leading-relaxed">"From what I've seen, Urganize isn't just another tool, it's a mindset shift. Treating a release as a process, not a conversation, is long overdue."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-700 border border-white/10" />
                <div>
                  <a 
                    href="https://instagram.com/psalmthebcn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    Psalm the Bcn
                  </a>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Producer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
          <FAQ />

        {/* --- FINAL CTA & FORM --- */}
        <section id="early-access" className="w-full py-40 relative overflow-hidden">
          
          {/* Max-w-2xl is appropriate here to keep the form area tight and focused */}
          <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">Start making your <br /> best work today.</h2>
            <p className="text-lg text-neutral-400 mb-12">Join other creative teams who are finally getting organized.</p>
            
            <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
              <SignUpForm />
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-8 opacity-60">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
               <p className="text-xs text-neutral-500 uppercase tracking-widest">
                 Limited spots available
               </p>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="w-full border-t border-white/5 py-12 bg-black">
          <div className="max-w-5xl mx-auto px-6 md:px-16">
            <div className="flex flex-col items-center">
              
              {/* Social Links - New Section */}
              <div className="flex items-center justify-center gap-6 mb-8">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/urganize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Discord - Commented out for now */}
                {/* <a
                  href="https://discord.gg/urganize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
                  aria-label="Join our Discord community"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028c.462-.63.872-1.295 1.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128c.125-.094.25-.188.372-.284a.076.076 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.076.076 0 01.078.01c.12.096.245.19.37.284a.077.077 0 01-.006.128a12.3 12.3 0 01-1.873.892a.077.077 0 00-.041.107c.355.698.765 1.363 1.226 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a> */}

                {/* Instagram */}
                <a
                  href="https://instagram.com/urganize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/urganize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Tagline Links */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs text-neutral-500 tracking-widest uppercase mb-6 font-medium">
                <span className="text-emerald-400/60">Private by default</span>
                <span className="hidden md:inline text-neutral-800">|</span>
                <span className="text-emerald-400/60">Built for music teams</span>
                <span className="hidden md:inline text-neutral-800">|</span>
                <span className="text-emerald-400/60">Made for creatives</span>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-neutral-700 text-sm mb-2">
                  &copy; {new Date().getFullYear()} The Urganization.
                </p>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}