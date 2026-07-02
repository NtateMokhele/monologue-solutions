import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import QuoteEstimator from './components/QuoteEstimator';

export default function App() {
  const estimatorRef = useRef(null);

  const scrollToEstimator = () => {
    estimatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-cyan-500 selection:text-zinc-950">
      {/* Navigation or Minimal Header can go here */}
      
      <HeroSection onQuoteClick={scrollToEstimator} />
      
      <div ref={estimatorRef} className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto mb-8 text-left">
          <h2 className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-1">// STAGE_02</h2>
          <h3 className="text-xl font-bold text-zinc-200">Interactive Project Blueprint Configuration</h3>
        </div>
        <QuoteEstimator />
      </div>
      
      {/* Minimal Footer */}
    </div>
  );
}
