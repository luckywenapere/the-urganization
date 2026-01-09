"use client";

import { FormEvent, useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLaunchPartner, setIsLaunchPartner] = useState(false);
  const [referralLink, setReferralLink] = useState("");

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
        body: JSON.stringify({ email, name, isLaunchPartner }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "An error occurred");
        return;
      }

      // Set different success messages based on Launch Partner status
      if (isLaunchPartner) {
        // Generate simple referral code
        const refCode = email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
        const link = `${window.location.origin}?ref=${refCode}`;
        setReferralLink(link);
        setMessage("launch-partner"); // Special flag for custom message
      } else {
        setMessage("Welcome aboard! We'll notify your email when your spot is ready.");
      }
      
      setName("");
      setEmail("");
    } catch (err) {
      setError("Connection error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // Visual feedback could be added here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto group"
      style={{ filter: 'contrast(1.1)' }}
    >
      {/* Form container */}
      <div className="relative bg-black/90 border border-neutral-800 rounded-lg px-6 py-8 shadow-[0_4px_32px_rgba(0,0,0,0.7)]">
        {/* Name Input */}
        <div className="mb-6">
          <label
            htmlFor="name"
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

        {/* Email Input */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-xs font-bold text-neutral-400 mb-2 tracking-widest uppercase"
            style={{letterSpacing: '0.10em'}}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="YOU@EMAIL.COM"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-md text-sm text-neutral-100 placeholder-neutral-700 font-medium focus:border-neutral-500 focus:bg-black focus:ring-2 focus:ring-neutral-700 outline-none transition-all duration-200"
            autoComplete="off"
          />
        </div>

        {/* Launch Partner Checkbox - Visually Integrated */}
        <div className="mb-8">
          <label 
            className="flex items-start gap-3 cursor-pointer group/checkbox p-4 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-200 bg-neutral-950/50"
          >
            <input
              type="checkbox"
              checked={isLaunchPartner}
              onChange={(e) => setIsLaunchPartner(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-0 cursor-pointer"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black text-neutral-100 tracking-widest uppercase">
                  Launch Partner
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded uppercase tracking-wider">
                  Skip 50 spots
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Bring 1 friend, jump to top 50 on waitlist + get 1 month free (₦7,500 value)
              </p>
            </div>
          </label>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="mb-6 p-3 bg-red-900/30 border border-red-800/40 rounded text-xs text-red-300 font-bold tracking-widest uppercase">
            {error}
          </div>
        )}

        {/* Regular Success Message */}
        {message && message !== "launch-partner" && (
          <div className="mb-6 p-3 bg-green-900/30 border border-green-800/40 rounded text-xs text-green-300 font-bold tracking-widest uppercase leading-relaxed">
            {message}
          </div>
        )}

        {/* Launch Partner Success Message with Referral Link */}
        {message === "launch-partner" && referralLink && (
          <div className="mb-6 p-4 bg-emerald-900/20 border border-emerald-800/40 rounded space-y-3">
            <div className="text-xs text-emerald-300 font-bold tracking-widest uppercase">
              🎉 You're a Launch Partner!
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Share this link with 1 manager friend. When they join, you skip to position 50 and get 1 month free.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-[11px] text-neutral-300 font-mono"
              />
              <button
                type="button"
                onClick={copyToClipboard}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-neutral-100 rounded text-[10px] font-black tracking-widest uppercase transition-colors"
              >
                Copy
              </button>
            </div>
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
      </div>
    </form>
  );
}