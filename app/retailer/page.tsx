export default function RetailerDashboard() {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-syne text-4xl font-black uppercase">Vendor Hub</h2>
          <p className="text-white/40 uppercase text-xs font-bold tracking-widest">Central Pharmacy • ID: 8821</p>
        </div>
        <div className="bg-brandGreen/20 text-brandGreen border border-brandGreen/50 px-4 py-2 rounded-xl font-bold">
          Verified Status: Active
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* STAT CARDS */}
        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
          <p className="text-white/30 text-xs font-bold uppercase mb-2">Reservations</p>
          <p className="text-4xl font-black font-syne">14</p>
        </div>
        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
          <p className="text-white/30 text-xs font-bold uppercase mb-2">Items Verified</p>
          <p className="text-4xl font-black font-syne text-brandGreen">1,024</p>
        </div>
        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
          <p className="text-white/30 text-xs font-bold uppercase mb-2">Reports</p>
          <p className="text-4xl font-black font-syne text-brandYellow">0</p>
        </div>
      </div>

      {/* INVENTORY PREVIEW */}
      <div className="mt-12 bg-white/5 rounded-[40px] p-8 border border-white/10">
        <h3 className="font-syne text-xl font-bold mb-6">Active Inventory</h3>
        <div className="space-y-4">
          {['Aspirin-500', 'Vitamin C-Z', 'Medi-Gauze'].map((item) => (
            <div key={item} className="flex justify-between p-4 border-b border-white/5 font-lexend">
              <span>{item}</span>
              <span className="text-brandGreen font-bold">In Stock</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}