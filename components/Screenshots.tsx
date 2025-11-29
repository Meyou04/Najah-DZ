import React from 'react';
import { Translation } from '../types';

interface ScreenshotsProps {
  t: Translation['screenshots'];
}

export const Screenshots: React.FC<ScreenshotsProps> = ({ t }) => {
  // We duplicate the images to ensure a seamless loop
  const allImages = [...t.images, ...t.images];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              {t.title}
            </h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          {/* 
              Marquee Content 
              animate-scroll moves the content from 0 to -50% width.
              The content width is 2x the images list, so -50% brings us back to the start visually.
          */}
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {allImages.map((imgSrc, index) => (
              <div 
                key={index} 
                className="px-4"
              >
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <img 
                    src={imgSrc} 
                    alt={`App Screenshot ${index + 1}`} 
                    className="w-[200px] md:w-[260px] h-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};