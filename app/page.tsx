import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center p-8 sm:p-16">
        
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 
            className="font-caveat-brush text-5xl sm:text-7xl md:text-8xl 
                      font-bold leading-tight tracking-tighter text-white 
                      uppercase"
          >
            The Urganization is coming...
          </h1>
          
          <p className="max-w-xl text-xl leading-relaxed text-zinc-300 mt-4">
            We are working hard to launch our new platform. Follow us for updates!
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border-2 border-white px-8 text-white transition-colors hover:bg-white hover:text-black md:w-auto"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Notified
          </a>
          
          <p className="w-full text-center mt-8 text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} The Urganization. All rights reserved.
          </p>
        </div>
      </main>
      
      {/* Optional: Texture effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-lighten">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_transparent_5%,_white_90%)]" />
      </div>
    </div>
  );
}