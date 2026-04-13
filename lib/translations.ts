export type Lang = 'ar' | 'fr' | 'en';

export interface ImpactCard { icon: string; title: string; desc: string; }
export interface Step { number: string; title: string; desc: string; }
export interface TrustItem { icon: string; title: string; desc: string; }
export interface CguSection { title: string; content: string; }

export interface Translation {
  nav: {
    brand: string;
    menuAriaLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaAppStore: string;
    ctaGooglePlay: string;
    comingSoon: string;
    ctaTagline: string;
  };
  impact: {
    title: string;
    cards: ImpactCard[];
  };
  howItWorks: {
    title: string;
    steps: Step[];
  };
  trust: {
    title: string;
    items: TrustItem[];
  };
  footer: {
    tagline: string;
    links: { cgu: string; contact: string; admin: string };
    copyright: string;
  };
  cgu: {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: CguSection[];
  };
  admin: {
    reserved: string;
    button: string;
  };
}

export const translations: Record<Lang, Translation> = {
  // ─────────────────────────────────────────────── ARABIC
  ar: {
    nav: { brand: 'خدني معك', menuAriaLabel: 'القائمة' },
    hero: {
      badge: '🇱🇧 تطبيق لبناني ١٠٠٪',
      titleLine1: 'خدني معك',
      titleLine2: 'وصّل وانبسط',
      subtitle: 'شارك رحلتك مع لبنانيين موثوقين — وفّر مصاريفك وتعرّف على ناس جديدة',
      ctaAppStore: 'App Store',
      ctaGooglePlay: 'Google Play',
      comingSoon: 'قريباً',
      ctaTagline: '⭐ الإصدار الأول قريباً — سجّل اهتمامك',
    },
    impact: {
      title: 'لشو خدني معك؟',
      cards: [
        {
          icon: '🚗',
          title: 'الاختناقات المرورية',
          desc: 'بيروت مُصنَّفة من أكثر مدن العالم ازدحاماً. كل كوفوتوراج يعني سيارة أقل على الطريق.',
        },
        {
          icon: '💰',
          title: 'توفير المال',
          desc: 'شاركوا مصاريف البنزين في ظل الأزمة الاقتصادية. كل رحلة مشتركة تخفف الأعباء.',
        },
        {
          icon: '🤝',
          title: 'التضامن',
          desc: 'السفر بين اللبنانيين يُعيد بناء الروابط الاجتماعية. الثقة أولاً.',
        },
      ],
    },
    howItWorks: {
      title: 'كيف بتشتغل؟',
      steps: [
        {
          number: '01',
          title: 'سجّل حسابك',
          desc: 'أنشئ حسابك برقمك اللبناني وأتمّ التحقق من هويتك بخطوات بسيطة.',
        },
        {
          number: '02',
          title: 'ابحث أو اعرض رحلة',
          desc: 'ابحث عن كوفوتوراج يناسبك أو انشر رحلتك في أقل من دقيقتين.',
        },
        {
          number: '03',
          title: 'سافروا معاً',
          desc: 'تواصل مع السائق عبر واتساب وانطلقوا معاً — بسيطة ومضمونة.',
        },
      ],
    },
    trust: {
      title: 'أمان وثقة',
      items: [
        {
          icon: '🔒',
          title: 'التحقق من الهوية KYC',
          desc: 'كل سائق يُثبت هويته ورخصة قيادته قبل أي رحلة.',
        },
        {
          icon: '📱',
          title: 'رمز SMS',
          desc: 'دخول آمن عبر رمز SMS على رقمك اللبناني.',
        },
        {
          icon: '⭐',
          title: 'نظام التقييم',
          desc: 'تقييمات وآراء حقيقية بعد كل رحلة.',
        },
        {
          icon: '✅',
          title: 'شارة الموثوقية',
          desc: 'الملفات الشخصية الموثقة معروفة بنظرة واحدة.',
        },
      ],
    },
    footer: {
      tagline: 'وصّل وانبسط — شارك رحلتك',
      links: { cgu: 'شروط الاستخدام', contact: 'اتصل بنا', admin: 'إدارة' },
      copyright: '© 2026 Khedne Ma3ak. جميع الحقوق محفوظة.',
    },
    cgu: {
      title: 'شروط الاستخدام',
      lastUpdated: 'الإصدار 1.0 — ساري المفعول اعتباراً من 1 يناير 2026',
      intro: 'فيما يلي ملخص لشروط استخدام منصة خدني معك. النص الكامل والمرجعي القانوني متاح باللغة الفرنسية.',
      sections: [
        {
          title: '1. تعريف الناشر',
          content: 'منصة خدني معك يُشغّلها مقاول ذاتي (auto-entrepreneur) مسجّل في فرنسا. للتواصل: contact@khedne.app',
        },
        {
          title: '2. طبيعة الخدمة',
          content: 'خدني معك هي منصة وساطة تقنية بحتة بين السائقين والركاب. المنصة ليست شركة نقل ولا سيارة أجرة. العقد يُبرم مباشرةً بين المستخدمين دون تدخّل المنصة كطرف.',
        },
        {
          title: '3. التسجيل والتحقق من الهوية',
          content: 'يجب توفير رقم هاتف لبناني صحيح وإتمام التحقق من الهوية (KYC). يتحمل المستخدم مسؤولية دقة المعلومات المقدمة. أي معلومة مزوّرة تستوجب الإيقاف الفوري.',
        },
        {
          title: '4. التزامات المستخدمين',
          content: 'يلتزم السائقون بامتلاك رخصة قيادة سارية، وتأمين شامل، وسيارة في حالة جيدة، وعدم تجاوز طاقة المركبة. يلتزم الركاب بالحضور في الوقت والمكان المتفق عليهما واحترام السائق.',
        },
        {
          title: '5. محدودية مسؤولية المنصة',
          content: 'لا تتحمل المنصة أي مسؤولية عن الحوادث أو الأضرار أثناء الرحلات. مسؤولية النقل تقع على عاتق السائق وشركة تأمينه.',
        },
        {
          title: '6. الدفع',
          content: 'في الإصدار الأول (v1)، تتم تسوية تكاليف الوقود نقداً بشكل مباشر بين الأطراف. لا تتقاضى المنصة أي عمولة.',
        },
        {
          title: '7. حماية البيانات الشخصية',
          content: 'تتم معالجة البيانات وفقاً للائحة الأوروبية RGPD. يحق لك الوصول إلى بياناتك وتصحيحها وحذفها عبر contact@khedne.app.',
        },
        {
          title: '8. القانون المطبق',
          content: 'تخضع هذه الشروط للقانون الفرنسي. في حال النزاع، تختص المحاكم الفرنسية.',
        },
        {
          title: '9. التواصل وحل النزاعات',
          content: 'لأي استفسار أو شكوى: contact@khedne.app. نلتزم بالرد خلال 30 يوم عمل.',
        },
      ],
    },
    admin: {
      reserved: 'وصول مخصص لفريق Khedne Ma3ak',
      button: 'الوصول إلى منصة الإدارة',
    },
  },

  // ─────────────────────────────────────────────── FRENCH
  fr: {
    nav: { brand: 'Khedne Ma3ak', menuAriaLabel: 'Menu' },
    hero: {
      badge: '🇱🇧 100% Libanais',
      titleLine1: 'Voyagez',
      titleLine2: 'ensemble',
      subtitle: 'Partagez vos trajets avec des Libanais de confiance — économisez et créez du lien',
      ctaAppStore: 'App Store',
      ctaGooglePlay: 'Google Play',
      comingSoon: 'Bientôt',
      ctaTagline: '⭐ Première version bientôt — manifestez votre intérêt',
    },
    impact: {
      title: 'Pourquoi Khedne Ma3ak ?',
      cards: [
        {
          icon: '🚗',
          title: 'Embouteillages',
          desc: 'Beyrouth classée parmi les villes les plus embouteillées au monde. Chaque covoiturage = une voiture de moins sur la route.',
        },
        {
          icon: '💰',
          title: 'Économies',
          desc: 'Partagez les frais de carburant dans un contexte économique difficile. Chaque trajet partagé allège les dépenses.',
        },
        {
          icon: '🤝',
          title: 'Solidarité',
          desc: "Voyager entre Libanais, c'est recréer du lien social. La confiance avant tout.",
        },
      ],
    },
    howItWorks: {
      title: 'Comment ça marche ?',
      steps: [
        {
          number: '01',
          title: 'Inscris-toi',
          desc: 'Crée ton compte avec ton numéro libanais et vérifie ton identité en quelques étapes simples.',
        },
        {
          number: '02',
          title: 'Trouve ou propose un trajet',
          desc: 'Cherche un covoiturage qui te convient ou publie le tien en moins de 2 minutes.',
        },
        {
          number: '03',
          title: 'Voyage ensemble',
          desc: 'Contacte le conducteur via WhatsApp et partez ensemble — simple et fiable.',
        },
      ],
    },
    trust: {
      title: 'Confiance & Sécurité',
      items: [
        {
          icon: '🔒',
          title: 'Vérification KYC',
          desc: 'Chaque conducteur vérifie son identité et son permis de conduire avant tout trajet.',
        },
        {
          icon: '📱',
          title: 'OTP SMS',
          desc: 'Connexion sécurisée par code SMS sur ton numéro libanais.',
        },
        {
          icon: '⭐',
          title: 'Système de notation',
          desc: 'Notes et avis après chaque trajet pour une communauté de confiance.',
        },
        {
          icon: '✅',
          title: 'Badge vérifié',
          desc: "Profils vérifiés identifiables en un coup d'œil.",
        },
      ],
    },
    footer: {
      tagline: 'وصّل وانبسط — شارك رحلتك',
      links: { cgu: 'CGU', contact: 'Contact', admin: 'Admin' },
      copyright: '© 2026 Khedne Ma3ak. Tous droits réservés.',
    },
    cgu: {
      title: "Conditions Générales d'Utilisation",
      lastUpdated: 'Version 1.0 — En vigueur au 1er janvier 2026',
      intro:
        "Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation de la plateforme Khedne Ma3ak accessible via l'application mobile et le site web khedne.app. En créant un compte ou en utilisant le Service, l'utilisateur accepte sans réserve les présentes CGU.",
      sections: [
        {
          title: "Article 1 — Identification de l'éditeur",
          content: `La plateforme Khedne Ma3ak (ci-après « la Plateforme » ou « le Service ») est éditée par [Prénom NOM], auto-entrepreneur immatriculé en France sous le numéro SIRET [NUMÉRO SIRET], dont l'adresse professionnelle est [ADRESSE], France.

Directeur de la publication : [Prénom NOM]
Contact : contact@khedne.app`,
        },
        {
          title: 'Article 2 — Nature du service',
          content: `Khedne Ma3ak est une plateforme numérique de mise en relation entre des conducteurs particuliers disposant de places disponibles dans leur véhicule personnel et des passagers souhaitant effectuer un trajet en commun (ci-après le « Covoiturage »), à titre non lucratif ou dans la stricte limite du partage des frais réels.

La Plateforme intervient exclusivement en qualité d'intermédiaire technique. Elle n'est en aucun cas un transporteur public, un service de taxi, ou une société de transport de personnes rémunérée. L'éditeur de la Plateforme n'est pas partie au contrat de transport librement conclu entre le conducteur et le(s) passager(s).

La Plateforme ne garantit ni la disponibilité permanente de conducteurs ou de passagers, ni la réalisation effective des trajets proposés.`,
        },
        {
          title: "Article 3 — Inscription et vérification d'identité (KYC)",
          content: `3.1 Conditions d'accès
Pour accéder aux fonctionnalités de la Plateforme, l'utilisateur doit créer un compte personnel en fournissant un numéro de téléphone libanais valide et actif, puis valider son inscription par un code OTP (One Time Password) envoyé par SMS.

3.2 Vérification des conducteurs (KYC)
Tout utilisateur souhaitant proposer des trajets en qualité de conducteur est soumis à un processus de vérification d'identité (Know Your Customer – KYC) comprenant :
— La fourniture d'une pièce d'identité officielle en cours de validité (carte d'identité ou passeport) ;
— La fourniture d'un permis de conduire en cours de validité ;
— La fourniture d'une photographie du véhicule utilisé pour le covoiturage.

3.3 Responsabilité de l'utilisateur
L'utilisateur garantit l'exactitude, la sincérité et l'authenticité des informations et documents transmis. Toute déclaration inexacte, incomplète ou frauduleuse entraîne la suspension ou la résiliation immédiate du compte, sans préjudice des poursuites légales éventuelles.`,
        },
        {
          title: 'Article 4 — Obligations des utilisateurs',
          content: `4.1 Obligations des conducteurs
Le conducteur s'engage à :
— Être titulaire d'un permis de conduire valide au regard du droit libanais ;
— Disposer d'une assurance automobile valide couvrant l'usage du véhicule, incluant si possible une couverture pour les passagers transportés dans le cadre du covoiturage ;
— Maintenir son véhicule en bon état de fonctionnement et de sécurité ;
— N'accepter de passagers que dans la limite des places autorisées par le certificat d'immatriculation ;
— Ne percevoir des passagers que le remboursement des frais réels de transport (carburant, péages), à l'exclusion de tout bénéfice ou rémunération ;
— Respecter le Code de la route libanais et conduire en toute sécurité.

4.2 Obligations des passagers
Le passager s'engage à :
— Se présenter à l'heure et au lieu de prise en charge convenus ;
— Respecter les règles de courtoisie, de sécurité et les consignes du conducteur ;
— Honorer les frais convenus avec le conducteur ;
— Signaler à la Plateforme tout comportement inapproprié, dangereux ou frauduleux.

4.3 Obligations générales
Tout utilisateur s'interdit notamment : d'utiliser la Plateforme à des fins commerciales ou lucratives ; de publier des contenus illicites ou discriminatoires ; de tenter de pirater le système informatique de la Plateforme ; de harceler ou menacer d'autres utilisateurs.`,
        },
        {
          title: 'Article 5 — Responsabilité limitée de la plateforme',
          content: `5.1 La Plateforme ne garantit pas la disponibilité permanente et ininterrompue du Service. Des interruptions techniques, des opérations de maintenance ou des cas de force majeure peuvent entraîner des indisponibilités temporaires sans engager la responsabilité de l'éditeur.

5.2 La Plateforme est un simple intermédiaire de mise en relation. L'éditeur décline toute responsabilité en cas d'accident, de dommage corporel ou matériel, de perte ou de vol survenant lors d'un trajet organisé via la Plateforme. La responsabilité incombe exclusivement au conducteur et à son assurance.

5.3 La Plateforme ne vérifie pas en temps réel la validité des documents soumis lors du processus KYC. Les utilisateurs interagissent entre eux sous leur propre responsabilité.

5.4 En toute hypothèse, la responsabilité de l'éditeur ne saurait excéder les montants éventuellement versés par l'utilisateur à la Plateforme.`,
        },
        {
          title: 'Article 6 — Paiement',
          content: `Dans sa version actuelle (v1), la Plateforme ne traite aucun paiement électronique. Le partage des frais de carburant se règle exclusivement en espèces (cash), directement entre le conducteur et le(s) passager(s), selon les modalités librement convenues entre eux avant le trajet.

L'éditeur de la Plateforme ne perçoit aucune commission, rémunération ou contrepartie sur les trajets réalisés. L'éditeur se réserve le droit d'introduire des fonctionnalités de paiement électronique dans de futures versions du Service, avec information préalable des utilisateurs.`,
        },
        {
          title: 'Article 7 — Protection des données personnelles (RGPD)',
          content: `7.1 Responsable du traitement
L'éditeur de la Plateforme agit en qualité de responsable du traitement des données personnelles collectées dans le cadre du Service.

7.2 Données collectées
— Données d'identification : nom, prénom, numéro de téléphone, photographie ;
— Données de vérification KYC : pièce d'identité, permis de conduire, photographie du véhicule ;
— Données de trajet : origines, destinations, historique ;
— Données de notation : notes et avis laissés après les trajets.

7.3 Bases légales
Les traitements sont fondés sur : l'exécution du contrat (fourniture du Service) ; le respect des obligations légales (KYC) ; l'intérêt légitime de l'éditeur (amélioration du Service, prévention des fraudes).

7.4 Durée de conservation
Les données sont conservées pendant toute la durée de la relation contractuelle et jusqu'à 3 ans après la clôture du compte.

7.5 Droits des utilisateurs
Conformément au RGPD et à la loi Informatique et Libertés, chaque utilisateur dispose des droits d'accès, de rectification, d'effacement, de portabilité, de limitation et d'opposition. Ces droits s'exercent par email à contact@khedne.app, en joignant une copie d'un titre d'identité. L'éditeur s'engage à répondre dans un délai d'un (1) mois.

7.6 Réclamation
En cas de réclamation non résolue, l'utilisateur peut saisir la CNIL : www.cnil.fr`,
        },
        {
          title: 'Article 8 — Droit applicable et juridiction compétente',
          content: `Les présentes CGU sont régies et interprétées conformément au droit français. En cas de litige relatif à l'interprétation, l'exécution ou la résiliation des présentes CGU, et à défaut de résolution amiable, les juridictions françaises seront seules compétentes.

Cette clause s'applique sans préjudice des dispositions d'ordre public protégeant les consommateurs dans leur pays de résidence.`,
        },
        {
          title: 'Article 9 — Contact et résolution des litiges',
          content: `Pour toute question relative aux présentes CGU, à l'utilisation du Service, ou pour formuler une réclamation :

Email : contact@khedne.app

En cas de litige, l'utilisateur est invité à contacter l'éditeur par email afin de rechercher une solution amiable. L'éditeur s'engage à accuser réception de toute réclamation dans un délai de 72 heures et à proposer une réponse dans un délai de trente (30) jours calendaires.

À défaut de résolution amiable, l'utilisateur pourra saisir la juridiction compétente conformément à l'article 8.`,
        },
      ],
    },
    admin: {
      reserved: "Accès réservé à l'équipe Khedne Ma3ak",
      button: 'Accéder à la plateforme admin',
    },
  },

  // ─────────────────────────────────────────────── ENGLISH
  en: {
    nav: { brand: 'Khedne Ma3ak', menuAriaLabel: 'Menu' },
    hero: {
      badge: '🇱🇧 100% Lebanese',
      titleLine1: 'Share the',
      titleLine2: 'road',
      subtitle: 'Share rides with trusted Lebanese — save money and meet new people',
      ctaAppStore: 'App Store',
      ctaGooglePlay: 'Google Play',
      comingSoon: 'Coming Soon',
      ctaTagline: '⭐ First version coming soon — show your interest',
    },
    impact: {
      title: 'Why Khedne Ma3ak?',
      cards: [
        {
          icon: '🚗',
          title: 'Traffic Jams',
          desc: "Beirut ranks among the world's most congested cities. Each carpool = one less car on the road.",
        },
        {
          icon: '💰',
          title: 'Save Money',
          desc: 'Share fuel costs in a tough economic climate. Every shared ride lightens the financial burden.',
        },
        {
          icon: '🤝',
          title: 'Solidarity',
          desc: 'Traveling together as Lebanese rebuilds social bonds. Trust comes first.',
        },
      ],
    },
    howItWorks: {
      title: 'How does it work?',
      steps: [
        {
          number: '01',
          title: 'Sign up',
          desc: 'Create your account with your Lebanese number and verify your identity in a few simple steps.',
        },
        {
          number: '02',
          title: 'Find or offer a ride',
          desc: 'Search for a carpool that suits you or post yours in under 2 minutes.',
        },
        {
          number: '03',
          title: 'Ride together',
          desc: 'Contact the driver via WhatsApp and hit the road together — simple and reliable.',
        },
      ],
    },
    trust: {
      title: 'Trust & Safety',
      items: [
        {
          icon: '🔒',
          title: 'KYC Verification',
          desc: "Every driver verifies their identity and driver's license before any ride.",
        },
        {
          icon: '📱',
          title: 'SMS OTP',
          desc: 'Secure login with SMS code on your Lebanese number.',
        },
        {
          icon: '⭐',
          title: 'Rating System',
          desc: 'Real ratings and reviews after every ride.',
        },
        {
          icon: '✅',
          title: 'Verified Badge',
          desc: 'Verified profiles identifiable at a glance.',
        },
      ],
    },
    footer: {
      tagline: 'وصّل وانبسط — شارك رحلتك',
      links: { cgu: 'Terms', contact: 'Contact', admin: 'Admin' },
      copyright: '© 2026 Khedne Ma3ak. All rights reserved.',
    },
    cgu: {
      title: 'Terms of Service',
      lastUpdated: 'Version 1.0 — Effective January 1, 2026',
      intro:
        'The following is a summary of the Khedne Ma3ak Terms of Service. The full legally binding text is available in French.',
      sections: [
        {
          title: '1. Publisher Identification',
          content:
            'Khedne Ma3ak is operated by a sole trader (auto-entrepreneur) registered in France. Contact: contact@khedne.app',
        },
        {
          title: '2. Nature of the Service',
          content:
            'Khedne Ma3ak is a purely technical intermediary platform connecting drivers with available seats and passengers seeking shared rides. The platform is not a transport company or taxi service. The transport contract is concluded directly between users, with no involvement from the platform as a party.',
        },
        {
          title: '3. Registration & Identity Verification',
          content:
            'A valid Lebanese phone number is required. Drivers must complete a KYC (Know Your Customer) process including a valid ID, driver\'s license, and vehicle photo. Users are responsible for the accuracy of all information provided. False information results in immediate account suspension.',
        },
        {
          title: '4. User Obligations',
          content:
            "Drivers must hold a valid license, appropriate insurance, and a roadworthy vehicle. They may only collect genuine cost-sharing contributions, not profit. Passengers must be on time, treat drivers respectfully, and report any inappropriate behavior. All users must use the platform lawfully and in good faith.",
        },
        {
          title: '5. Limited Platform Liability',
          content:
            'The platform is a matchmaking intermediary only. The editor accepts no liability for accidents, injuries, losses, or damages occurring during rides. Liability rests with the driver and their insurer. Service availability is not guaranteed.',
        },
        {
          title: '6. Payment',
          content:
            'In v1, all cost-sharing is handled directly in cash between users. The platform charges no commission. Electronic payment features may be introduced in future versions with prior user notice.',
        },
        {
          title: '7. Personal Data Protection (GDPR)',
          content:
            'Data is processed in compliance with EU Regulation 2016/679 (GDPR). Collected data includes identification, KYC documents, ride history, and ratings. Users have the right to access, rectify, erase, port, restrict, or object to their data by emailing contact@khedne.app. Unresolved complaints may be escalated to the CNIL.',
        },
        {
          title: '8. Governing Law',
          content:
            'These Terms are governed by French law. In case of dispute, French courts have exclusive jurisdiction.',
        },
        {
          title: '9. Contact & Dispute Resolution',
          content:
            'For any query or complaint: contact@khedne.app. We commit to acknowledging complaints within 72 hours and responding within 30 calendar days.',
        },
      ],
    },
    admin: {
      reserved: 'Reserved for the Khedne Ma3ak team',
      button: 'Access admin platform',
    },
  },
};
