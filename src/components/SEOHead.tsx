import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface SEOHeadProps {
  page?: string;
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  page = 'home', 
  title: customTitle, 
  description: customDescription,
  keywords: customKeywords 
}) => {
  const { i18n } = useTranslation();
  
  const seoData = {
    uk: {
      home: {
        title: "Еники-Беники - Студія дубляжу та озвучки | Київ",
        description: "Еники-Беники - професійна студія дубляжу та озвучки в Києві. Дублюємо фільми, серіали, рекламу. Зірковий дубляж українськими знаменитостями.",
        keywords: "дубляж, озвучка, студія, Київ, Еники-Беники, переклад фільмів, зірковий дубляж"
      },
      about: {
        title: "Про нас - Еники-Беники | Студія дубляжу Київ",
        description: "Дізнайтеся більше про студію дубляжу Еники-Беники. Професійні перекладачі, режисери, звукорежисери з багаторічним досвідом роботи.",
        keywords: "про студію дубляжу, професійні актори, Київ, озвучка фільмів"
      },
      services: {
        title: "Послуги дубляжу та озвучки - Еники-Беники",
        description: "Повний спектр послуг дубляжу: voiceover, dub+voiceover, повноцінний дубляж, DCP, реклама. Професійна локалізація контенту.",
        keywords: "послуги дубляжу, voiceover, озвучка реклами, DCP, локалізація"
      },
      celebrity: {
        title: "Зірковий дубляж - Еники-Беники | Знаменитості",
        description: "Зірковий дубляж від українських знаменитостей. Музиканти, коміки, громадські діячі. Дмитро Кулеба, Олена Кравець, Олег Скрипка.",
        keywords: "зірковий дубляж, українські знаменитості, селебріті дубляж"
      },
      portfolio: {
        title: "Наші роботи - Портфоліо студії Еники-Беники",
        description: "Перегляньте портфоліо студії дубляжу Еники-Беники. Приклади наших робіт з дубляжу фільмів, серіалів та реклами.",
        keywords: "портфоліо дубляжу, приклади робіт, озвучені фільми"
      },
      contacts: {
        title: "Контакти - Еники-Беники | Київ, Поділ",
        description: "Звертайтеся до студії дубляжу Еники-Беники. Адреса: Київ, Вікентія Хвойки 15/15. Телефон: +38 067 268 17 17",
        keywords: "контакти студії дубляжу, Київ Поділ, замовити дубляж"
      }
    },
    ru: {
      home: {
        title: "Еники-Беники - Студия дубляжа и озвучки | Киев",
        description: "Еники-Беники - профессиональная студия дубляжа и озвучки в Киеве. Дублируем фильмы, сериалы, рекламу. Звездный дубляж украинскими знаменитостями.",
        keywords: "дубляж, озвучка, студия, Киев, Еники-Беники, перевод фильмов, звездный дубляж"
      },
      about: {
        title: "О нас - Еники-Беники | Студия дубляжа Киев",
        description: "Узнайте больше о студии дубляжа Еники-Беники. Профессиональные переводчики, режиссеры, звукорежиссеры с многолетним опытом работы.",
        keywords: "о студии дубляжа, профессиональные актеры, Киев, озвучка фильмов"
      },
      services: {
        title: "Услуги дубляжа и озвучки - Еники-Беники",
        description: "Полный спектр услуг дубляжа: voiceover, dub+voiceover, полноценный дубляж, DCP, реклама. Профессиональная локализация контента.",
        keywords: "услуги дубляжа, voiceover, озвучка рекламы, DCP, локализация"
      },
      celebrity: {
        title: "Звездный дубляж - Еники-Беники | Знаменитости",
        description: "Звездный дубляж от украинских знаменитостей. Музыканты, комики, общественные деятели. Дмитрий Кулеба, Елена Кравец, Олег Скрипка.",
        keywords: "звездный дубляж, украинские знаменитости, селебрити дубляж"
      },
      portfolio: {
        title: "Наши работы - Портфолио студии Еники-Беники",
        description: "Посмотрите портфолио студии дубляжа Еники-Беники. Примеры наших работ по дубляжу фильмов, сериалов и рекламы.",
        keywords: "портфолио дубляжа, примеры работ, озвученные фильмы"
      },
      contacts: {
        title: "Контакты - Еники-Беники | Киев, Подол",
        description: "Обращайтесь в студию дубляжа Еники-Беники. Адрес: Киев, Викентия Хвойки 15/15. Телефон: +38 067 268 17 17",
        keywords: "контакты студии дубляжа, Киев Подол, заказать дубляж"
      }
    },
    en: {
      home: {
        title: "Enyky-Benyky - Dubbing and Voice-over Studio | Kyiv",
        description: "Enyky-Benyky - professional dubbing and voice-over studio in Kyiv. We dub films, series, commercials. Celebrity dubbing with Ukrainian stars.",
        keywords: "dubbing, voice-over, studio, Kyiv, Enyky-Benyky, film translation, celebrity dubbing"
      },
      about: {
        title: "About Us - Enyky-Benyky | Dubbing Studio Kyiv",
        description: "Learn more about Enyky-Benyky dubbing studio. Professional translators, directors, sound engineers with years of experience.",
        keywords: "about dubbing studio, professional actors, Kyiv, film dubbing"
      },
      services: {
        title: "Dubbing and Voice-over Services - Enyky-Benyky",
        description: "Full range of dubbing services: voiceover, dub+voiceover, full dubbing, DCP, advertising. Professional content localization.",
        keywords: "dubbing services, voiceover, advertising dubbing, DCP, localization"
      },
      celebrity: {
        title: "Celebrity Dubbing - Enyky-Benyky | Ukrainian Stars",
        description: "Celebrity dubbing by Ukrainian stars. Musicians, comedians, public figures. Dmitry Kuleba, Elena Kravets, Oleg Skrypka.",
        keywords: "celebrity dubbing, Ukrainian celebrities, star dubbing"
      },
      portfolio: {
        title: "Our Work - Enyky-Benyky Studio Portfolio",
        description: "View the portfolio of Enyky-Benyky dubbing studio. Examples of our work dubbing films, series and commercials.",
        keywords: "dubbing portfolio, work examples, dubbed films"
      },
      contacts: {
        title: "Contacts - Enyky-Benyky | Kyiv, Podil",
        description: "Contact Enyky-Benyky dubbing studio. Address: Kyiv, Vikentia Khvoiky 15/15. Phone: +38 067 268 17 17",
        keywords: "dubbing studio contacts, Kyiv Podil, order dubbing"
      }
    },
    fr: {
      home: {
        title: "Enyky-Benyky - Studio de doublage et voix off | Kiev",
        description: "Enyky-Benyky - studio professionnel de doublage et voix off à Kiev. Nous doublons films, séries, publicités. Doublage de célébrités ukrainiennes.",
        keywords: "doublage, voix off, studio, Kiev, Enyky-Benyky, traduction de films, doublage de célébrités"
      },
      about: {
        title: "À propos - Enyky-Benyky | Studio de doublage Kiev",
        description: "Découvrez le studio de doublage Enyky-Benyky. Traducteurs professionnels, réalisateurs, ingénieurs du son avec des années d'expérience.",
        keywords: "à propos du studio de doublage, acteurs professionnels, Kiev, doublage de films"
      },
      services: {
        title: "Services de doublage et voix off - Enyky-Benyky",
        description: "Gamme complète de services de doublage: voix off, dub+voix off, doublage complet, DCP, publicité. Localisation professionnelle de contenu.",
        keywords: "services de doublage, voix off, doublage publicitaire, DCP, localisation"
      },
      celebrity: {
        title: "Doublage de célébrités - Enyky-Benyky | Stars ukrainiennes",
        description: "Doublage de célébrités par des stars ukrainiennes. Musiciens, comédiens, personnalités publiques. Dmitry Kuleba, Elena Kravets, Oleg Skrypka.",
        keywords: "doublage de célébrités, célébrités ukrainiennes, doublage de stars"
      },
      portfolio: {
        title: "Notre travail - Portfolio du studio Enyky-Benyky",
        description: "Consultez le portfolio du studio de doublage Enyky-Benyky. Exemples de notre travail de doublage de films, séries et publicités.",
        keywords: "portfolio de doublage, exemples de travail, films doublés"
      },
      contacts: {
        title: "Contacts - Enyky-Benyky | Kiev, Podil",
        description: "Contactez le studio de doublage Enyky-Benyky. Adresse: Kiev, Vikentia Khvoiky 15/15. Téléphone: +38 067 268 17 17",
        keywords: "contacts studio de doublage, Kiev Podil, commander doublage"
      }
    }
  };

  useEffect(() => {
    const currentLang = i18n.language as keyof typeof seoData;
    const pageData = seoData[currentLang]?.[page as keyof typeof seoData[typeof currentLang]] || seoData.uk.home;
    
    const title = customTitle || pageData.title;
    const description = customDescription || pageData.description;
    const keywords = customKeywords || pageData.keywords;

    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update language
    document.documentElement.setAttribute('lang', currentLang);

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph tags
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:type', 'website');
    updateProperty('og:url', window.location.href);
    updateProperty('og:locale', currentLang === 'uk' ? 'uk_UA' : currentLang === 'ru' ? 'ru_RU' : currentLang === 'en' ? 'en_US' : 'fr_FR');

    // Twitter Cards
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Enyky-Benyky",
      "description": description,
      "url": "https://sidoryakasergey.github.io/enyky-benyky/",
      "telephone": "+380672681717",
      "email": "info@enykybenyky.com.ua",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vikentia Khvoiky 15/15",
        "addressLocality": "Kyiv",
        "addressCountry": "UA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "50.4659",
        "longitude": "30.5132"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "serviceArea": {
        "@type": "Country",
        "name": "Ukraine"
      },
      "sameAs": [
        "https://sidoryakasergey.github.io/enyky-benyky/"
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://sidoryakasergey.github.io/enyky-benyky/contacts"
        }
      }
    };

    // Remove existing structured data
    const existingLD = document.querySelector('#structured-data');
    if (existingLD) {
      existingLD.remove();
    }

    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add hreflang tags
    const removeExistingHreflang = () => {
      const existing = document.querySelectorAll('link[hreflang]');
      existing.forEach(link => link.remove());
    };

    const addHreflang = (lang: string, url: string) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    };

    removeExistingHreflang();
    
    const baseUrl = 'https://sidoryakasergey.github.io/enyky-benyky/';
    const currentPath = window.location.hash.replace('#/', '') || '';
    
    addHreflang('uk', `${baseUrl}#/${currentPath}?lang=uk`);
    addHreflang('ru', `${baseUrl}#/${currentPath}?lang=ru`);
    addHreflang('en', `${baseUrl}#/${currentPath}?lang=en`);
    addHreflang('fr', `${baseUrl}#/${currentPath}?lang=fr`);
    addHreflang('x-default', `${baseUrl}#/${currentPath}?lang=uk`);

  }, [i18n.language, page, customTitle, customDescription, customKeywords]);

  return null;
};