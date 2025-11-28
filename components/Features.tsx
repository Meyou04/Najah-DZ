import React from 'react';
import { WifiOff, CheckCircle, FileText } from 'lucide-react';
import { Translation } from '../types';

interface FeaturesProps {
  t: Translation['features'];
}

export const Features: React.FC<FeaturesProps> = ({ t }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wifi-off': return <WifiOff size={40} />;
      case 'check-circle': return <CheckCircle size={40} />;
      case 'file-text': return <FileText size={40} />;
      default: return <CheckCircle size={40} />;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.list.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-primary-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-primary-500/30">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};