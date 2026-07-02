import React, { useState } from 'react';

export default function HeroSection({ onQuoteClick }) {
  const [showQuickContact, setShowQuickContact] = useState(false);
  const [email, setEmail] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setMsgSent(true);
    console.log("Quick Contact Email captured:", email);
    setTimeout(() => {
      setShowQuickContact(false);
      setMsgSent(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-start py-20 px-6 max-w-5xl mx-auto border-b border-zinc-900 bg-zinc-950 text-zinc-100 font-sans">
      
      {/* Visual background grid accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-3xl">
        {/* Status Tag */}
        <div className="inline-flex items-center space-x-2 bg-cyan-950/40 border border-cyan-800/40 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase">System Status: Available for Projects</span>
        </div>

        {/* Striking, No-Fluff Headline */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-zinc-100">
          High-performance <span className="text-cyan-400">IT Infrastructure</span> & custom software solutions.
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          We architect clean, secure, and production-ready digital systems. No buzzwords, no unnecessary abstractions—just precise engineering tailored to your operational scale.
        </p>

        {/* Tech Stack / Core Competency Pills */}
        <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] text-zinc-500">
          <span className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">// NETWORK ARCHITECTURE</span>
          <span className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">// FULL-STACK DEVELOPMENT</span>
          <span className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">// CYBERSECURITY AUDITING</span>
        </div>

        {/* The Straight-To-The-Point CTAs */}
        <div className="flex flex-wrap gap-4 pt-6">
          <button 
            onClick={onQuoteClick}
            className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-xs font-mono font-bold uppercase tracking-wider px-6 py-4 rounded-lg transition-all shadow-[0_4px_20px_rgba(6,182,212,0.15)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.3)]"
          >
            [ Initialize Quote Engine ]
          </button>
          
          <button 
            onClick={() => setShowQuickContact(!showQuickContact)}
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-mono font-bold uppercase tracking-wider px-6 py-4 rounded-lg transition-colors"
          >
            {showQuickContact ? '[ Close Terminal ]' : '[ Direct Connect ]'}
          </button>
        </div>

        {/* Interactive Inline Quick-Contact Form */}
        {showQuickContact && (
          <div className="mt-6 p-4 bg-zinc-900/90 border border-zinc-800 rounded-lg max-w-md font-mono text-xs animate-fadeIn">
            <div className="text-zinc-500 mb-2">// ENTER EMAIL TO REQUEST CALLBACK</div>
            {msgSent ? (
              <div className="text-emerald-400 py-2">✓ Packet transmitted. I will contact you via secure channel within 12 hours.</div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-zinc-300 flex-1 focus:outline-none focus:border-cyan-500"
                />
                <button 
                  type="submit" 
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded text-zinc-200 transition-colors"
                >
                  Connect
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
