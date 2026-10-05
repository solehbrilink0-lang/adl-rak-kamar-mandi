import React from 'react';
import { ShoppingBag, ShieldCheck, Truck, RotateCcw, Heart } from 'lucide-react';

interface FooterProps {
  shopeeUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ shopeeUrl }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-xs pt-16 pb-24 sm:pb-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 text-[#EE4D2D] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-xs">100% Produk Original</p>
              <p className="text-[11px] text-neutral-500">Material High-Grade Alloy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 text-emerald-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-xs">Kirim Seluruh Indonesia</p>
              <p className="text-[11px] text-neutral-500">Packing Ekstra Aman</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-xs">Garansi Rusak Ganti Baru</p>
              <p className="text-[11px] text-neutral-500">Klaim Mudah &amp; Cepat</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 text-sky-400 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-xs">Transaksi Aman di Shopee</p>
              <p className="text-[11px] text-neutral-500">Bisa Bayar di Tempat (COD)</p>
            </div>
          </div>
        </div>

        {/* Main Footer Info */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <a href="#" className="text-base font-extrabold text-white tracking-tight">
              ADL <span className="text-[#EE4D2D]">ORGANIZER</span>
            </a>
            <p className="text-xs text-neutral-400 max-w-md">
              Solusi praktis kamar mandi rapi, bersih, dan estetik tanpa repot bor dinding keramik.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EE4D2D] hover:underline font-semibold"
            >
              Kunjungi Toko Shopee
            </a>
            <span>·</span>
            <a href="#solusi" className="text-neutral-400 hover:text-white transition-colors">
              Solusi Masalah
            </a>
            <span>·</span>
            <a href="#ulasan" className="text-neutral-400 hover:text-white transition-colors">
              Ulasan Pembeli
            </a>
            <span>·</span>
            <a href="#faq" className="text-neutral-400 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-neutral-800/80 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()} ADLORGANIZER. Semua hak dilindungi. Dibuat dengan</span>
          <Heart className="w-3 h-3 text-[#EE4D2D] fill-[#EE4D2D]" />
          <span>untuk rumah yang rapi dan nyaman.</span>
        </div>

      </div>
    </footer>
  );
};
