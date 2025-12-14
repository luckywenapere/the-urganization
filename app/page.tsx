import SignUpForm from "./components/SignUpForm";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden font-sans">
      {/* Grunge overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 mix-blend-overlay opacity-60 select-none">
        <img
          src="/grunge-texture.png"
          alt="grunge texture"
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col min-h-screen w-full items-center justify-between px-4 py-8 sm:px-8 md:px-16">
        {/* Hero section */}
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center pt-12 pb-10 md:pt-24 md:pb-16">
          <h1 className="font-display text-[2.8rem] sm:text-[4vw] md:text-[4.5vw] font-black uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] mb-6" style={{letterSpacing: '-0.04em'}}>
            The Urganization
          </h1>
          <div className="mx-auto mb-7 w-24 h-1 bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-800 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.7)]" />
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-medium max-w-xl mx-auto mb-10 tracking-wide" style={{textShadow: '0 1px 2px #000'}}>A new era of organization. <span className="text-neutral-400">Uncompromising.</span></p>
          <a
            href="https://instagram.com/theurganization"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-700 bg-black/70 px-7 py-2.5 rounded-md text-neutral-200 font-bold tracking-widest uppercase text-xs shadow-md hover:bg-neutral-900 hover:border-neutral-500 transition-all duration-200"
          >
            Instagram
          </a>
        </section>

        {/* Sign Up Form Section */}
        <section className="w-full max-w-md mx-auto flex flex-col items-center justify-center pb-16">
          <div className="w-full">
            <SignUpForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-neutral-800 py-6 text-center bg-black/80">
          <p className="text-xs text-neutral-500 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} The Urganization. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}