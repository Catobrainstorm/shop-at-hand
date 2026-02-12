"use client"
import { ShieldCheck, Package, AlertCircle, CheckCircle2, History } from 'lucide-react';

export default function RetailerDashboard() {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto font-lexend" style={{ color: '#E2CFC8' }}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-syne text-5xl font-black uppercase italic tracking-tighter text-white">Vendor Hub</h2>
          <p className="uppercase text-xs font-bold tracking-[0.3em] mt-2" style={{ color: 'rgba(226, 207, 200, 0.4)' }}>
            Central Pharmacy • ID: 8821 • PROTOCOL V4
          </p>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border backdrop-blur-md" 
             style={{ backgroundColor: 'rgba(246, 54, 0, 0.1)', borderColor: 'rgba(246, 54, 0, 0.3)', color: '#F63600' }}>
          <ShieldCheck size={20} className="animate-pulse" />
          <span className="font-black uppercase text-sm tracking-widest">Verified Status: Active</span>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 hover:border-white/20 transition-all">
          <div className="flex justify-between items-start mb-4">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(226, 207, 200, 0.3)' }}>Reservations</p>
            <History size={18} style={{ color: '#FF7300' }} />
          </div>
          <p className="text-5xl font-black font-syne text-white">14</p>
          <p className="text-[10px] uppercase font-bold mt-2" style={{ color: '#FF7300' }}>+2 since last hour</p>
        </div>

        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 hover:border-[#F63600]/30 transition-all">
          <div className="flex justify-between items-start mb-4">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(226, 207, 200, 0.3)' }}>Items Verified</p>
            <CheckCircle2 size={18} style={{ color: '#F63600' }} />
          </div>
          <p className="text-5xl font-black font-syne" style={{ color: '#F63600' }}>1,024</p>
          <p className="text-[10px] uppercase font-bold mt-2" style={{ color: 'rgba(226, 207, 200, 0.2)' }}>Global Ledger Synced</p>
        </div>

        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
          <div className="flex justify-between items-start mb-4">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(226, 207, 200, 0.3)' }}>Discrepancies</p>
            <AlertCircle size={18} style={{ color: '#E18704' }} />
          </div>
          <p className="text-5xl font-black font-syne" style={{ color: '#E18704' }}>0</p>
          <p className="text-[10px] uppercase font-bold mt-2 text-white/20">Reality Filter Clean</p>
        </div>
      </div>

      {/* INVENTORY MANAGEMENT */}
      <div className="mt-12 bg-white/5 rounded-[40px] p-8 border border-white/10 overflow-hidden relative">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-syne text-2xl font-black uppercase italic text-white flex items-center gap-3">
            <Package style={{ color: '#F63600' }} /> Active Inventory
          </h3>
          <button className="text-[10px] font-black uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
            Update Stock
          </button>
        </div>

        <div className="space-y-2">
          {[
            { name: 'Aspirin-500', batch: 'B772-01', stock: '92 Units' },
            { name: 'Vitamin C-Z', batch: 'B772-02', stock: '14 Units' },
            { name: 'Medi-Gauze', batch: 'B772-03', stock: '200+ Units' },
          ].map((item) => (
            <div key={item.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all group">
              <div>
                <span className="text-xl font-bold text-white block">{item.name}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Batch: {item.batch}</span>
              </div>
              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <span className="text-sm font-black uppercase tracking-tighter" style={{ color: '#F63600' }}>Verified Stock</span>
                <span className="text-xl font-black text-white">{item.stock}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NOTE */}
      <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
        End-to-End Encryption Enabled • Terminal 8821-A
      </p>
    </div>
  );
}