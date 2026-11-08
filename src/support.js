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
    accessMode: "national-online",
    regions: [],
    locationNote: { en: "Online reporting route intended for use nationally. No regional physical office address is listed in this record.", fr: "Canal de signalement en ligne destiné à un usage national. Aucune adresse de bureau régional n’est indiquée dans cette fiche." },
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
    accessMode: "national-online",
    regions: [],
    locationNote: { en: "National online incident-reporting portal. The institutional contact is listed separately; this record does not identify a walk-in regional office.", fr: "Portail national en ligne de signalement des incidents. Le contact institutionnel est indiqué séparément ; cette fiche ne confirme pas de bureau régional accueillant le public." },
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
    accessMode: "national-online",
    regions: ["dakar"],
    locationNote: { en: "The CDP publishes a physical office address in Dakar and provides information and a complaint pathway online. The Dakar office address is confirmed; this record does not imply a local office in other regions.", fr: "La CDP publie une adresse de bureau à Dakar et propose des informations ainsi qu’une procédure de plainte en ligne. L’adresse du bureau de Dakar est confirmée ; cette fiche ne signifie pas qu’il existe un bureau local dans les autres régions." },
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
    accessMode: "national-phone",
    regions: [],
    locationNote: { en: "Telephone helpline entry point: 116. Child Helpline International also lists in-person counselling, but Safe Space has not confirmed a current public-facing address or regional office locations.", fr: "Point d’entrée téléphonique : 116. Child Helpline International mentionne également un accompagnement en présentiel, mais Safe Space n’a pas confirmé d’adresse d’accueil actuelle ni de bureaux régionaux." },
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
    coverage: { en: "Dakar, Thiès, Louga, Ziguinchor, Sédhiou, Kolda and Kédougou · presence reported", fr: "Dakar, Thiès, Louga, Ziguinchor, Sédhiou, Kolda et Kédougou · présence signalée" },
    accessMode: "regional-presence-reported",
    regions: ["dakar","thies","louga","ziguinchor","sedhiou","kolda","kedougou"],
    locationNote: { en: "The Senegalese Press Agency reported AJS service presence in these seven regions on 24 October 2026. Exact active Boutique de droit addresses, opening hours and current availability must be confirmed directly with AJS before travelling.", fr: "L’Agence de presse sénégalaise a signalé la présence de services de l’AJS dans ces sept régions le 24 octobre 2026. Les adresses exactes des Boutiques de droit actives, les horaires et la disponibilité actuelle doivent être confirmés directement auprès de l’AJS avant tout déplacement." },
    note: {
      en: "Contact AJS through its official website to confirm the nearest active Boutique de droit, opening hours, eligibility and available assistance. Older publications contain contact numbers that have not been confirmed as current, so they are not reproduced here.",
      fr: "Contactez l’AJS via son site officiel pour confirmer la Boutique de droit active la plus proche, les horaires, les conditions d’accès et l’assistance disponible. Des publications anciennes contiennent des numéros qui n’ont pas été confirmés comme actuels ; ils ne sont donc pas reproduits ici."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Organisation and service model supported by AJS publications and a Senegal child-protection directory; current phone contacts and office availability not verified.", fr: "Organisation et dispositif documentés par les publications de l’AJS et un annuaire sénégalais de protection de l’enfance ; téléphones et disponibilité actuels non vérifiés." },
    sources: [
      { label: "AJS official website", url: "https://femmesjuristes.org/" },
      { label: "AJS study on gender-based violence during COVID-19 (organisation publication)", url: "https://femmesjuristes.org/wp-content/uploads/2021/01/Rapport_etude-des-VBG-en-cette-pe%CC%81riode-de-COVID-AJS_VERSION-FINALE_NOVEMBRE1.pdf" },
      { label: "Penser l’Enfance au Sénégal · AJS", url: "https://www.penserlenfance.sn/ressources/institutions-et-orientation/institution-ajs" },
      { label: "APS · AJS reports presence in seven regions and plans wider expansion · 24 October 2026", url: "https://aps.sn/lajs-veut-etendre-son-offre-de-services-a-tous-les-departements/" }
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
      en: "Official emergency contacts published by Senegalese authorities: Police 17, Fire & Rescue 18, and SAMU medical emergency 1515.",
      fr: "Contacts d’urgence officiels publiés par les autorités sénégalaises : Police 17, Sapeurs-pompiers 18 et urgence médicale SAMU 1515."
    },
    contactLabel: { en: "View official emergency information", fr: "Voir les informations officielles sur les urgences" },
    url: "https://www.interieur.gouv.sn/contact",
    phone: null,
    emergencyNumbers: [
      { label: { en: "Police", fr: "Police" }, number: "17" },
      { label: { en: "Fire & rescue", fr: "Sapeurs-pompiers" }, number: "18" },
      { label: { en: "SAMU medical emergency", fr: "Urgence médicale SAMU" }, number: "1515" }
    ],
    email: null,
    coverage: { en: "National · emergencies", fr: "National · urgences" },
    accessMode: "national-phone",
    regions: [],
    locationNote: { en: "National emergency telephone numbers published by the Ministry of the Interior. They are not local office addresses.", fr: "Numéros téléphoniques nationaux d’urgence publiés par le Ministère de l’Intérieur. Il ne s’agit pas d’adresses de bureaux locaux." },
    note: {
      en: "Use these numbers for immediate emergencies. Safe Space cannot contact emergency services or monitor a visitor's safety.",
      fr: "Utilisez ces numéros en cas d’urgence immédiate. Safe Space ne peut pas contacter les services d’urgence ni surveiller la sécurité d’un visiteur."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Numbers and 24-hour emergency designation published by the Ministry of the Interior; calls not test-made.", fr: "Numéros et disponibilité d’urgence 24 h/24 publiés par le Ministère de l’Intérieur ; appels non testés." },
    sources: [
      { label: "Ministry of the Interior · Police and Fire & Rescue numbers", url: "https://www.interieur.gouv.sn/contact" },
      { label: "Ministry of Health · SAMU National and 1515", url: "https://www.sante.gouv.sn/Pr%C3%A9sentation/la-d%C3%A9couverte-du-samu-national" }
    ]
  },
  {
    id: "kayam-womens-support",
    category: "women",
    audience: ["individuals"],
    kind: { en: "Women’s violence support and shelter", fr: "Soutien et hébergement pour les femmes victimes de violences" },
    title: { en: "Association KAYAM · Women’s support centre", fr: "Association KAYAM · Centre de soutien aux femmes" },
    provider: { en: "Association KAYAM · Petit Mbao, Dakar", fr: "Association KAYAM · Petit Mbao, Dakar" },
    description: {
      en: "KAYAM describes services for women affected by domestic and intimate-partner violence, including accommodation, medical, psychological and legal support. Its pilot centre in Petit Mbao says it can accommodate women with young children.",
      fr: "KAYAM décrit des services destinés aux femmes victimes de violences domestiques et conjugales, notamment l’hébergement ainsi qu’un accompagnement médical, psychologique et juridique. Son centre pilote à Petit Mbao indique pouvoir accueillir des femmes accompagnées de jeunes enfants."
    },
    contactLabel: { en: "Visit KAYAM", fr: "Visiter le site de KAYAM" },
    url: "https://www.kayamsenegal.com/",
    phone: "+221777744803",
    additionalPhones: ["+221774654848"],
    email: "contact@kayamsenegal.com",
    coverage: { en: "Petit Mbao · Dakar Region", fr: "Petit Mbao · Région de Dakar" },
    accessMode: "regional-presence-reported",
    regions: ["dakar"],
    address: { en: "Pilot centre: Petit Mbao, Dakar Region. Contact KAYAM before travelling to confirm the safest approach and current availability.", fr: "Centre pilote : Petit Mbao, région de Dakar. Contactez KAYAM avant tout déplacement afin de confirmer la démarche la plus sûre et la disponibilité actuelle." },
    locationNote: { en: "KAYAM identifies its pilot shelter in Petit Mbao. Its website lists 24/7 telephone contact, but Safe Space has not test-called the number or confirmed current bed capacity. Contact the organisation before travelling.", fr: "KAYAM situe son centre pilote à Petit Mbao. Son site indique un contact téléphonique 24 h/24, mais Safe Space n’a pas appelé le numéro ni confirmé la capacité d’accueil actuelle. Contactez l’association avant tout déplacement." },
    note: {
      en: "KAYAM’s website advertises a 24/7 contact line, but Safe Space has not called it and cannot confirm current response or shelter capacity. Contact the organisation to confirm eligibility, intake arrangements, availability, accessibility and any costs before travelling. Safe Space cannot arrange accommodation or transport.",
      fr: "Le site de KAYAM annonce une ligne de contact 24 h/24, mais Safe Space ne l’a pas appelée et ne peut confirmer la réponse actuelle ni la capacité d’hébergement. Contactez l’association pour confirmer les conditions d’accès, les modalités d’accueil, la disponibilité, l’accessibilité et les éventuels coûts avant tout déplacement. Safe Space ne peut organiser ni hébergement ni transport."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Service model, Petit Mbao location, telephone and email published on KAYAM’s own website; calls and shelter capacity not independently tested.", fr: "Nature du service, localisation à Petit Mbao, téléphone et courriel publiés sur le site de KAYAM ; appels et capacité d’hébergement non testés de manière indépendante." },
    sources: [
      { label: "KAYAM official website · services and pilot centre", url: "https://www.kayamsenegal.com/" },
      { label: "KAYAM · Centre pilot information", url: "https://kayamsenegal.com/centre-pilote.php" }
    ]
  },
  {
    id: "eden-listening-referral",
    category: "protection",
    audience: ["individuals", "organisations"],
    kind: { en: "Listening, psychosocial support and referral", fr: "Écoute, accompagnement psychosocial et orientation" },
    title: { en: "ONG EDEN Senegal · Listening and referral office", fr: "ONG EDEN Sénégal · Bureau d’écoute et d’orientation" },
    provider: { en: "Éducation et Développement de l’Enfant (EDEN)", fr: "Éducation et Développement de l’Enfant (EDEN)" },
    description: {
      en: "EDEN says its listening office welcomes children, young people and women affected by violence, provides a safe listening and psychosocial support pathway, and refers people to medical, judicial and socio-economic services when needed.",
      fr: "EDEN indique que son bureau d’écoute accueille les enfants, les jeunes et les femmes victimes de violences, propose une écoute et un accompagnement psychosocial, puis oriente si nécessaire vers des services médicaux, judiciaires et socio-économiques."
    },
    contactLabel: { en: "Visit EDEN", fr: "Visiter le site d’EDEN" },
    url: "https://edensenegal.org/",
    phone: "+221777285157",
    additionalPhones: ["+221338776676"],
    email: "ong@eden-senegal.org",
    additionalEmails: ["edenorg@hotmail.com"],
    coverage: { en: "Listening office in Guédiawaye, Dakar; project intervention reported in 8 regions", fr: "Bureau d’écoute à Guédiawaye, Dakar ; interventions de projets signalées dans 8 régions" },
    accessMode: "regional-presence-reported",
    regions: ["dakar"],
    address: { en: "Wakhinane Nimzath, Guédiawaye, Dakar. Contact EDEN before visiting.", fr: "Wakhinane Nimzath, Guédiawaye, Dakar. Contactez EDEN avant de vous déplacer." },
    locationNote: { en: "EDEN publishes a listening-office address in Wakhinane Nimzath, Guédiawaye, and reports programme intervention in Dakar, Diourbel, Fatick, Kédougou, Louga, Saint-Louis, Thiès and Ziguinchor. The eight-region programme footprint does not mean a listening office exists in every region; confirm the available service point directly.", fr: "EDEN publie une adresse de bureau d’écoute à Wakhinane Nimzath, Guédiawaye, et signale des interventions de projets à Dakar, Diourbel, Fatick, Kédougou, Louga, Saint-Louis, Thiès et Ziguinchor. Cette couverture de projets ne signifie pas qu’un bureau d’écoute existe dans chaque région ; confirmez directement le point de service disponible." },
    note: {
      en: "EDEN’s website advises people concerned about a child in an urgent situation to call its listening office directly. Contact before travelling to confirm intake arrangements and the support currently available. It is not a public emergency-dispatch service.",
      fr: "Le site d’EDEN conseille aux personnes préoccupées par une situation urgente concernant un enfant d’appeler directement son bureau d’écoute. Contactez le bureau avant de vous déplacer pour confirmer les modalités d’accueil et les services actuellement disponibles. Il ne s’agit pas d’un service public de régulation des urgences."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Current EDEN website lists contact details and listening-office service description; phone numbers not called by Safe Space.", fr: "Le site actuel d’EDEN publie les coordonnées et décrit le bureau d’écoute ; les numéros n’ont pas été appelés par Safe Space." },
    sources: [
      { label: "EDEN · Listening office and support pathway", url: "https://edensenegal.org/le-bureau-d-ecoute-accueillir-ecouter-orienter-suivre/" },
      { label: "EDEN · Contact and office location", url: "https://edensenegal.org/contact/" },
      { label: "EDEN · Intervention areas", url: "https://edensenegal.org/domaines-d-intervention/" }
    ]
  },
  {
    id: "safe-open-spaces",
    category: "psychosocial",
    audience: ["individuals"],
    kind: { en: "Active listening and psychosocial referral", fr: "Écoute active et orientation psychosociale" },
    title: { en: "Safe Open Space Senegal", fr: "Safe Open Space Sénégal" },
    provider: { en: "Safe Open Space · SOS Sénégal", fr: "Safe Open Space · SOS Sénégal" },
    description: {
      en: "Safe Open Space describes active listening, psychosocial support and referral to appropriate mental-health professionals. Its website says listening is free, anonymous and confidential, and that it offers occasional individual listening sessions and workshops on mental health, psychological first aid and stress management.",
      fr: "Safe Open Space décrit un service d’écoute active, de soutien psychosocial et d’orientation vers des professionnels de santé mentale. Son site indique que l’écoute est gratuite, anonyme et confidentielle, et que l’organisation propose des séances ponctuelles d’écoute individuelle ainsi que des ateliers sur la santé mentale, les premiers secours psychologiques et la gestion du stress."
    },
    contactLabel: { en: "Visit Safe Open Space", fr: "Visiter Safe Open Space" },
    url: "https://www.safeopenspaces.org/",
    phone: null,
    email: "contacts@safeopenspaces.org",
    additionalEmails: ["snsafeopenspaces@gmail.com"],
    coverage: { en: "Online contact · Senegal and diaspora", fr: "Contact en ligne · Sénégal et diaspora" },
    accessMode: "national-online",
    regions: [],
    address: { en: "No walk-in address or telephone number is published in the contact information reviewed. Use the website or email first.", fr: "Aucune adresse d’accueil ni aucun numéro de téléphone n’est publié dans les informations de contact consultées. Utilisez d’abord le site ou le courriel." },
    locationNote: { en: "The organisation describes a Senegal and diaspora audience and provides website and email contact. No telephone hotline or regional walk-in office was confirmed in the reviewed information.", fr: "L’organisation décrit un public au Sénégal et dans la diaspora et propose un contact par site web et courriel. Aucun numéro d’écoute téléphonique ni bureau régional d’accueil n’a été confirmé dans les informations consultées." },
    note: {
      en: "The organisation states that its listening service does not replace therapy and that it can refer people to trained professionals. Do not use email for immediate danger or send sensitive material unless the organisation has explained a safe process.",
      fr: "L’organisation précise que son service d’écoute ne remplace pas une thérapie et qu’il peut orienter vers des professionnels formés. N’utilisez pas le courriel en cas de danger immédiat et n’envoyez pas de contenu sensible sans que l’organisation ait expliqué une procédure sûre."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Service scope and contact emails published in the organisation’s own FAQ; no phone number or physical intake point confirmed.", fr: "La nature du service et les adresses électroniques figurent dans la FAQ de l’organisation ; aucun numéro de téléphone ni lieu d’accueil physique n’a été confirmé." },
    sources: [
      { label: "Safe Open Space · About and FAQ", url: "https://www.safeopenspaces.org/" }
    ]
  },
  {
    id: "mental-health-division",
    category: "mentalhealth",
    audience: ["individuals","organisations"],
    kind: { en: "Government mental-health information and coordination", fr: "Information et coordination publiques en santé mentale" },
    title: { en: "Ministry of Health · Mental Health Division", fr: "Ministère de la Santé · Division de la Santé mentale" },
    provider: { en: "Direction Générale de la Santé · Senegal", fr: "Direction Générale de la Santé · Sénégal" },
    description: {
      en: "The Ministry describes the Mental Health Division as coordinating national mental-health action, promoting access to care and supporting community mental health. This is an institutional information and coordination contact, not a counselling hotline.",
      fr: "Le Ministère présente la Division de la Santé mentale comme chargée de coordonner les actions nationales en santé mentale, de promouvoir l’accès aux soins et de soutenir la santé mentale communautaire. Il s’agit d’un contact institutionnel d’information et de coordination, et non d’une ligne d’écoute psychologique."
    },
    contactLabel: { en: "Visit Ministry of Health", fr: "Visiter le Ministère de la Santé" },
    url: "https://www.sante.gouv.sn/programmes-et-projets/programme-sant%C3%A9-mentale-psm",
    phone: "+221338694292",
    email: "divisionsantementalesenegal@gmail.com",
    coverage: { en: "Dakar Fann · national coordination", fr: "Dakar Fann · coordination nationale" },
    accessMode: "regional-presence-reported",
    regions: ["dakar"],
    address: { en: "Rue Aimé Césaire, Dakar Fann. Confirm public reception arrangements before visiting.", fr: "Rue Aimé Césaire, Dakar Fann. Confirmez les modalités d’accueil du public avant de vous déplacer." },
    locationNote: { en: "The Ministry lists the Division at Rue Aimé Césaire, Dakar Fann. Its role is national coordination and public-health programme work; it is not presented as a walk-in therapy clinic.", fr: "Le Ministère situe la Division rue Aimé Césaire, Dakar Fann. Son rôle relève de la coordination nationale et des programmes de santé publique ; elle n’est pas présentée comme une clinique de thérapie en accès direct." },
    note: {
      en: "For urgent medical emergencies, use SAMU 1515 rather than this administrative contact. Ask the Division or a health facility for current routes to local mental-health care.",
      fr: "En cas d’urgence médicale, contactez le SAMU au 1515 plutôt que ce service administratif. Demandez à la Division ou à une structure de santé les voies actuelles d’accès aux soins de santé mentale locaux."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Address, telephone, email and mandate listed on the Ministry of Health official programme page; call not test-made.", fr: "Adresse, téléphone, courriel et mandat publiés sur la page officielle du programme du Ministère de la Santé ; appel non testé." },
    sources: [
      { label: "Ministry of Health · Mental Health Programme", url: "https://www.sante.gouv.sn/programmes-et-projets/programme-sant%C3%A9-mentale-psm" }
    ]
  },
  {
    id: "taxaw-temm",
    category: "digitalrights",
    audience: ["individuals","organisations"],
    kind: { en: "Digital-safety education and online-harassment information", fr: "Éducation à la sécurité numérique et information sur le cyberharcèlement" },
    title: { en: "Taxaw Temm · AfricTivistes Women & Cybersecurity", fr: "Taxaw Temm · AfricTivistes Femmes Cybersécurité" },
    provider: { en: "AfricTivistes · Senegal-based civil-society initiative", fr: "AfricTivistes · initiative de la société civile basée au Sénégal" },
    description: {
      en: "Taxaw Temm is part of AfricTivistes’ Women in Cybersecurity programme. It provides awareness and advocacy resources on online harassment and responsible social-media use. AfricTivistes also documents a Khadija virtual assistant on WhatsApp that provides information and guidance about cyberbullying.",
      fr: "Taxaw Temm fait partie du programme Femmes Cybersécurité d’AfricTivistes. La plateforme propose des ressources de sensibilisation et de plaidoyer sur le harcèlement en ligne et l’usage responsable des réseaux sociaux. AfricTivistes documente également l’assistante virtuelle Khadija sur WhatsApp, qui fournit des informations et des orientations sur le cyberharcèlement."
    },
    contactLabel: { en: "Open Taxaw Temm", fr: "Ouvrir Taxaw Temm" },
    url: "https://taxawtemm.net/",
    phone: "+221338375124",
    whatsappNumber: "+221338375124",
    whatsappLabel: { en: "WhatsApp Taxaw Temm", fr: "WhatsApp Taxaw Temm" },
    assistantLabel: { en: "WhatsApp Khadija assistant", fr: "Assistant Khadija sur WhatsApp" },
    email: "info@africtivistes.org",
    coverage: { en: "Online · Senegal-based programme", fr: "En ligne · programme basé au Sénégal" },
    accessMode: "national-online",
    regions: [],
    address: { en: "AfricTivistes contact address: BP 19968, VDN 3, Dakar, Senegal. Confirm the best contact channel before sharing personal information.", fr: "Adresse de contact d’AfricTivistes : BP 19968, VDN 3, Dakar, Sénégal. Confirmez le canal de contact approprié avant de partager des informations personnelles." },
    locationNote: { en: "Taxaw Temm is an online campaign and information platform. AfricTivistes publishes a WhatsApp contact for the project and has documented a separate Khadija assistant number. Neither number has been test-messaged by Safe Space.", fr: "Taxaw Temm est une campagne et une plateforme d’information en ligne. AfricTivistes publie un contact WhatsApp pour le projet et a documenté un numéro distinct pour l’assistante Khadija. Aucun des deux numéros n’a été testé par Safe Space." },
    note: {
      en: "Taxaw Temm’s contact page describes its WhatsApp channel as available 24/7, but Safe Space has not test-messaged it and cannot confirm response times or case-handling capacity. It is not a substitute for statutory emergency services. Do not send intimate images, passwords or detailed sensitive case files to a chatbot or ordinary messaging contact. For suspected crimes, use the Police reporting route separately.",
      fr: "La page de contact de Taxaw Temm présente son canal WhatsApp comme disponible 24 h/24, mais Safe Space n’a pas envoyé de message test et ne peut confirmer les délais de réponse ni la capacité de traitement des dossiers. Ce canal ne remplace pas les services publics d’urgence. N’envoyez pas d’images intimes, de mots de passe ou de dossiers sensibles détaillés à un chatbot ou à un contact de messagerie ordinaire. Pour les infractions présumées, utilisez séparément le canal de signalement de la Police."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Programme description and Khadija number documented by AfricTivistes; contact channels appear on current Taxaw Temm contact page; numbers not test-messaged.", fr: "Description du programme et numéro de Khadija documentés par AfricTivistes ; les canaux de contact figurent sur la page de contact actuelle de Taxaw Temm ; numéros non testés par message." },
    sources: [
      { label: "AfricTivistes · Women & Cybersecurity / Taxaw Temm programme", url: "https://africtivistes.com/fr/initiatives/africtivistes-femmes-cybersecurite" },
      { label: "AfricTivistes · Khadija assistant announcement", url: "https://africtivistes.com/en/blog/the-khadija-chatbot-a-virtual-assistant-designed-to-promote-the-safe-and-responsible-use-of-social-media-as-well-as-combatting-cyberbullying/" },
      { label: "Taxaw Temm · Current contact page", url: "https://taxawtemm.net/contact" }
    ]
  },
  {
    id: "jonction-digital-rights",
    category: "digitalrights",
    audience: ["individuals","organisations"],
    kind: { en: "Digital-rights advocacy, research and education", fr: "Plaidoyer, recherche et éducation aux droits numériques" },
    title: { en: "JONCTION · Digital Rights", fr: "JONCTION · Droits numériques" },
    provider: { en: "Senegalese civil-society organisation", fr: "Organisation sénégalaise de la société civile" },
    description: {
      en: "JONCTION publishes analysis and advocacy material on freedom of expression, digital regulation, online rights and internet access. Its website includes recent work and training or advocacy resources. It is listed as an information and civil-society resource, not an individual case-response service.",
      fr: "JONCTION publie des analyses et des ressources de plaidoyer sur la liberté d’expression, la régulation du numérique, les droits en ligne et l’accès à Internet. Son site présente des travaux récents ainsi que des ressources de formation et de plaidoyer. Il s’agit d’une ressource d’information et de société civile, et non d’un service de traitement individuel de dossiers."
    },
    contactLabel: { en: "Visit JONCTION", fr: "Visiter JONCTION" },
    url: "https://jonctiondroitnumerique.org/",
    phone: null,
    email: null,
    coverage: { en: "Senegal · online publications", fr: "Sénégal · publications en ligne" },
    accessMode: "national-online",
    regions: [],
    address: { en: "No public telephone or email contact was confirmed from the reviewed official pages. Use the website's published channels.", fr: "Aucun numéro de téléphone ni courriel public n’a été confirmé dans les pages officielles consultées. Utilisez les canaux publiés sur le site." },
    locationNote: { en: "JONCTION is included as a digital-rights learning and advocacy resource. No direct public service address or hotline was verified.", fr: "JONCTION est répertoriée comme ressource d’apprentissage et de plaidoyer sur les droits numériques. Aucune adresse de service direct ni ligne d’écoute n’a été vérifiée." },
    note: {
      en: "This organisation's published work is focused on rights, policy, research and advocacy. It is not a hotline, legal-aid intake desk or emergency response service.",
      fr: "Les travaux publiés par cette organisation portent sur les droits, les politiques publiques, la recherche et le plaidoyer. Il ne s’agit ni d’une ligne d’écoute, ni d’un guichet d’aide juridique individuelle, ni d’un service d’urgence."
    },
    checked: "2026-11-08",
    checkStatus: { en: "Recent site publications on freedom of expression, digital regulation and advocacy were found; no direct public phone or email verified.", fr: "Des publications récentes sur la liberté d’expression, la régulation du numérique et le plaidoyer ont été trouvées ; aucun téléphone ni courriel direct n’a été vérifié." },
    sources: [
      { label: "JONCTION · Official website and publications", url: "https://jonctiondroitnumerique.org/" }
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
  { id: "women", label: { en: "Women's protection", fr: "Protection des femmes" } },
  { id: "protection", label: { en: "Protection and referral", fr: "Protection et orientation" } },
  { id: "psychosocial", label: { en: "Psychosocial support", fr: "Soutien psychosocial" } },
  { id: "mentalhealth", label: { en: "Mental health information", fr: "Information en santé mentale" } },
  { id: "digitalrights", label: { en: "Digital rights and online safety", fr: "Droits numériques et sécurité en ligne" } },
  { id: "emergency", label: { en: "Emergency", fr: "Urgence" } }
];


/** Senegal's 14 administrative regions. Region-level physical presence is shown only where a source reports it. */
export const senegalRegions = [
  { id: "dakar", label: { en: "Dakar", fr: "Dakar" } },
  { id: "diourbel", label: { en: "Diourbel", fr: "Diourbel" } },
  { id: "fatick", label: { en: "Fatick", fr: "Fatick" } },
  { id: "kaffrine", label: { en: "Kaffrine", fr: "Kaffrine" } },
  { id: "kaolack", label: { en: "Kaolack", fr: "Kaolack" } },
  { id: "kedougou", label: { en: "Kédougou", fr: "Kédougou" } },
  { id: "kolda", label: { en: "Kolda", fr: "Kolda" } },
  { id: "louga", label: { en: "Louga", fr: "Louga" } },
  { id: "matam", label: { en: "Matam", fr: "Matam" } },
  { id: "saint-louis", label: { en: "Saint-Louis", fr: "Saint-Louis" } },
  { id: "sedhiou", label: { en: "Sédhiou", fr: "Sédhiou" } },
  { id: "tambacounda", label: { en: "Tambacounda", fr: "Tambacounda" } },
  { id: "thies", label: { en: "Thiès", fr: "Thiès" } },
  { id: "ziguinchor", label: { en: "Ziguinchor", fr: "Ziguinchor" } }
];
