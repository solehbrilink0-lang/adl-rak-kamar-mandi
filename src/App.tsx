/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  DEFAULT_SHOPEE_URL,
  INITIAL_PHOTO_COLUMNS,
  INITIAL_REVIEWS,
  PURCHASE_EVENTS,
} from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { PhotoColumns } from './components/PhotoColumns';
import { Features } from './components/Features';
import { HowToInstall } from './components/HowToInstall';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LivePurchasePopup } from './components/LivePurchasePopup';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ShoppingBag, ShieldCheck, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function App() {
  // Link Shopee Resmi Produk
  const shopeeUrl = DEFAULT_SHOPEE_URL;

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#EE4D2D]/20 selection:text-[#EE4D2D]">
      {/* Navbar with 3-zone contract */}
      <Navbar shopeeUrl={shopeeUrl} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero shopeeUrl={shopeeUrl} />

        {/* Problem vs Solution (Kamar Mandi Berantakan -> Rapi Seketika) */}
        <ProblemSolution shopeeUrl={shopeeUrl} />

        {/* Kolom Galeri Foto Produk Asli (Rapi & Bersih) */}
        <PhotoColumns photos={INITIAL_PHOTO_COLUMNS} />

        {/* Keunggulan & Spesifikasi */}
        <Features />

        {/* Panduan Pemasangan 1 Menit */}
        <HowToInstall shopeeUrl={shopeeUrl} />

        {/* Ulasan Bintang 5: Dewi, Nisa, Fatimah, Solihin, Aden, Rifki */}
        <Reviews reviews={INITIAL_REVIEWS} shopeeUrl={shopeeUrl} />

        {/* Banner Penawaran Langsung Shopee (Single Offer - Tanpa Paket) */}
        <section className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EE4D2D]/20 border border-[#EE4D2D]/30 text-amber-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Promo Spesial Hari Ini · Siap Kirim Hari Ini</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance mb-4">
              Miliki Kamar Mandi Rapi, Mewah &amp; Bebas Berantakan Sekarang
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dapatkan <strong>Rak Kamar Mandi Tempel Anti Karat ADLORGANIZER</strong> dengan teknologi Magic Nano Adhesive super kuat tanpa bor keramik.
            </p>

            {/* Price Box */}
            <div className="inline-flex items-center gap-3 bg-neutral-800/90 border border-neutral-700/80 px-6 py-3.5 rounded-2xl mb-8">
              <span className="text-xs text-rose-400 font-extrabold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/50">
                -57%
              </span>
              <span className="text-sm text-neutral-400 line-through">
                Rp79.900
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#EE4D2D] tracking-tight">
                Rp34.516
              </span>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#EE4D2D] hover:bg-[#d83f21] text-white font-extrabold text-base rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-center"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Beli Sekarang di Shopee</span>
                <ChevronRight className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Bisa Bayar di Tempat (COD)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garansi 100% Produk Original</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Gratis Ongkir Seluruh Indonesia</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tanya Jawab (FAQ) */}
        <FAQ shopeeUrl={shopeeUrl} />
      </main>

      {/* Footer */}
      <Footer shopeeUrl={shopeeUrl} />

      {/* Popup Orang Membeli Setiap 10 Detik Sekali (Dewi, Nisa, Fatimah, Solihin, Aden, Rifki) */}
      <LivePurchasePopup
        events={PURCHASE_EVENTS}
        shopeeUrl={shopeeUrl}
      />

      {/* Sticky Bottom Bar untuk Pembelian Cepat di Mobile */}
      <StickyBottomBar shopeeUrl={shopeeUrl} />
    </div>
  );
}
