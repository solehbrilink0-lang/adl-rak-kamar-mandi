import React from 'react';
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowDown,
} from 'lucide-react';
import heroImg from '../assets/images/rak_kawat_dua_susun_hero_1791221100823.jpg';

interface HeroProps {
  shopeeUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ shopeeUrl }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100/40 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Pain & Value, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Social Proof Star Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-600 font-medium">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-neutral-900">4.9 / 5.0</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>2.480+ Ulasan Pembeli Puas</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Terlaris di Shopee
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15] text-balance">
              Kamar Mandi Berantakan &amp; Botol Sabun Berserakan?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE4D2D] to-amber-600">
                Rapi Seketika Tanpa Bor Dinding!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Solusi praktis rak tempel dinding serbaguna dengan teknologi{' '}
              <strong>Nano Magic Adhesive</strong>. Tahan beban hingga <strong>15 kg</strong>,{' '}
              <strong>100% anti karat</strong>, dan keramik kesayangan Anda tetap mulus tanpa lubang paku.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Tanpa Bor &amp; Tanpa Merusak Dinding</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Daya Tahan Beban s/d 15 Kilogram</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Bahan Aerospace Aluminium Anti Karat</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Drainase Cepat Bebas Air Menggenang</span>
              </div>
            </div>

            {/* Pricing Tag & Flash Deal */}
            <div className="p-4 bg-white border border-neutral-200 rounded-2xl shadow-sm space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  -57%
                </span>
                <span className="text-xs text-neutral-400 line-through">Rp79.900</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#EE4D2D] tracking-tight">
                  Rp34.516
                </span>
                <span className="text-xs text-neutral-500 font-medium">/ pcs (Promo Spesial)</span>
              </div>
              <p className="text-xs text-neutral-500">
                *Stok promo terbatas untuk hari ini. Siap kirim ke seluruh Indonesia via Shopee.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-base font-bold text-white bg-[#EE4D2D] hover:bg-[#d83f21] rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-center group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Beli Sekarang di Shopee</span>
                <ChevronRight className="w-4 h-4 ml-0.5 opacity-80" />
              </a>

              <a
                href="#foto-produk"
                className="px-5 py-4 text-sm font-semibold text-neutral-700 hover:text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>Lihat Foto &amp; Review</span>
                <ArrowDown className="w-4 h-4 text-neutral-500" />
              </a>
            </div>

            {/* Guarantee badge */}
            <div className="flex items-center gap-4 text-xs text-neutral-500 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garansi 100% Produk Original</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Gratis Ongkir Extra Shopee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Product Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 shadow-2xl bg-neutral-100 group">
                <img
                  src={heroImg}
                  alt="Rak Kamar Mandi Tempel Tanpa Bor Matte Black"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <p className="text-xs uppercase font-semibold tracking-wider text-amber-300">
                    Foto Produk Asli
                  </p>
                  <p className="text-sm font-bold drop-shadow">
                    Kamar Mandi Rapi, Mewah &amp; Higienis Seketika
                  </p>
                </div>
              </div>

              {/* Floating Highlight 1: Beban 15kg */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl rounded-2xl p-3 flex items-center gap-3 z-10 pointer-events-none">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm">
                  15KG
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-900">Kekuatan Beban</p>
                  <p className="text-[11px] text-neutral-500">Kuat tanpa lepas</p>
                </div>
              </div>

              {/* Floating Highlight 2: Tanpa Bor */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl rounded-2xl p-3 flex items-center gap-3 z-10 pointer-events-none">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-900">Tanpa Bor &amp; Paku</p>
                  <p className="text-[11px] text-neutral-500">Keramik 100% aman</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
