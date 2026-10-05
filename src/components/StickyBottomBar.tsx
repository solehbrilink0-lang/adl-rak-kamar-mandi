import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface StickyBottomBarProps {
  shopeeUrl: string;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ shopeeUrl }) => {
  return (
    <aside aria-label="Aksi Cepat Pembelian" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Price snippet */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-[10px] uppercase font-extrabold text-rose-600 bg-rose-50 px-1 py-0.5 rounded border border-rose-200">
              -57%
            </span>
            <span className="text-[11px] text-neutral-400 line-through">
              Rp79.900
            </span>
          </div>
          <div className="text-base font-extrabold text-[#EE4D2D] tracking-tight mt-0.5">
            Rp34.516
          </div>
        </div>

        {/* Shopee CTA Button */}
        <a
          href={shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 bg-[#EE4D2D] hover:bg-[#d83f21] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span>Beli di Shopee</span>
        </a>
      </div>
    </aside>
  );
};
