"use client"
import { useState, useEffect } from "react";
import { Syne, Lexend } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ShieldCheck, Menu, X, ArrowRight } from "lucide-react";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <html lang="en" className={`${syne.variable} ${lexend.variable}`}>
      <body className="antialiased font-lexend relative" style={{ backgroundColor: '#011613', color: '#E2CFC8' }}>
        
        {/* NAV BAR */}
        <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-2xl border-b" 
             style={{ backgroundColor: 'rgba(1, 22, 19, 0.9)', borderBottomColor: 'rgba(246, 54, 0, 0.1)' }}>
          
          <Link href="/" className="flex items-center gap-2 z-[110]" onClick={() => setIsMenuOpen(false)}>
            <div className="p-2 rounded-xl" style={{ backgroundColor: '#F63600', boxShadow: '0 0 25px rgba(246, 54, 0, 0.4)' }}>
              <ShieldCheck size={24} strokeWidth={3} className="text-white" />
            </div>
            <span className="font-syne font-black text-xl md:text-2xl tracking-tighter uppercase text-white">Shop-At-Hand</span>
          </Link>

          {/* Desktop Links - Hovering with #FF7300 */}
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: 'rgba(226, 207, 200, 0.4)' }}>
            <Link href="/" className="transition-all hover:text-[#FF7300]">Home</Link>
            <Link href="/scanner" className="transition-all hover:text-[#FF7300]">Verify</Link>
            <Link href="/map" className="transition-all hover:text-[#FF7300]">Map</Link>
          </div>

          <div className="flex items-center gap-4 z-[110]">
            <Link href="/retailer" className="hidden sm:block text-black px-6 py-2.5 rounded-full font-black text-[10px] uppercase shadow-xl hover:scale-105 transition-all"
                  style={{ backgroundColor: '#E18704' }}>
              Retailer Access
            </Link>
            
            {mounted && (
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 rounded-xl border border-white/10" style={{ color: '#F63600' }}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </nav>

        {/* MOBILE OVERLAY MENU */}
        {mounted && (
          <div className={`fixed inset-0 z-[90] backdrop-blur-3xl md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
               style={{ backgroundColor: 'rgba(1, 22, 19, 0.98)' }}>
            <div className="flex flex-col h-full justify-center px-8 space-y-6">
              {[
                { name: 'Home Hub', href: '/', color: '#F63600' },
                { name: 'Verification', href: '/scanner', color: '#FF7300' },
                { name: 'Marketplace', href: '/map', color: '#E18704' },
              ].map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} 
                      className="group border-b pb-6 flex items-center justify-between"
                      style={{ borderBottomColor: 'rgba(246, 54, 0, 0.1)' }}>
                  <span className="text-5xl font-black uppercase italic tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{ color: item.color }}>
                    {item.name}
                  </span>
                  <ArrowRight style={{ color: '#F63600' }} />
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