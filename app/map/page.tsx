"use client"
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MapPin, Navigation, ShieldCheck, ArrowLeft, Phone, Search, Utensils, Pill, Loader2, Star } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';

// THE MASTER REGISTRY (10+ Stores for a "Full" Feel)
const MASTER_STORES = [
  { id: 1, name: "Vita-Life Specialized", lat: 6.6710, lng: 3.3010, address: "13 Baale Animashaun Rd", items: ["drug a", "medicine"], contact: "+234 810 223 4455", rating: 4.9 },
  { id: 2, name: "Mega Food Hub", lat: 6.6750, lng: 3.3080, address: "Suberu Oje Rd, Alagbado", items: ["rice", "beans", "eggs"], contact: "+234 902 112 3344", rating: 4.7 },
  { id: 3, name: "Astra-Point Pharma", lat: 6.6800, lng: 3.3150, address: "Old Abeokuta Expressway", items: ["medicine", "vaccines"], contact: "+234 703 445 6677", rating: 4.8 },
  { id: 4, name: "Daily Needs Grocery", lat: 6.6690, lng: 3.2950, address: "Ijaye Road, Lagos", items: ["eggs", "fish", "meat", "beans", "rice"], contact: "+234 805 111 2222", rating: 4.5 },
  { id: 5, name: "Health-Plus Express", lat: 6.6850, lng: 3.3200, address: "Command Rd, Ipaja", items: ["drug a", "medicine", "syrup"], contact: "+234 812 333 4444", rating: 4.6 },
  { id: 6, name: "The Protein Store", lat: 6.6600, lng: 3.2800, address: "Abule Egba Junction", items: ["meat", "fish", "eggs"], contact: "+234 901 222 3333", rating: 4.9 },
  { id: 7, name: "Global Meds Ltd", lat: 6.6900, lng: 3.3300, address: "Abeokuta Motor Road", items: ["medicine", "first aid"], contact: "+234 708 999 0000", rating: 4.4 },
  { id: 8, name: "Greenfield Grains", lat: 6.6500, lng: 3.2700, address: "Ayobo Main Road", items: ["rice", "beans", "spag"], contact: "+234 810 555 6666", rating: 4.7 },
  { id: 9, name: "City Pharma Hub", lat: 6.6780, lng: 3.3050, address: "Meiran Road, Lagos", items: ["medicine", "drug a"], contact: "+234 905 666 7777", rating: 4.8 },
  { id: 10, name: "Value-Mart Super", lat: 6.6720, lng: 3.3100, address: "Alakuko Bus Stop", items: ["rice", "eggs", "meat", "spag"], contact: "+234 802 444 5555", rating: 4.3 }
];

function MapContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlQuery = searchParams.get('search') || "";
  
  const [search, setSearch] = useState(urlQuery);
  const [filteredStores, setFilteredStores] = useState(MASTER_STORES);
  const [selected, setSelected] = useState(MASTER_STORES[0]);
  const [userLoc, setUserLoc] = useState<{lat: number, lng: number} | null>(null);

  // Sync with URL and Filter
  useEffect(() => {
    const query = urlQuery.toLowerCase();
    if (query) {
      const results = MASTER_STORES.filter(s => 
        s.items.some(i => i.includes(query)) || s.name.toLowerCase().includes(query)
      );
      setFilteredStores(results);
      if (results.length > 0) setSelected(results[0]);
    } else {
      setFilteredStores(MASTER_STORES);
    }
  }, [urlQuery]);

  // Entrance Animations
  useEffect(() => {
    gsap.from(".store-card", { opacity: 0, x: -20, stagger: 0.05, ease: "power2.out" });
  }, [filteredStores]);

  const openNav = (lat: number, lng: number) => {
    // REALITY-FILTERED DIRECTION HANDSHAKE
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`, '_blank');
  };

  return (
    <div className="flex flex-col h-screen md:flex-row bg-[#011613] text-white font-lexend overflow-hidden">
      
      {/* SIDEBAR: The "Organism" List */}
      <div className="w-full md:w-[480px] border-r border-white/5 p-6 md:p-8 overflow-y-auto bg-[#011613] z-20 custom-scrollbar">
        <Link href="/" className="inline-flex items-center gap-2 text-brandGreen font-black text-[10px] uppercase tracking-[0.3em] mb-8 hover:translate-x-1 transition-transform">
          <ArrowLeft size={14} /> System Home
        </Link>
        
        {/* SYNCED SEARCH BAR */}
        <div className="relative mb-10 group">
          <input 
            type="text"
            placeholder="Search Rice, Beans, Drugs..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              router.push(`/map?search=${e.target.value}`, { scroll: false });
            }}
            className="w-full bg-white/5 border-2 border-white/10 p-6 rounded-[28px] pl-16 text-lg focus:border-brandGreen/50 outline-none transition-all placeholder:text-white/10 font-medium"
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brandGreen transition-colors" size={24} />
          {search && (
            <button onClick={() => {setSearch(""); router.push('/map')}} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white">Clear</button>
          )}
        </div>

        <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl font-black font-syne uppercase tracking-tighter leading-none">
                {urlQuery ? "Filtered" : "All Stores"} <br/> <span className="text-brandGreen">Nearby</span>
            </h2>
            <p className="text-[10px] font-black text-white/30 uppercase">{filteredStores.length} Vendors Found</p>
        </div>

        <div className="space-y-4">
          {filteredStores.map((shop) => (
            <div 
              key={shop.id}
              onClick={() => setSelected(shop)}
              className={`store-card p-6 rounded-[35px] border-2 transition-all cursor-pointer ${
                selected.id === shop.id ? 'bg-brandGreen/10 border-brandGreen shadow-xl' : 'bg-white/5 border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${shop.items.includes("medicine") ? 'bg-brandGreen/20 text-brandGreen' : 'bg-brandYellow/20 text-brandYellow'}`}>
                   {shop.items.includes("medicine") ? <Pill size={22}/> : <Utensils size={22}/>}
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full text-[10px] font-black text-brandYellow">
                    <Star size={10} fill="currentColor"/> {shop.rating}
                </div>
              </div>
              
              <h3 className="text-xl font-black uppercase tracking-tight mb-1">{shop.name}</h3>
              <p className="text-white/30 text-xs font-medium mb-6 line-clamp-1">{shop.address}</p>
              
              <div className="flex gap-2">
                 <button 
                   onClick={(e) => { e.stopPropagation(); openNav(shop.lat, shop.lng); }} 
                   className="flex-1 bg-brandGreen text-white py-4 rounded-2xl font-black text-[11px] uppercase flex items-center justify-center gap-2 hover:brightness-110 transition active:scale-95"
                 >
                    <Navigation size={16} /> Get Directions
                 </button>
                 <a href={`tel:${shop.contact}`} onClick={(e) => e.stopPropagation()} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10">
                    <Phone size={20} className="text-brandGreen" />
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAP VISUALIZER */}
      <div className="hidden md:block flex-grow relative bg-[#01100e]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop')] bg-cover opacity-10 grayscale contrast-150" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011613] via-transparent to-transparent w-1/3" />
        
        {/* Dynamic Store Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-brandGreen/20 rounded-full animate-ping" />
                <div className="absolute inset-8 bg-brandGreen/30 rounded-full animate-pulse" />
                <div className="relative w-16 h-16 bg-brandGreen rounded-full border-4 border-white shadow-[0_0_50px_#009e87] flex items-center justify-center">
                    <MapPin size={32} className="text-white" />
                </div>
            </div>
            <div className="mt-6 glass-panel p-8 border border-brandGreen/30 bg-black/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl min-w-[280px]">
                <h4 className="font-black text-2xl uppercase leading-none mb-1">{selected.name}</h4>
                <p className="text-brandGreen font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Authorized Source</p>
                <div className="flex flex-col gap-2">
                    <button onClick={() => openNav(selected.lat, selected.lng)} className="w-full bg-white text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:invert transition">Initiate Route</button>
                    <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-2">Inventory Reality-Filtered & Verified</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default function MapPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#011613] flex items-center justify-center"><Loader2 className="animate-spin text-brandGreen" size={40}/></div>}>
      <MapContent />
    </Suspense>
  );
}