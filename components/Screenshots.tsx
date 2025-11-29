import React from 'react';
import { Translation } from '../types';

interface ScreenshotsProps {
  t: Translation['screenshots'];
}

export const Screenshots: React.FC<ScreenshotsProps> = ({ t }) => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradients to hide scroll edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 md:gap-10 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 md:mx-0 justify-start md:justify-center">
            {t.images.map((imgSrc, index) => (
              <div 
                key={index} 
                className="snap-center shrink-0 w-[240px] md:w-[280px] transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-900 dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-gray-800">
                  {/* Phone Bezel Top */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 dark:bg-gray-800 rounded-b-2xl z-20"></div>
                  
                  <img 
                    src={imgSrc} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-auto block object-cover aspect-[9/19]"
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