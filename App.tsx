import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LevelsGrid } from './components/LevelsGrid';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { translations } from './data/translations';
import { Language, Theme } from './types';

function App() {
  // State initialization with lazy initializers to access localStorage safely
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('dzexams-lang');
    return (saved === 'fr' || saved === 'ar') ? saved : 'fr';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('dzexams-theme');
    // Check system preference if no saved theme
    if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return (saved === 'light' || saved === 'dark') ? saved : 'light';
  });

  // Effect to handle Document Direction (LTR/RTL) and Lang attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('dzexams-lang', lang);
  }, [lang]);

  // Effect to handle Dark Mode Class on HTML/Body
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dzexams-theme', theme);
  }, [theme]);

  // Handlers
  const toggleLang = () => setLang((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const t = translations[lang];

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white dark:bg-slate-900 font-sans`}>
      <Navbar 
        t={t.nav} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
      />
      
      <main>
        <Hero t={t.hero} />
        <LevelsGrid t={t.levels} />
        <Features t={t.features} />
      </main>

      <Footer t={t.footer} />
    </div>
  );
}

export default App;