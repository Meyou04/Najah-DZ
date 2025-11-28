export type Language = 'fr' | 'ar';
export type Theme = 'light' | 'dark';

export interface Translation {
  nav: {
    logo: string;
    langBtn: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    badge: string;
  };
  levels: {
    title: string;
    items: {
      id: string;
      title: string;
      desc: string;
      isHighlighted?: boolean;
    }[];
  };
  features: {
    title: string;
    list: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
  footer: {
    copyright: string;
    social: string;
  };
}