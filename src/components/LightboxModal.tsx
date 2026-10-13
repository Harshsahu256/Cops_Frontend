import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Tag } from "lucide-react";
import { GalleryItem } from "../data/companyData";

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIndex]);
      }
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % items.length;
        onSelect(items[nextIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items, onClose, onSelect]);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-50 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-white text-xs font-mono">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-all hover:scale-105"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-all hover:scale-105"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div
        className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl transition-all"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption bar */}
        <div className="w-full mt-4 bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Tag className="w-3 h-3" />
                {item.category}
              </span>
              {item.location && (
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3 text-red-400" />
                  {item.location}
                </span>
              )}
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
