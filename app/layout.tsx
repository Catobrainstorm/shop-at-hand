"use client"
import { useState, useEffect } from "react";
import { Syne, Lexend } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ShieldCheck, Menu, X, Scan, MapPin, Search, ArrowRight } from "lucide-react";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <html lang="en" className={`${syne.variable} ${lexend.variable}`}>
      <body className="bg-[#011613] text-[#E2CFC8] antialiased font-lexend relative">
        
        {/* NAV BAR */}
        <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center bg-[#011613]/90 backdrop-blur-2xl border-b border-brandRed/10">
          <Link href="/" className="flex items-center gap-2 z-[110]" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-brandRed p-2 rounded-xl shadow-[0_0_25px_rgba(246,54,0,0.4)]">
              <ShieldCheck size={24} strokeWidth={3} className="text-white" />
            </div>
            <span className="font-syne font-black text-xl md:text-2xl tracking-tighter uppercase text-white">ShopHand</span>
          </Link>

          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-[#E2CFC8]/40">
            <Link href="/" className="hover:text-brandOrange transition-all">Infrastructure</Link>
            <Link href="/scanner" className="hover:text-brandOrange transition-all">Verify</Link>
            <Link href="/map" className="hover:text-brandOrange transition-all">Map</Link>
          </div>

          <div className="flex items-center gap-4 z-[110]">
            <Link href="/retailer" className="hidden sm:block bg-brandAmber text-black px-6 py-2.5 rounded-full font-black text-[10px] uppercase shadow-xl hover:scale-105 transition-all">
              Retailer Access
            </Link>
            
            {mounted && (
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 bg-white/5 rounded-xl border border-white/10 text-brandRed">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </nav>

        {/* OVERLAY MENU - Molten Theme */}
        {mounted && (
          <div className={`fixed inset-0 z-[90] bg-[#011613]/98 backdrop-blur-3xl md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="flex flex-col h-full justify-center px-8 space-y-6">
              {[
                { name: 'Home Hub', href: '/', color: 'text-brandRed' },
                { name: 'Verification', href: '/scanner', color: 'text-brandOrange' },
                { name: 'Marketplace', href: '/map', color: 'text-brandAmber' },
              ].map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="group border-b border-brandRed/10 pb-6 flex items-center justify-between">
                  <span className={`text-5xl font-black uppercase italic tracking-tighter ${item.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {item.name}
                  </span>
                  <ArrowRight className="text-brandRed" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <main className="min-h-screen pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}