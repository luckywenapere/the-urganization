"use client";

import { FormEvent, useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "An error occurred");
        return;
      }

      setMessage("Welcome aboard! We'll notify your email when your spot is ready.");
      setName("");
      setEmail("");
    } catch (err) {
      setError("Connection error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto group"
      style={{ filter: 'contrast(1.1)' }}
    >
      {/* Grunge border overlay (Image element removed as it's not present) */}
      {/* Form container */}
      <div className="relative bg-black/90 border border-neutral-800 rounded-lg px-6 py-8 shadow-[0_4px_32px_rgba(0,0,0,0.7)]">
        {/* Name Input - Adjusted mb-6 for better spacing */}
        <div className="mb-6">
          <label
            htmlFor="name"
            // REFINED: Reduced letter-spacing from 0.12em to 0.1em
            className="block text-xs font-bold text-neutral-400 mb-2 tracking-widest uppercase"
            style={{letterSpacing: '0.10em'}}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="YOUR NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required

            className="w-full pl-6 pr-4 py-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm text-neutral-100 placeholder-neutral-700 font-medium focus:border-neutral-500 focus:bg-black focus:ring-2 focus:ring-neutral-700 outline-none transition-all duration-200"
            autoComplete="off"
          />
        </div>
        {/* Email Input - Adjusted mb-7 for better spacing */}
        <div className="mb-8">
          <label
            htmlFor="email"
            // REFINED: Reduced letter-spacing from 0.12em to 0.1em
            className="block text-xs font-bold text-neutral-400 mb-2 tracking-widest uppercase"
            style={{letterSpacing: '0.10em'}}>
            Email
          </label>
          <input
            id="email"
            type="email"
            // FIX 1: Changed placeholder to uppercase for visual consistency
            placeholder="YOU@EMAIL.COM"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            // REFINED: Increased vertical padding and adjusted placeholder color/weight
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm text-neutral-100 placeholder-neutral-700 font-medium focus:border-neutral-500 focus:bg-black focus:ring-2 focus:ring-neutral-700 outline-none transition-all duration-200"
            autoComplete="off"
          />
        </div>
        {/* Status Messages */}
        {error && (
          <div className="mb-6 p-2 bg-red-900/30 border border-red-800/40 rounded text-xs text-red-300 font-bold tracking-widest uppercase">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-6 p-2 bg-green-900/30 border border-green-800/40 rounded text-xs text-green-300 font-bold tracking-widest uppercase">
            {message}
          </div>
        )}
        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full relative py-2.5 px-4 font-black text-neutral-100 rounded border border-neutral-700 bg-black/80 shadow-md tracking-widest uppercase text-sm hover:bg-neutral-900 hover:border-neutral-500 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              {/* Spinner SVG */}
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Joining...
            </span>
          ) : (
            "Get Early Access"
          )}
        </button>
        {/* Divider */}
{/*         <div className="mt-8 pt-4 border-t border-neutral-800">
          <p className="text-center text-[10px] text-neutral-600 font-bold tracking-widest uppercase">
            No credit card required.
          </p>
        </div> */}
      </div>
    </form>
  );
}