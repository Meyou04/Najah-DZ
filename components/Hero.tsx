import React from 'react';
import { Smartphone } from 'lucide-react';
import { Translation } from '../types';

interface HeroProps {
  t: Translation['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Badge */}
        <div className="inline-block animate-fade-in-up [animation-delay:0ms]">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-dz-gold/20 text-yellow-700 dark:text-yellow-400 mb-6 border border-dz-gold/30">
            <span className="w-2 h-2 rounded-full bg-dz-gold mr-2 rtl:mr-0 rtl:ml-2 animate-pulse"></span>
            {t.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
          {t.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          {t.subheadline}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up [animation-delay:600ms]">
          <a 
            href="https://github.com/Meyou04/Najah-DZ/releases/download/V1.0/Najah-DZ.apk"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-600 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-primary-500/50"
          >
            <Smartphone className="w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2 group-hover:animate-bounce" />
            <span>{t.cta}</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-pulse-slow"></div>
          </a>
        </div>
      </div>
    </section>
  );
};