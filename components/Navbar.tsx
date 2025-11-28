import React from 'react';
import { Moon, Sun, Languages, GraduationCap } from 'lucide-react';
import { Language, Theme, Translation } from '../types';

interface NavbarProps {
  t: Translation['nav'];
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, theme, toggleTheme, toggleLang }) => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white mr-3 rtl:mr-0 rtl:ml-3 shadow-lg group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <span className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-200">
              {t.logo}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-bold text-sm hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
            >
              <Languages size={18} />
              <span>{t.langBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};