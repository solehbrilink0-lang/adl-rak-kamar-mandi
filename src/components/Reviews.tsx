import React, { useState } from 'react';
import { Review } from '../types';
import { Star, CheckCircle, ThumbsUp, MessageSquare, ShieldCheck } from 'lucide-react';

interface ReviewsProps {
  reviews: Review[];
  shopeeUrl: string;
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews, shopeeUrl }) => {
  const [helpfulMap, setHelpfulMap] = useState<Record<string, number>>({});
  const [votedMap, setVotedMap] = useState<Record<string, boolean>>({});
  const [filterName, setFilterName] = useState<string>('all');

  const handleVoteHelpful = (id: string, initialCount: number) => {
    if (votedMap[id]) return;
    setHelpfulMap((prev) => ({
      ...prev,
      [id]: (prev[id] ?? initialCount) + 1,
    }));
    setVotedMap((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const filteredReviews = filterName === 'all'
    ? reviews
    : reviews.filter((r) => r.name.toLowerCase() === filterName.toLowerCase());

  return (
    <section id="ulasan" className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-[#EE4D2D] mb-2">
            Ulasan Asli Pembeli
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Kata Mereka yang Kamar Mandinya Sudah Bebas Berantakan
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3">
            Berikut adalah ulasan bintang 5 dari pembeli kami yang telah membuktikan kekuatan dan kepraktisan rak ini.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            
            {/* Score */}
            <div className="text-center md:pr-6">
              <span className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">
                5.0
              </span>
              <div className="flex justify-center text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-neutral-500 font-medium">
                Berdasarkan 2.480+ Ulasan Pembeli Shopee
              </p>
            </div>

            {/* Highlights */}
            <div className="py-4 md:py-0 md:px-6 space-y-2 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center justify-between">
                <span>Daya Rekat Super Kuat</span>
                <span className="font-bold text-emerald-700">100% Puas</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-full" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span>Kualitas Anti Karat</span>
                <span className="font-bold text-emerald-700">100% Asli</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-full" />
              </div>
            </div>

            {/* Filter by Reviewer */}
            <div className="pt-4 md:pt-0 md:pl-6 space-y-2">
              <p className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                Filter Ulasan Pembeli:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setFilterName('all')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    filterName === 'all'
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  Semua ({reviews.length})
                </button>
                {reviews.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setFilterName(r.name)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                      filterName.toLowerCase() === r.name.toLowerCase()
                        ? 'bg-[#EE4D2D] text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 6 Reviews Grid (Dewi, Nisa, Fatimah, Solihin, Aden, Rifki) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const currentHelpful = helpfulMap[rev.id] ?? rev.helpfulCount;
            const hasVoted = votedMap[rev.id];

            return (
              <div
                key={rev.id}
                className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top user bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm`}
                      >
                        {rev.avatarInitials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-neutral-900 text-sm">
                            {rev.name}
                          </h3>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <p className="text-xs text-neutral-400">
                          {rev.city} · {rev.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 5-star icons */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-neutral-800 ml-1.5">
                      5.0 (Sangat Puas)
                    </span>
                  </div>

                  {/* Review text */}
                  <p className="text-sm text-neutral-700 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Bottom metadata */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-1 text-emerald-700 font-medium text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{rev.badge}</span>
                  </div>

                  <button
                    onClick={() => handleVoteHelpful(rev.id, rev.helpfulCount)}
                    disabled={hasVoted}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors ${
                      hasVoted
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{currentHelpful}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action at bottom of reviews */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500 mb-3">
            Ingin merasakan kepraktisan yang sama seperti mereka?
          </p>
          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#EE4D2D] hover:bg-[#d83f21] rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>Beli Sekarang di Shopee</span>
          </a>
        </div>

      </div>
    </section>
  );
};
