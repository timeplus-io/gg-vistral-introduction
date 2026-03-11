import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideDeckProps {
  slides: React.ReactNode[];
}

export default function SlideDeck({ slides }: SlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex flex-col">
      <div className="flex-1 relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex items-center justify-center p-6"
          >
            <div className="w-full max-w-5xl aspect-video bg-white border border-gray-700 rounded p-6 shadow-sm flex flex-col relative">
              {slides[currentSlide]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="h-16 border-t border-gray-700 bg-white flex items-center justify-between px-6 z-10">
        <div className="text-sm text-gray-400">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="h-8 px-2 flex items-center justify-center bg-white border border-gray-600 rounded text-gray-200 hover:bg-gray-900 disabled:bg-gray-700 disabled:text-gray-400 disabled:border-gray-600 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="h-8 px-2 flex items-center justify-center bg-white border border-gray-600 rounded text-gray-200 hover:bg-gray-900 disabled:bg-gray-700 disabled:text-gray-400 disabled:border-gray-600 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
