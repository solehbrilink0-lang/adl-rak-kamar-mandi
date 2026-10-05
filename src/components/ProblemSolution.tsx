import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  shopeeUrl: string;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ shopeeUrl }) => {
  return (
    <section id="solusi" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-[#EE4D2D] mb-2">
            Perbandingan Nyata
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Apakah Anda Sering Mengalami Masalah Ini di Kamar Mandi?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3">
            Jangan biarkan kamar mandi yang berantakan merusak kenyamanan dan membahayakan keselamatan keluarga Anda.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Problem Card (Sebelum) */}
          <div className="bg-rose-50/50 border border-rose-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-rose-200/70 pb-4">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-base sm:text-lg">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>Kondisi Kamar Mandi Berantakan</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-100 px-2.5 py-1 rounded-md">
                  Sebelum
                </span>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Botol sabun &amp; shampoo berserakan di lantai</strong>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Sering tersenggol jatuh, bocor, dan membuat area mandi terasa sempit serta pengap.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Lantai licin &amp; genangan air sabun berlumut</strong>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Bawah botol menempel di lantai basah sehingga menimbulkan kerak kuning, jamur, dan licin membahayakan.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dinding rusak atau takut bor keramik pecah</strong>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Bagi yang tinggal di kontrakan / kos tidak boleh bor dinding, atau repot harus panggil tukang dan alat bor.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Rak gantung biasa cepat berkarat &amp; patah</strong>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      Bahan besi murahan cepat karatan kena air shower dan copot sendiri dalam hitungan minggu.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200/60 text-xs text-rose-700/80 font-medium">
              Hasil: Kamar mandi terlihat kusam, kotor, dan tidak nyaman untuk relaksasi.
            </div>
          </div>

          {/* Solution Card (Sesudah) */}
          <div className="bg-emerald-50/50 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-200/70 pb-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base sm:text-lg">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Solusi Praktis: Rak Tempel ADLORGANIZER</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                  Sesudah
                </span>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-neutral-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Semua botol tersusun rapi &amp; melayang di dinding</strong>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                      Kamar mandi langsung terlihat 2x lebih lega, estetik, dan rapi seketika layaknya hotel bintang lima.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Lantai kering &amp; bebas lumut</strong>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                      Celah drainase cepat membuat air langsung jatuh, botol cepat kering tanpa ada endapan sabun atau jamur.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pemasangan 1 menit tanpa bor, keramik 100% mulus</strong>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                      Cukup tempel Nano Adhesive strip berdaya rekat tinggi. Tahan beban hingga 15 kg tanpa paku dan tanpa merusak keramik.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Aluminium High-Grade anti karat seumur hidup</strong>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                      Bahan tebal anti luntur, tahan air panas shower dan suhu lembap puluhan tahun.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-800">
                Ubah kamar mandi Anda hari ini!
              </span>
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 px-3.5 py-2 rounded-lg transition-colors"
              >
                <span>Beli di Shopee</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
