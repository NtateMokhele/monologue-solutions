import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Monitor, 
  Palette, 
  Cpu, 
  Code, 
  Mail, 
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Image as ImageIcon,
  Activity,
  ShieldCheck
} from 'lucide-react';

// Custom "Process Core" Logo Component
const Logo = ({ className = "w-12 h-12" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="10" width="80" height="80" rx="4" className="stroke-slate-700" strokeWidth="2" />
    <path 
      d="M25 75V25L50 50L75 25V75" 
      className="stroke-cyan-500" 
      strokeWidth="4" 
      strokeLinecap="square" 
      strokeLinejoin="miter" 
    />
    <path 
      d="M35 70H65C70 70 70 60 65 60H35C30 60 30 50 35 50H65" 
      className="stroke-white" 
      strokeWidth="4" 
      strokeLinecap="square" 
      strokeLinejoin="miter"
    />
    <rect x="44" y="44" width="12" height="12" className="fill-cyan-500 animate-pulse" />
    <path d="M50 10V20" className="stroke-cyan-500/50" strokeWidth="1" />
    <path d="M50 80V90" className="stroke-cyan-500/50" strokeWidth="1" />
    <path d="M10 50H20" className="stroke-cyan-500/50" strokeWidth="1" />
    <path d="M80 50H90" className="stroke-cyan-500/50" strokeWidth="1" />
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Device Restoration",
      description: "Surgical-grade hardware repair for mobile and tablet architecture.",
      icon: <Smartphone className="w-6 h-6 text-cyan-500" />,
    },
    {
      id: 2,
      title: "System Engineering",
      description: "Advanced diagnostic and hardware optimization for computing arrays.",
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
    },
    {
      id: 3,
      title: "Logic Recovery",
      description: "Deep-level data extraction and critical software environment recovery.",
      icon: <Activity className="w-6 h-6 text-cyan-500" />,
    },
    {
      id: 4,
      title: "Digital Synthesis",
      description: "Technical illustration and brand asset creation for the digital age.",
      icon: <Palette className="w-6 h-6 text-cyan-500" />,
    }
  ];

  return (
    <div className="min-h-screen bg-black text-slate-300 font-mono selection:bg-cyan-500/30">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 py-4 border-b border-slate-800 backdrop-blur-xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo className="w-12 h-12" />
            <div className="hidden sm:block border-l border-slate-800 pl-6">
              <span className="text-xl font-bold tracking-tighter text-white block uppercase">MONOLOGUE</span>
              <span className="text-[10px] tracking-[0.5em] text-cyan-500 uppercase">Solutions</span>
            </div>
          </div>

          <div className="hidden lg:flex space-x-12 items-center text-[10px] font-bold uppercase tracking-widest">
            <a href="#services" className="text-slate-500 hover:text-cyan-400 transition-colors">Capabilities</a>
            <a href="#art" className="text-slate-500 hover:text-cyan-400 transition-colors">Art_Portfolio</a>
            <a href="#contact" className="text-slate-500 hover:text-cyan-400 transition-colors">Protocol_Contact</a>
            <a href="https://wa.me/277812666057" target="_blank" rel="noreferrer" className="border border-cyan-500/30 text-cyan-500 px-6 py-2 hover:bg-cyan-500/10 transition-all">
              Initialize_WA
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 mb-8 px-3 py-1 bg-slate-900 border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 underline decoration-cyan-500/50">Vanderbijlpark Node</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
                HARDWARE<br />
                <span className="text-cyan-500 text-outline uppercase opacity-80">Intelligence_</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-lg mb-12 leading-relaxed border-l-2 border-slate-800 pl-8 font-sans">
                A specialized workshop focused on the surgical repair of high-end consumer electronics and the creation of precise digital art. 
                Logic-driven solutions for complex problems.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="https://wa.me/277812666057" className="bg-cyan-500 text-black px-10 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-cyan-400 transition-colors">
                  Open Direct Line
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center relative">
               <div className="w-96 h-96 border border-slate-800 rounded-full absolute animate-spin-slow opacity-20"></div>
               <Logo className="w-64 h-64 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 border-y border-slate-900 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white tracking-tighter mb-16">TECHNICAL_CAPABILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative p-10 bg-black border border-slate-900 hover:border-cyan-500/50 transition-all duration-500">
                <div className="mb-8 p-3 border border-slate-800 w-fit group-hover:border-cyan-500/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold mb-4 tracking-tight uppercase text-lg underline decoration-slate-800 group-hover:decoration-cyan-500/50 transition-all">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl font-bold text-white tracking-tighter mb-12 italic">ESTABLISH_COMMUNICATION</h2>
              <div className="space-y-10">
                <div className="p-8 bg-black border border-slate-900">
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.5em] mb-4 block">Priority Protocol</span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-white text-xl font-bold">+27 78 126 66057</h4>
                    <a href="https://wa.me/277812666057" className="w-12 h-12 bg-cyan-500 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </a>
                  </div>
                </div>
                <div className="p-8 border border-slate-900">
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.5em] mb-4 block">Data Transmission</span>
                  <a href="mailto:unicorngravyelf@gmail.com" className="text-white text-xl font-bold hover:text-cyan-400 transition-colors">
                    unicorngravyelf@gmail.com
                  </a>
                </div>
                <div className="p-8 border border-slate-900">
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.5em] mb-4 block">Physical Node</span>
                  <p className="text-white text-xl font-bold uppercase italic">94 Freaky Meyer Blvd, Vanderbijlpark</p>
                </div>
              </div>
            </div>
            <div className="bg-black p-12 border-2 border-slate-800 relative">
              <h3 className="text-xl font-bold text-white mb-10 tracking-widest uppercase">Encryption_Form_</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="USER_NAME" className="w-full bg-slate-900/50 border-b border-slate-800 py-3 px-2 outline-none text-white text-xs" />
                <input placeholder="SECURE_EMAIL" className="w-full bg-slate-900/50 border-b border-slate-800 py-3 px-2 outline-none text-white text-xs" />
                <button className="w-full py-6 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-cyan-500 transition-all">
                  Initialize Transmission
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <Logo className="w-16 h-16 mb-12 mx-auto" />
          <p className="text-[10px] font-bold text-slate-700 tracking-[0.6em] uppercase">
            Monologue Solutions &bull; Vanderbijlpark &bull; {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .text-outline { -webkit-text-stroke: 1px #06b6d4; color: transparent; }
      `}} />
    </div>
  );
};

export default App;
