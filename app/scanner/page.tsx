"use client"
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, X, ShieldCheck, AlertTriangle, CheckCircle, MapPin, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';

// MOCK REGISTRY - Connects to your Map tags
const REGISTRY = {
  "455789024": { name: "Drug A", status: "verified", desc: "Authentic Pharmaceutical", origin: "Astra-Bio Global" },
  "755423189": { name: "Premium Rice", status: "verified", desc: "Long Grain Grade A", origin: "Northern Farms" },
  "998223101": { name: "Fresh Eggs", status: "verified", desc: "Organic Poultry", origin: "Local Hub" },
  "456803322": { name: "Counterfeit DA", status: "flagged", desc: "UNSAFE PRODUCT", origin: "Unknown Source" }
};

export default function ScannerPage() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<'idle' | 'scanning' | 'result'>('idle');
  const [data, setData] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    async function init() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (e) { console.warn("Camera fallback active"); }
    }
    init();
  }, []);

  const handleVerify = (code: string) => {
    if (!code) return;
    setStatus('scanning');
    
    // Epic Scan Animation
    gsap.to(".scan-line", { top: "100%", duration: 0.6, repeat: 3, yoyo: true, ease: "sine.inOut" });

    setTimeout(() => {
      const match = REGISTRY[code as keyof typeof REGISTRY] || REGISTRY["456803322"];
      setData(match);
      setStatus('result');
      gsap.from(".modal-pop", { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#011613] text-white p-4 md:p-8 font-lexend flex flex-col items-center">
      
      {/* HEADER */}
      <div className="w-full max-w-md flex justify-between items-center mb-8">
        <div>
          <h1 className="font-syne text-2xl font-black uppercase tracking-tighter leading-none">Terminal <span className="text-brandGreen">v4</span></h1>
          <p className="text-[10px] text-brandGreen font-bold tracking-widest uppercase mt-1">Reality Filter Active</p>
        </div>
        <Link href="/" className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-white/40 hover:text-white">
          <X size={20}/>
        </Link>
      </div>

      {/* COMPACT SCANNER VIEWPORT */}
      <div className="relative w-full max-w-sm aspect-square bg-black rounded-[48px] border-4 border-white/5 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] mb-8">
        <video ref={videoRef} autoPlay playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125" />
        
        {/* HUD Elements */}
        <div className="scan-line absolute top-0 w-full h-1 bg-brandGreen shadow-[0_0_20px_#009e87] z-30" />
        <div className="absolute inset-10 border border-white/10 rounded-3xl flex items-center justify-center">
          {status === 'idle' && <Camera className="text-white/10 animate-pulse" size={48} />}
          {status === 'scanning' && <Loader2 className="text-brandGreen animate-spin" size={48} />}
        </div>
        
        {/* Decorative HUD Corners */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-brandGreen/40 rounded-tl-xl" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-brandGreen/40 rounded-br-xl" />
      </div>

      {/* INPUT SYSTEM */}
      <div className="w-full max-w-sm space-y-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="ENTER BATCH CODE..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-white/5 border-2 border-white/10 p-6 rounded-[28px] text-xl font-black text-brandYellow placeholder:text-white/10 outline-none focus:border-brandYellow/40 transition-all uppercase"
          />
          <button 
            onClick={() => handleVerify(input)} 
            className="absolute right-2 top-2 bottom-2 px-8 bg-brandYellow text-black rounded-[22px] font-black hover:scale-95 active:scale-90 transition-all shadow-lg"
          >
            VERIFY
          </button>
        </div>
        
        <div className="flex justify-center gap-6">
           <div className="flex items-center gap-2 opacity-30 text-[9px] font-bold uppercase tracking-[0.2em]">
             <ShieldCheck size={12} /> Encrypted
           </div>
           <div className="flex items-center gap-2 opacity-30 text-[9px] font-bold uppercase tracking-[0.2em]">
             <CheckCircle size={12} /> Global Registry
           </div>
        </div>
      </div>

      {/* RESULT MODAL (The Handshake) */}
      {status === 'result' && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="modal-pop w-full max-w-xs bg-[#011613] border-t-8 border-brandGreen p-8 rounded-[40px] shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-brandGreen rotate-12"><ShieldCheck size={100} /></div>

            <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center mx-auto mb-6 shadow-xl ${data.status === 'verified' ? 'bg-brandGreen/20 text-brandGreen shadow-brandGreen/10' : 'bg-red-500/20 text-red-500'}`}>
                {data.status === 'verified' ? <CheckCircle size={40} /> : <AlertTriangle size={40} />}
            </div>
            
            <h2 className="text-4xl font-black font-syne uppercase tracking-tighter leading-none mb-2">{data.name}</h2>
            <p className={`text-xs font-black tracking-[0.3em] uppercase mb-8 ${data.status === 'verified' ? 'text-brandGreen' : 'text-red-500'}`}>
                {data.status === 'verified' ? 'Product Authentic' : 'Counterfeit Alert'}
            </p>
            
            <div className="bg-white/5 p-4 rounded-2xl mb-8 border border-white/5">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Log Details</p>
                <p className="text-white/80 text-sm font-medium">{data.desc}</p>
                <p className="text-brandGreen/60 text-[10px] font-bold mt-2 uppercase italic">{data.origin}</p>
            </div>

            <div className="flex flex-col gap-3">
                {data.status === 'verified' ? (
                    <button 
                      onClick={() => router.push(`/map?search=${encodeURIComponent(data.name)}`)} 
                      className="w-full bg-brandGreen py-5 rounded-[22px] font-black text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition shadow-lg shadow-brandGreen/20"
                    >
                        <MapPin size={18} /> FIND AUTHORIZED VENDORS
                    </button>
                ) : (
                    <button onClick={() => setStatus('idle')} className="w-full bg-red-600 py-5 rounded-[22px] font-black text-xs text-white shadow-lg shadow-red-600/20">
                        REPORT TO AUTHORITIES
                    </button>
                )}
                <button onClick={() => setStatus('idle')} className="py-4 text-[10px] font-black opacity-30 uppercase tracking-widest hover:opacity-100 transition">Cancel Scan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}