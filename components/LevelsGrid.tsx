import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { Translation } from '../types';

interface LevelsGridProps {
  t: Translation['levels'];
}

export const LevelsGrid: React.FC<LevelsGridProps> = ({ t }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item) => {
            const isBac = item.id === 'BAC';
            
            return (
              <div
                key={item.id}
                className={`
                  relative group bg-white dark:bg-slate-800 rounded-3xl p-8 
                  transition-all duration-300 hover:-translate-y-2
                  ${isBac 
                    ? 'lg:col-span-2 lg:row-span-1 md:col-span-2 border-4 border-dz-gold shadow-2xl shadow-dz-gold/20' 
                    : 'border border-gray-100 dark:border-gray-700 hover:shadow-xl shadow-sm'
                  }
                `}
              >
                {/* Popular Badge for BAC */}
                {isBac && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-dz-gold text-white px-6 py-2 rounded-full font-black shadow-lg flex items-center gap-2">
                    <Award size={20} className="animate-pulse" />
                    <span>POPULAR</span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div className={`
                    p-4 rounded-2xl flex items-center justify-center
                    ${isBac ? 'bg-dz-gold/20 text-yellow-600 dark:text-yellow-400' : 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'}
                  `}>
                    {isBac ? <Award size={32} /> : <BookOpen size={28} />}
                  </div>
                  <span className={`
                    text-4xl font-black opacity-10
                    ${isBac ? 'text-dz-gold' : 'text-gray-400'}
                  `}>
                    {item.id}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${isBac ? 'text-gray-900 dark:text-white text-3xl' : 'text-gray-800 dark:text-gray-100'}`}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};