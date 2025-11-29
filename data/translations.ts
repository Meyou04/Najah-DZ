import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  fr: {
    nav: {
      logo: 'Najah DZ',
      langBtn: 'العربية',
    },
    hero: {
      headline: 'Révise tes examens en toute simplicité',
      subheadline: 'Accède à des milliers de sujets, corrections et résumés pour le BEM, le BAC et tous les niveaux du secondaire.',
      cta: 'Télécharger l\'APK',
      badge: 'Application Gratuite',
    },
    screenshots: {
      title: 'Découvrez l\'Interface',
      subtitle: 'Une application moderne et intuitive conçue pour faciliter vos révisions.',
      images: [
        '/accueille-tlfn-FR.png',
        '/Années-TLFN-FR.png',
        '/filliere-du-bac TLFN-FR.png',
        '/sujets-TLFN-FR.png',
        '/themes-TLFN-FR.png'
      ]
    },
    levels: {
      title: 'Choisis ton niveau',
      items: [
        { id: '1AS', title: '1ère Année Secondaire', desc: 'Tronc commun Sciences & Lettres' },
        { id: '2AS', title: '2ème Année Secondaire', desc: 'Toutes les filières techniques et littéraires' },
        { id: '3AS', title: '3ème Année Secondaire', desc: 'Préparation finale pour l\'examen' },
        { id: 'BEM', title: 'BEM (Brevet)', desc: 'Sujets et solutions pour le moyen' },
        { id: 'BAC', title: 'BAC', desc: 'La clé de l\'université - Sujets probables & Annales', isHighlighted: true },
      ],
    },
    features: {
      title: 'Pourquoi Najah DZ ?',
      list: [
        { icon: 'wifi-off', title: 'Mode Hors Ligne', desc: 'Révise partout, même sans internet.' },
        { icon: 'check-circle', title: 'Corrections Détaillées', desc: 'Comprends tes erreurs avec nos solutions.' },
        { icon: 'file-text', title: 'Support PDF', desc: 'Télécharge et imprime tes sujets facilement.' },
      ],
    },
    footer: {
      copyright: '© 2024 Najah DZ. Fait avec ❤️ en Algérie.',
      social: 'Suivez-nous',
    },
  },
  ar: {
    nav: {
      logo: 'Najah DZ',
      langBtn: 'Français',
    },
    hero: {
      headline: 'راجع امتحاناتك بكل سهولة واحترافية',
      subheadline: 'احصل على آلاف المواضيع، الحلول، والملخصات لشهادة التعليم المتوسط، البكالوريا وجميع سنوات الثانوي.',
      cta: 'تحميل التطبيق (APK)',
      badge: 'تطبيق مجاني',
    },
    screenshots: {
      title: 'اكتشف واجهة التطبيق',
      subtitle: 'تصميم عصري وسهل الاستخدام لمساعدتك في المراجعة.',
      images: [
        '/accueille-TLFN-AR.png',
        '/années-TLFN-AR.png',
        '/fillieres-TLFN-AR.png',
        '/sombre-TLFN-AR.png',
        '/sujets-TLFN-AR.png'
      ]
    },
    levels: {
      title: 'اختر مستواك الدراسي',
      items: [
        { id: '1AS', title: 'السنة الأولى ثانوي', desc: 'جذع مشترك علوم و آداب' },
        { id: '2AS', title: 'السنة الثانية ثانوي', desc: 'جميع الشعب العلمية والأدبية' },
        { id: '3AS', title: 'السنة الثالثة ثانوي', desc: 'تحضيرات مكثفة للامتحانات النهائية' },
        { id: 'BEM', title: 'شهادة التعليم المتوسط', desc: 'مواضيع وحلول لطلاب المتوسط' },
        { id: 'BAC', title: 'شهادة البكالوريا', desc: 'مفتاح الجامعة - حوليات ومواضيع مقترحة', isHighlighted: true },
      ],
    },
    features: {
      title: 'لماذا تختار Najah DZ؟',
      list: [
        { icon: 'wifi-off', title: 'بدون إنترنت', desc: 'راجع دروسك في أي مكان دون الحاجة لاتصال.' },
        { icon: 'check-circle', title: 'حلول نموذجية', desc: 'تصحيح مفصل لفهم أخطائك وتحسين مستواك.' },
        { icon: 'file-text', title: 'دعم ملفات PDF', desc: 'تحميل وطباعة المواضيع بجودة عالية.' },
      ],
    },
    footer: {
      copyright: '© 2024 Najah DZ. صنع بـ ❤️ في الجزائر.',
      social: 'تابعنا على',
    },
  },
};