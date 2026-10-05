import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface HowToInstallProps {
  shopeeUrl: string;
}

export const HowToInstall: React.FC<HowToInstallProps> = ({ shopeeUrl }) => {
  const steps = [
    {
      step: '01',
      title: 'Bersihkan Keramik Dinding',
      desc: 'Lap permukaan keramik hingga bersih dari debu, minyak, atau sisa sabun, lalu pastikan kering sempurna.',
    },
    {
      step: '02',
      title: 'Buka Pelindung Lem Nano',
      desc: 'Lepaskan plastik pelindung pada stiker perekat transparan tanpa menyentuh bagian lem dengan jari.',
    },
    {
      step: '03',
      title: 'Tempel & Tekan Rata',
      desc: 'Tempelkan stiker pada dinding, lalu tekan kuat-kuat dari tengah ke luar untuk mengeluarkan seluruh gelembung udara.',
    },
    {
      step: '04',
      title: 'Kaitkan Rak & Siap Pakai',
      desc: 'Kaitkan rak ke bantalan perekat. Diamkan 12-24 jam sebelum diisi beban maksimal agar perekat mengunci permanen.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">
            Super Gampang &amp; Praktis
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
            Pasang Sendiri Dalam 1 Menit Tanpa Perlu Tukang
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            Tidak butuh tenaga ekstra atau alat pertukangan berat. Siapa pun bisa memasangnya dengan rapi dan presisi.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-neutral-800/80 border border-neutral-700/80 rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#EE4D2D]/90 block mb-4">
                  {st.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-700/60 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Tanpa bor &amp; tanpa paku</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA within section */}
        <div className="mt-12 text-center">
          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-colors"
          >
            <span>Dapatkan Sekarang di Shopee</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
