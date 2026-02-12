"use client"
import { useParams } from 'next/navigation';
import { CheckCircle, AlertTriangle, ShieldCheck, Factory, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ResultPage() {
  const { status } = useParams();
  const isVerified = status === 'verified';

  return (
    <div className="px-6 max-w-2xl mx-auto py-12 animate-in zoom-in duration-500">
      <div className={`glass-card rounded-[48px] p-10 border-t-8 ${isVerified ? 'border-brandGreen' : 'border-red-500'}`}>
        
        {/* Status Icon */}
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${isVerified ? 'bg-brandGreen/20 text-brandGreen' : 'bg-red-500/20 text-red-500'}`}>
          {isVerified ? <CheckCircle size={54} /> : <AlertTriangle size={54} />}
        </div>

        <h1 className="font-syne text-5xl font-black text-center mb-2 uppercase">
          {isVerified ? 'Authentic' : 'Counterfeit'}
        </h1>
        <p className="text-center text-white/40 font-bold tracking-widest mb-10 uppercase text-xs">
          Batch Protocol Result
        </p>

        {/* Data Grid */}
        <div className="grid grid-cols-1 gap-4 mb-10">
          <div className="bg-white/5 p-6 rounded-3xl flex items-center gap-4">
            <Factory className="text-brandYellow" size={24} />
            <div>
              <p className="text-[10px] text-white/30 uppercase font-bold">Manufacturer</p>
              <p className="font-bold text-lg">{isVerified ? 'Astra-Bio Global' : 'Unknown Source'}</p>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-3xl flex items-center gap-4">
            <Calendar className="text-brandYellow" size={24} />
            <div>
              <p className="text-[10px] text-white/30 uppercase font-bold">Expiry Date</p>
              <p className="font-bold text-lg">{isVerified ? 'DEC 2028' : 'EXPIRED / INVALID'}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {isVerified ? (
          <Link href="/map" className="w-full bg-brandGreen py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition">
            <MapPin size={24} /> FIND VERIFIED RETAILER
          </Link>
        ) : (
          <button className="w-full bg-red-600 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-xl">
            REPORT THIS PRODUCT
          </button>
        )}
      </div>
      
      <Link href="/scanner" className="block text-center mt-8 text-white/40 font-bold uppercase text-xs hover:text-white transition">
        ← Scan another item
      </Link>
    </div>
  );
}