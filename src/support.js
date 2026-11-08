export const supportResources = [
  {
    id: "police-cyber-report",
    category: "cybercrime",
    audience: ["individuals"],
    kind: { en: "Official reporting channel", fr: "Canal officiel de signalement" },
    title: {
      en: "National Police cybercrime reporting platform",
      fr: "Plateforme de signalement des infractions cybercriminelles de la Police nationale"
    },
    provider: { en: "Division spéciale de lutte contre la cybercriminalité (DSC) · Police nationale", fr: "Division spéciale de lutte contre la cybercriminalité (DSC) · Police nationale" },
    description: {
      en: "Official online entry point for reporting suspected offences linked to information and communication technologies. The Police described the platform as a way to make an initial online report and then complete or confirm a formal complaint through the competent service.",
      fr: "Point d’entrée officiel en ligne pour signaler des infractions présumées liées aux technologies de l’information et de la communication. La Police a présenté la plateforme comme un moyen d’effectuer un premier signalement en ligne, puis de déposer ou confirmer une plainte formelle auprès du service compétent."
    },
    contactLabel: { en: "Open the reporting platform", fr: "Accéder à la plateforme de signalement" },
    url: "https://signalementcyber.dgpn.sn/",
    phone: null,
    email: null,
    coverage: { en: "National · online", fr: "National · en ligne" },
    note: {
      en: "An initial online report is not necessarily the same as a formal complaint. Follow the platform's current instructions and confirm any next steps with the Police. Safe Space does not submit reports on your behalf.",
      fr: "Un premier signalement en ligne n’équivaut pas nécessairement au dépôt d’une plainte formelle. Suivez les instructions actuelles de la plateforme et confirmez les étapes suivantes auprès de la Police. Safe Space n’effectue aucun signalement à votre place."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Launch and purpose documented by APS on 12 February 2026; live service not tested by Safe Space.", fr: "Lancement et fonction documentés par l’APS le 12 février 2026 ; fonctionnement en direct non testé par Safe Space." },
    sources: [
      { label: "Agence de Presse Sénégalaise (APS), 12 February 2026", url: "https://aps.sn/une-plateforme-numerique-de-signalement-des-infractions-cybercriminelles-officiellement-lancee/" }
    ]
  },
  {
    id: "dcssi-jokkocyber",
    category: "cyberincident",
    audience: ["individuals", "organisations"],
    kind: { en: "Official cybersecurity incident channel", fr: "Canal officiel de signalement des incidents de cybersécurité" },
    title: {
      en: "Jokkocyber · National cybersecurity incident portal",
      fr: "Jokkocyber · Guichet national de signalement des incidents de cybersécurité"
    },
    provider: { en: "Direction générale du Chiffre et de la Sécurité des Systèmes d’Information (DCSSI)", fr: "Direction générale du Chiffre et de la Sécurité des Systèmes d’Information (DCSSI)" },
    description: {
      en: "The DCSSI announced this national portal on 2 November 2026 as an entry point for reporting cybersecurity incidents and accessing DCSSI services. It is especially relevant to technical incidents such as compromised systems or cyberattacks.",
      fr: "La DCSSI a annoncé ce portail national le 2 novembre 2026 comme point d’entrée pour signaler des incidents de cybersécurité et accéder à ses services. Il concerne notamment les incidents techniques tels que les systèmes compromis ou les cyberattaques."
    },
    contactLabel: { en: "Open Jokkocyber portal", fr: "Ouvrir le portail Jokkocyber" },
    url: "https://jokkocyber-dcssi.sn/frontoffice",
    phone: "+221338808347",
    email: "contact.dcssi@stcc-ssi.sn",
    coverage: { en: "National · online and institutional contact", fr: "National · en ligne et contact institutionnel" },
    note: {
      en: "This is a cybersecurity incident route, not a substitute for reporting an alleged crime to the Police. Do not send passwords or sensitive evidence by ordinary email. Portal operation has not been independently tested by Safe Space.",
      fr: "Il s’agit d’un canal pour les incidents de cybersécurité, et non d’un substitut au signalement d’une infraction présumée auprès de la Police. N’envoyez pas de mots de passe ni de preuves sensibles par courrier électronique ordinaire. Le fonctionnement du portail n’a pas été testé de manière indépendante par Safe Space."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Portal announcement and institutional contact details published by the DCSSI; submission flow not tested.", fr: "Annonce du portail et coordonnées institutionnelles publiées par la DCSSI ; procédure de soumission non testée." },
    sources: [
      { label: "DCSSI, portal announcement, 2 November 2026", url: "https://stcc-ssi.sn/la-dcssi-lance-son-nouveau-portail-numerique/" },
      { label: "DCSSI official contact page", url: "https://stcc-ssi.sn/contacts/" }
    ]
  },
  {
    id: "cdp-data-protection",
    category: "privacy",
    audience: ["individuals", "organisations"],
    kind: { en: "Data protection regulator", fr: "Autorité de protection des données" },
    title: {
      en: "Commission de Protection des Données Personnelles (CDP)",
      fr: "Commission de Protection des Données Personnelles (CDP)"
    },
    provider: { en: "Senegal's personal data protection authority", fr: "Autorité sénégalaise de protection des données personnelles" },
    description: {
      en: "The CDP provides information about personal-data rights and accepts complaints or reports concerning the processing of personal data. This is relevant when the concern involves misuse, unlawful processing or a personal-data incident.",
      fr: "La CDP informe sur les droits relatifs aux données personnelles et reçoit des plaintes ou signalements concernant leur traitement. Elle est pertinente lorsque la situation concerne une utilisation abusive, un traitement illicite ou un incident touchant des données personnelles."
    },
    contactLabel: { en: "Visit the CDP website", fr: "Visiter le site de la CDP" },
    url: "https://www.cdp.sn/",
    phone: "+221338597030",
    email: "contact.cdp@cdp.sn",
    coverage: { en: "National · Dakar office and online information", fr: "National · bureau à Dakar et informations en ligne" },
    note: {
      en: "The CDP handles personal-data protection matters. It is not an emergency service and does not replace Police reporting for threats or other suspected crimes. Check current procedures on the CDP website.",
      fr: "La CDP traite les questions relatives à la protection des données personnelles. Ce n’est pas un service d’urgence et elle ne remplace pas un signalement à la Police en cas de menaces ou d’autres infractions présumées. Consultez les procédures actuelles sur son site."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Website, complaint pathway, telephone and email listed on the CDP's official site; phone not called by Safe Space.", fr: "Site, procédure de plainte, téléphone et courriel publiés sur le site officiel de la CDP ; numéro non appelé par Safe Space." },
    sources: [
      { label: "CDP official contact page", url: "https://www.cdp.sn/contact" },
      { label: "CDP complaint and report page", url: "https://www.cdp.sn/plainte" }
    ]
  },
  {
    id: "ginddi-116",
    category: "child",
    audience: ["individuals"],
    kind: { en: "Child protection listening and information", fr: "Écoute et information pour la protection de l’enfance" },
    title: {
      en: "Centre GINDDI · Allo 116",
      fr: "Centre GINDDI · Allo 116"
    },
    provider: { en: "Child protection service · Senegal", fr: "Service de protection de l’enfance · Sénégal" },
    description: {
      en: "A listening, information and assistance entry point for children and parents. Child Helpline International describes Allo 116 as offering listening, psychological assistance and information, with phone and in-person options.",
      fr: "Un point d’écoute, d’information et d’assistance pour les enfants et les parents. Child Helpline International décrit Allo 116 comme un service d’écoute, d’assistance psychologique et d’information, avec des possibilités de contact téléphonique et d’accueil."
    },
    contactLabel: { en: "Call 116", fr: "Appeler le 116" },
    url: "https://childhelplineinternational.org/senegal-centre-ginddi-allo-116/",
    phone: "116",
    email: null,
    coverage: { en: "Senegal · children and parents", fr: "Sénégal · enfants et parents" },
    note: {
      en: "The published operating-hours information is not consistent across the sources reviewed, and Safe Space has not test-called the number. Confirm availability when calling. If a child is in immediate danger, contact local emergency services or go to the nearest Police, Gendarmerie or health service.",
      fr: "Les informations publiées sur les horaires ne sont pas cohérentes entre les sources consultées et Safe Space n’a pas testé le numéro. Vérifiez la disponibilité lors de l’appel. Si un enfant est en danger immédiat, contactez les services d’urgence locaux ou rendez-vous au service de Police, de Gendarmerie ou de santé le plus proche."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Number and service description listed by Child Helpline International and a Senegal child-protection information directory; call and current hours not verified.", fr: "Numéro et description publiés par Child Helpline International et un annuaire sénégalais d’information sur la protection de l’enfance ; appel et horaires actuels non vérifiés." },
    sources: [
      { label: "Child Helpline International · Centre GINDDI – Allo 116", url: "https://childhelplineinternational.org/senegal-centre-ginddi-allo-116/" },
      { label: "Penser l’Enfance au Sénégal · GINDDI and 116", url: "https://www.penserlenfance.sn/ressources/institutions-et-orientation/ginddi" }
    ]
  },
  {
    id: "ajs-legal",
    category: "legal",
    audience: ["individuals", "organisations"],
    kind: { en: "Legal information and orientation", fr: "Information et orientation juridiques" },
    title: {
      en: "Association des Juristes Sénégalaises (AJS) · Boutiques de droit",
      fr: "Association des Juristes Sénégalaises (AJS) · Boutiques de droit"
    },
    provider: { en: "Independent Senegalese association of women jurists", fr: "Association sénégalaise indépendante de juristes" },
    description: {
      en: "AJS promotes and defends human rights, particularly the rights of women and children. Its Boutiques de droit are described in AJS publications as local listening, information, orientation and legal-assistance spaces.",
      fr: "L’AJS promeut et défend les droits humains, notamment ceux des femmes et des enfants. Ses Boutiques de droit sont décrites dans les publications de l’association comme des espaces de proximité d’écoute, d’information, d’orientation et d’assistance juridique."
    },
    contactLabel: { en: "Visit the AJS website", fr: "Visiter le site de l’AJS" },
    url: "https://femmesjuristes.org/",
    phone: null,
    email: null,
    coverage: { en: "Several regions of Senegal; current locations and availability must be confirmed", fr: "Plusieurs régions du Sénégal ; lieux et disponibilité actuels à confirmer" },
    note: {
      en: "Contact AJS through its official website to confirm the nearest active Boutique de droit, opening hours, eligibility and available assistance. Older publications contain contact numbers that have not been confirmed as current, so they are not reproduced here.",
      fr: "Contactez l’AJS via son site officiel pour confirmer la Boutique de droit active la plus proche, les horaires, les conditions d’accès et l’assistance disponible. Des publications anciennes contiennent des numéros qui n’ont pas été confirmés comme actuels ; ils ne sont donc pas reproduits ici."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Organisation and service model supported by AJS publications and a Senegal child-protection directory; current phone contacts and office availability not verified.", fr: "Organisation et dispositif documentés par les publications de l’AJS et un annuaire sénégalais de protection de l’enfance ; téléphones et disponibilité actuels non vérifiés." },
    sources: [
      { label: "AJS official website", url: "https://femmesjuristes.org/" },
      { label: "AJS study on gender-based violence during COVID-19 (organisation publication)", url: "https://femmesjuristes.org/wp-content/uploads/2021/01/Rapport_etude-des-VBG-en-cette-pe%CC%81riode-de-COVID-AJS_VERSION-FINALE_NOVEMBRE1.pdf" },
      { label: "Penser l’Enfance au Sénégal · AJS", url: "https://www.penserlenfance.sn/ressources/institutions-et-orientation/institution-ajs" }
    ]
  },
  {
    id: "emergency-services",
    category: "emergency",
    audience: ["individuals"],
    kind: { en: "Official emergency contacts", fr: "Contacts officiels d’urgence" },
    title: {
      en: "Police and Fire & Rescue emergency services",
      fr: "Services d’urgence de la Police et des Sapeurs-pompiers"
    },
    provider: { en: "Ministry of the Interior and Public Security · Senegal", fr: "Ministère de l’Intérieur et de la Sécurité publique · Sénégal" },
    description: {
      en: "The Ministry of the Interior publishes Police Secours 17 and Sapeurs-Pompiers 18 as 24-hour emergency numbers.",
      fr: "Le Ministère de l’Intérieur publie les numéros Police Secours 17 et Sapeurs-pompiers 18 comme numéros d’urgence disponibles 24 h/24."
    },
    contactLabel: { en: "View official emergency information", fr: "Voir les informations officielles sur les urgences" },
    url: "https://www.interieur.gouv.sn/contact",
    phone: null,
    emergencyNumbers: [{ label: { en: "Police", fr: "Police" }, number: "17" }, { label: { en: "Fire & rescue", fr: "Sapeurs-pompiers" }, number: "18" }],
    email: null,
    coverage: { en: "National · emergencies", fr: "National · urgences" },
    note: {
      en: "Use these numbers for immediate emergencies. Safe Space cannot contact emergency services or monitor a visitor's safety.",
      fr: "Utilisez ces numéros en cas d’urgence immédiate. Safe Space ne peut pas contacter les services d’urgence ni surveiller la sécurité d’un visiteur."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Numbers and 24-hour emergency designation published by the Ministry of the Interior; calls not test-made.", fr: "Numéros et disponibilité d’urgence 24 h/24 publiés par le Ministère de l’Intérieur ; appels non testés." },
    sources: [
      { label: "Ministry of the Interior · Contact and emergency numbers", url: "https://www.interieur.gouv.sn/contact" }
    ]
  }
];

export const supportCategories = [
  { id: "all", label: { en: "All resources", fr: "Toutes les ressources" } },
  { id: "cybercrime", label: { en: "Cybercrime reporting", fr: "Signalement de cybercriminalité" } },
  { id: "cyberincident", label: { en: "Cybersecurity incidents", fr: "Incidents de cybersécurité" } },
  { id: "privacy", label: { en: "Data protection", fr: "Protection des données" } },
  { id: "child", label: { en: "Child protection", fr: "Protection de l’enfance" } },
  { id: "legal", label: { en: "Legal information", fr: "Information juridique" } },
  { id: "emergency", label: { en: "Emergency", fr: "Urgence" } }
];
