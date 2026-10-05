import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

interface NavbarProps {
  shopeeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ shopeeUrl }) => {
  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-neutral-900 text-neutral-100 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-neutral-800">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>
          <strong>PROMO SPESIAL:</strong> Diskon hingga 57% + Garansi Anti Karat &amp; Bebas Pengembalian
        </span>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-extrabold tracking-tight text-neutral-900 flex items-center gap-1.5"
          >
            <span>ADL</span>
            <span className="text-[#EE4D2D]">ORGANIZER</span>
          </a>

          {/* Zone 2: 4-5 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#solusi" className="hover:text-neutral-900 transition-colors">
              Solusi Masalah
            </a>
            <a href="#foto-produk" className="hover:text-neutral-900 transition-colors">
              Galeri Foto
            </a>
            <a href="#keunggulan" className="hover:text-neutral-900 transition-colors">
              Keunggulan
            </a>
            <a href="#ulasan" className="hover:text-neutral-900 transition-colors">
              Ulasan Pembeli
            </a>
            <a href="#faq" className="hover:text-neutral-900 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Zone 3: Primary action */}
          <div className="flex items-center gap-2.5">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#EE4D2D] hover:bg-[#d83f21] rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 shrink-0 whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Beli di Shopee</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
