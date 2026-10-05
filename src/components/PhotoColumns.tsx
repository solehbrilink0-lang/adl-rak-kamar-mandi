import React, { useState } from 'react';
import { PhotoColumn } from '../types';
import { ZoomIn, X, Sparkles } from 'lucide-react';

interface PhotoColumnsProps {
  photos: PhotoColumn[];
}

export const PhotoColumns: React.FC<PhotoColumnsProps> = ({ photos }) => {
  const [lightboxImg, setLightboxImg] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="foto-produk" className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-[#EE4D2D] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Galeri Foto Asli Produk</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Detail Kualitas &amp; Tampilan Asli Pemasangan
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3">
            Lihat langsung hasil pemasangan nyata: material aluminium kokoh, presisi sudut, serta kerapian penataan kamar mandi.
          </p>
        </div>

        {/* 4 Photo Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {photos.map((col, index) => (
            <div
              key={col.id}
              className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setLightboxImg({ url: col.imageUrl, title: col.title })}
            >
              <div>
                {/* Photo Image Slot */}
                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img
                    src={col.imageUrl}
                    alt={col.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Scrim on hover with zoom hint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5">
                    <span className="px-2.5 py-1.5 bg-black/70 backdrop-blur-md text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Klik Perbesar
                    </span>
                  </div>

                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
                    {col.tag}
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-neutral-900 text-sm sm:text-base leading-snug group-hover:text-[#EE4D2D] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    {col.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                <div className="text-[11px] font-semibold text-neutral-400 group-hover:text-[#EE4D2D] flex items-center gap-1 transition-colors">
                  <ZoomIn className="w-3 h-3" />
                  <span>Lihat Foto Resolusi Penuh</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.url}
              alt={lightboxImg.title}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="mt-3 text-center text-white">
              <p className="text-sm font-bold">{lightboxImg.title}</p>
              <p className="text-xs text-neutral-400 mt-0.5">Klik di luar foto atau tombol X untuk menutup</p>
            </div>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-3 -right-3 sm:top-2 sm:right-2 p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 shadow-xl transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
