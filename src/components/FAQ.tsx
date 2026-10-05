import React, { useState } from 'react';
import { FAQS } from '../data/initialData';
import { ChevronDown, HelpCircle, ShoppingBag } from 'lucide-react';

interface FAQProps {
  shopeeUrl: string;
}

export const FAQ: React.FC<FAQProps> = ({ shopeeUrl }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-[#EE4D2D] mb-2">
            Tanya Jawab
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Pertanyaan yang Sering Ditanyakan (FAQ)
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Semua yang perlu Anda ketahui sebelum membeli produk rak kamar mandi kami.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 hover:text-[#EE4D2D] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#EE4D2D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 p-6 bg-white border border-neutral-200 rounded-2xl text-center space-y-3">
          <h3 className="font-bold text-neutral-900 text-sm sm:text-base">
            Masih ada pertanyaan seputar produk atau pengiriman?
          </h3>
          <p className="text-xs text-neutral-500">
            Anda bisa langsung chat kami atau checkout langsung dengan aman di toko resmi Shopee.
          </p>
          <div className="pt-2">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#EE4D2D] hover:bg-[#d83f21] rounded-xl transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buka Toko Shopee Kami</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
