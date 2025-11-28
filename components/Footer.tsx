import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Translation } from '../types';

interface FooterProps {
  t: Translation['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 dark:text-gray-400 font-medium text-center md:text-left">
            {t.copyright}
          </p>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span className="text-sm font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
              {t.social}
            </span>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};