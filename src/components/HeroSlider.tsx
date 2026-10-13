
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSliderProps {
  onOpenCallback: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenCallback }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState<string[]>(["/image.png", "/image1.png"]);

  // Backend se slider images load karna
  useEffect(() => {
    fetch("/api/sliders")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          setBackgroundImages(data.data.map((item: any) => item.imageUrl));
        }
      })
      .catch((err) => console.log("Using local default slides:", err));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % backgroundImages.length);
  }, [backgroundImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  }, [backgroundImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Auto-Slider (Every 4.5 seconds smooth transition)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500); // 4.5 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative bg-slate-950 text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="COPS NIGHT PATROLLING Hero Slider"
    >
      {/* Background Image Carousel with Smooth Fade */}
      {backgroundImages.map((imageSrc, idx) => {
        const isActive = idx === currentSlideIndex % backgroundImages.length;
        return (
          <div
            key={imageSrc + idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            <img
              src={imageSrc}
              alt={`COPS NIGHT PATROLLING background ${idx + 1}`}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-5000 ease-out"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/20 to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        );
      })}

      {/* Slider Controls Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12">
        <div className="min-h-[180px] sm:min-h-[240px] lg:min-h-[280px]" />

        <div className="mt-8 sm:mt-12 pt-6 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {backgroundImages.map((_, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 sm:w-10 bg-orange-500 shadow-sm"
                      : "w-2.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Prev / Next Manual Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};