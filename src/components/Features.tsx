import React from 'react';
import { Shield, Droplets, Wrench, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: Shield,
      title: 'Teknologi Nano Magic Adhesive',
      desc: 'Daya cengkeram super rekat menahan beban hingga 15 kg. Keramik dinding bebas lubang bor, tidak retak, dan tidak meninggalkan bekas lem saat dilepas.',
      highlight: 'Kekuatan Beban 15kg',
    },
    {
      icon: Droplets,
      title: 'Bahan Aluminium Anti Karat',
      desc: 'Terbuat dari paduan High-Grade Space Aluminium dengan lapisan electro-finish matte hitam yang tahan air panas, lembap, dan tidak berkarat selamanya.',
      highlight: '100% Anti Karat',
    },
    {
      icon: Sparkles,
      title: 'Drainase Cepat Anti Genangan',
      desc: 'Desain celah dasar berjarak presisi membuat air sabun langsung tuntas ke bawah. Botol tetap kering, bersih dari lumut, jamur, dan kerak kuning.',
      highlight: 'Higienis & Kering',
    },
    {
      icon: Wrench,
      title: 'Pemasangan Cepat Tanpa Alat',
      desc: 'Tidak butuh obeng, paku, atau tukang bangunan. Cukup 4 langkah mudah dalam 1 menit: bersihkan, tempel, tekan, dan rak langsung siap dipakai.',
      highlight: 'Pasang 1 Menit',
    },
    {
      icon: Layers,
      title: 'Kapasitas Luas & Hook Gantungan',
      desc: 'Muat 4-6 botol sabun & shampoo ukuran 1 liter sekaligus. Dilengkapi hook gantung multifungsi di bagian bawah untuk spons mandi, sikat, dan alat cukur.',
      highlight: 'Hemat Ruang 80%',
    },
    {
      icon: CheckCircle2,
      title: 'Bisa Untuk Semua Ruangan',
      desc: 'Selain kamar mandi, sangat cocok juga dipasang di area wastafel, dapur untuk bumbu masak, atau tempat cuci pakaian.',
      highlight: 'Multifungsi',
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-[#EE4D2D] mb-2">
            Spesifikasi &amp; Keunggulan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Kenapa Ribuan Keluarga Memilih Rak Kamar Mandi Ini?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3">
            Dibuat dengan standar kualitas tinggi untuk mengatasi kekhawatiran rak jatuh, berkarat, atau merusak dinding rumah Anda.
          </p>
        </div>

        {/* Features 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-neutral-50/70 border border-neutral-200/90 hover:border-neutral-300 hover:bg-neutral-50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-900 mb-5">
                    <IconComponent className="w-5 h-5 text-[#EE4D2D]" />
                  </div>
                  
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
                    {item.highlight}
                  </div>
                  
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
