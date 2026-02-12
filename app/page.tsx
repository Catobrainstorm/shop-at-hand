"use client"
import { useState } from 'react';
import { 
  Scan, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Search, 
  ShieldCheck,
  Globe,
  Zap,
  Lock,
  Compass
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ShopAtHand() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/map?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen bg-[#011613] text-[#E2CFC8] font-lexend overflow-x-hidden">
      
      {/* --- 01. HERO SECTION --- */}
      <section className="relative min-h-[100vh] lg:min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale contrast-150" 
            alt="Hero bkg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011613] via-transparent to-[#011613]" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-brandRed/10 border border-brandRed/30 backdrop-blur-md px-5 py-2 rounded-full text-brandRed text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] mb-12 shadow-[0_0_20px_rgba(246,54,0,0.2)]">
            <ShieldCheck size={16} className="animate-pulse" /> Reality-Filtered Infrastructure
          </div>

          <h1 className="text-[clamp(2.8rem,13vw,9rem)] font-black leading-[0.85] tracking-[-0.05em] mb-12 uppercase text-white">
            GET THE <span className="text-brandRed text-glow-red">REAL</span> <br/>
            DEAL. <span className="text-brandOrange italic">FAST.</span>
          </h1>

          <form onSubmit={handleQuickSearch} className="max-w-3xl mx-auto mb-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brandRed to-brandOrange rounded-[30px] md:rounded-[40px] blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
            <div className="relative flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Rice, Beans, Drugs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/70 border-2 border-white/10 backdrop-blur-xl p-6 md:p-8 rounded-[25px] md:rounded-[35px] text-lg md:text-2xl font-medium text-white placeholder:text-white/20 focus:border-brandOrange/50 outline-none transition-all pl-16 md:pl-20 shadow-2xl"
                />
                <Search className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brandOrange" size={28} />
              </div>
              <button type="submit" className="w-full md:w-auto md:absolute md:right-3 md:top-1/2 md:-translate-y-1/2 bg-brandRed text-white px-12 py-6 rounded-[22px] md:rounded-[28px] font-black text-lg hover:bg-brandOrange transition shadow-xl active:scale-95 uppercase">
                 Find
              </button>
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center">
            <Link href="/scanner" className="group w-full sm:w-auto bg-brandRed text-white px-10 md:px-16 py-5 md:py-7 rounded-full font-black text-xl md:text-2xl flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(246,54,0,0.3)] hover:scale-105 transition-all">
              <Scan size={28} /> VERIFY BATCH
            </Link>
            <Link href="/map" className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-md text-[#E2CFC8] px-10 md:px-16 py-5 md:py-7 rounded-full font-black text-xl md:text-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              <MapPin size={28} /> BROWSE MAP
            </Link>
          </div>
        </div>
      </section>

      {/* --- 02. HOW IT WORKS --- */}
      <section className="px-6 py-24 md:py-40 space-y-32 md:space-y-60 max-w-7xl mx-auto relative z-10">
        
        {/* STEP 1 */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 lg:order-1 relative group">
             <div className="relative z-10 p-2 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop" 
                  className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50" 
                  alt="Scanning Process" 
                />
                <div className="absolute top-1/2 left-0 w-full h-1 bg-brandRed shadow-[0_0_30px_#f63600] animate-pulse" />
             </div>
             <div className="absolute -inset-20 bg-brandRed/5 blur-[120px] rounded-full pointer-events-none" />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-6xl md:text-8xl font-black text-brandOrange opacity-10 mb-[-20px] md:mb-[-40px]">01</h2>
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter leading-none text-white">REALITY <br/> <span className="text-brandRed">FILTERED</span></h2>
            <p className="text-lg md:text-2xl text-[#E2CFC8]/60 leading-relaxed mb-10 font-medium">
              We eliminate the fake economy. Scan your product to cross-reference with encrypted global manufacturer logs instantly.
            </p>
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 border-l-8 border-brandRed rounded-r-[2rem] shadow-2xl inline-block w-full">
               <div className="flex items-center justify-center lg:justify-start gap-4 text-brandRed font-black text-2xl md:text-3xl uppercase tracking-tighter">
                 <CheckCircle size={32} /> SIGNATURE AUTHENTIC
               </div>
               <p className="mt-2 text-[#E2CFC8]/20 text-[10px] uppercase font-bold tracking-[0.4em]">Protocol: V4_TERMINAL_SYNC</p>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-6xl md:text-8xl font-black text-brandAmber opacity-10 mb-[-20px] md:mb-[-40px]">02</h2>
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter text-brandAmber leading-none">ELITE <br/> ACCESS</h2>
            <p className="text-lg md:text-2xl text-[#E2CFC8]/60 leading-relaxed mb-10 font-medium">
              Once verified, the organism navigates you to the closest verified vendor with guaranteed stock availability.
            </p>
            <div className="space-y-4">
              {['Central Pharma Hub', 'Elite Grains Depot'].map((store) => (
                <div key={store} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-[2rem] flex justify-between items-center hover:bg-brandAmber/10 hover:border-brandAmber/30 transition-all hover:translate-x-4 cursor-pointer">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-brandAmber/10 text-brandAmber rounded-2xl"><MapPin size={24}/></div>
                    <div>
                      <h4 className="font-black uppercase text-xl tracking-tight text-white">{store}</h4>
                      <p className="text-[10px] text-brandOrange font-bold uppercase tracking-widest">Available • 0.8km</p>
                    </div>
                  </div>
                  <ArrowRight className="text-brandAmber" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
             <div className="relative z-10 p-2 bg-gradient-to-tr from-white/10 to-transparent rounded-[3rem] border border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
                  className="w-full h-full object-cover rounded-[2.5rem] grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                  alt="Mapping Stock" 
                />
             </div>
             <div className="absolute -inset-20 bg-brandAmber/5 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- 03. GLOBAL STANDARDS SECTION --- */}
      <section className="relative py-32 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-10 brightness-50"
            alt="Global Network"
          />
          <div className="absolute inset-0 bg-brandRed mix-blend-color opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011613] via-transparent to-[#011613]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-6xl md:text-[10rem] font-black mb-20 uppercase italic text-center leading-[0.8] tracking-[-0.08em] text-white">
            GLOBAL <br/> <span className="text-brandOlive opacity-50 font-syne">STANDARDS.</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { label: 'Sync', icon: <Zap size={32}/>, desc: 'Real-time ledger updates', color: 'text-brandRed' },
              { label: 'Trust', icon: <Lock size={32}/>, desc: 'Encrypted verification', color: 'text-brandOrange' },
              { label: 'Verify', icon: <Globe size={32}/>, desc: 'Global batch registry', color: 'text-brandAmber' },
              { label: 'Route', icon: <Compass size={32}/>, desc: 'Precision GPS mapping', color: 'text-brandOlive' }
            ].map((item) => (
              <div key={item.label} className="group bg-black/90 p-10 rounded-[3rem] border border-white/10 hover:border-brandRed/50 transition-all duration-500 hover:-translate-y-4 shadow-2xl">
                <div className={`${item.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className={`${item.color} font-black text-4xl uppercase italic mb-2 tracking-tighter`}>
                  {item.label}
                </h3>
                <p className="text-[#E2CFC8]/40 font-bold uppercase text-[10px] tracking-[0.2em]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 px-6 text-[#E2CFC8] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="font-black text-sm uppercase tracking-widest text-brandRed">© 2026 ShopAtHand Organism</p>
           <div className="flex gap-12 font-black text-[10px] uppercase tracking-[0.4em] opacity-40">
              <span>Security</span>
              <span>Privacy</span>
              <span>Protocol</span>
           </div>
        </div>
      </footer>

      <style jsx global>{`
        .text-glow-red {
          text-shadow: 0 0 40px rgba(246, 54, 0, 0.6);
        }
      `}</style>
    </div>
  );
}