import React, { useState, useEffect } from 'react';
import { PurchaseEvent } from '../types';
import { ShoppingBag, CheckCircle, X, Pause, Play } from 'lucide-react';
import heroImg from '../assets/images/rak_kawat_dua_susun_hero_1791221100823.jpg';
import multiTierImg from '../assets/images/rak_sudut_dua_tingkat_1791221135615.jpg';

interface LivePurchasePopupProps {
  events: PurchaseEvent[];
  shopeeUrl: string;
}

export const LivePurchasePopup: React.FC<LivePurchasePopupProps> = ({
  events,
  shopeeUrl,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isDismissed || isPaused) return;

    // Update popup setiap 10 detik sesuai permintaan
    const interval = setInterval(() => {
      // Trigger a brief fade animation
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
        setIsVisible(true);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, [events.length, isDismissed, isPaused]);

  if (isDismissed) return null;

  const current = events[currentIndex] || events[0];

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-auto transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-2xl rounded-2xl p-3 sm:p-3.5 flex items-center gap-3">
        
        {/* Product mini thumbnail with real photo */}
        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-neutral-200">
          <img
            src={currentIndex % 2 === 0 ? heroImg : multiTierImg}
            alt="Rak Kamar Mandi Tempel Asli"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#EE4D2D] rounded-full flex items-center justify-center text-white">
            <ShoppingBag className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Text information */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1.5 leading-none mb-1">
            <span className="font-extrabold text-neutral-900 text-xs sm:text-sm truncate">
              {current.name}
            </span>
            <span className="text-[11px] text-neutral-400">({current.city})</span>
            <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
          </div>
          
          <p className="text-[11px] text-neutral-600 truncate leading-snug">
            Baru saja memesan <strong className="text-neutral-900">{current.quantity}</strong> Rak
          </p>

          <div className="flex items-center gap-2 mt-1 text-[10px] text-neutral-400">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EE4D2D] hover:underline font-semibold"
            >
              Beli di Shopee &rarr;
            </a>
            <span>·</span>
            <span>Update tiap 10 dtk</span>
          </div>
        </div>

        {/* Controls: Pause/Play & Dismiss */}
        <div className="flex items-center flex-col gap-1 border-l border-neutral-100 pl-2">
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-neutral-400 hover:text-neutral-700 rounded-md hover:bg-neutral-100 transition-colors"
            title="Tutup Notifikasi"
            aria-label="Tutup Notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 text-neutral-400 hover:text-neutral-700 rounded-md hover:bg-neutral-100 transition-colors"
            title={isPaused ? 'Lanjutkan Ticker' : 'Jeda Ticker'}
            aria-label={isPaused ? 'Lanjutkan Ticker' : 'Jeda Ticker'}
          >
            {isPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>

      </div>
    </div>
  );
};
