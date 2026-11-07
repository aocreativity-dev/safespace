export const learningResources = [
  {
    id: "strong-passwords",
    category: "accounts",
    minutes: 4,
    title: { en: "Create stronger passwords", fr: "Créer des mots de passe plus sûrs" },
    summary: { en: "Learn how to make passwords harder to guess and safer to manage.", fr: "Apprenez à créer des mots de passe difficiles à deviner et à les gérer en sécurité." },
    intro: {
      en: "A strong password helps protect an account from people who try to guess or reuse stolen login details. The aim is to make every important account difficult to access if another account is compromised.",
      fr: "Un mot de passe robuste aide à protéger un compte contre les personnes qui tentent de deviner ou de réutiliser des identifiants volés. L’objectif est de rendre chaque compte important plus difficile d’accès si un autre compte est compromis."
    },
    sections: [
      { heading: { en: "Choose length and uniqueness", fr: "Privilégier la longueur et l’unicité" }, body: { en: "Use a long password or passphrase that is difficult to guess. Avoid names, birthdays, phone numbers, common phrases and details that can be found on your social media. Do not reuse the same password across important accounts.", fr: "Utilisez un mot de passe long ou une phrase de passe difficile à deviner. Évitez les noms, dates de naissance, numéros de téléphone, expressions courantes et informations visibles sur vos réseaux sociaux. N’utilisez pas le même mot de passe pour plusieurs comptes importants." } },
      { heading: { en: "Store passwords safely", fr: "Conserver les mots de passe en sécurité" }, body: { en: "A reputable password manager can help create and store unique passwords. Protect the manager with a strong master password and multi-factor authentication where available. Never share passwords in messages or with someone who contacts you unexpectedly.", fr: "Un gestionnaire de mots de passe fiable peut aider à créer et conserver des mots de passe uniques. Protégez-le avec un mot de passe principal robuste et l’authentification multifacteur si elle est proposée. Ne partagez jamais vos mots de passe par message ni avec une personne qui vous contacte de façon inattendue." } }
    ],
    reminder: { en: "If you think someone knows your password, change it from a device you believe is safe. Update any other account where you reused it.", fr: "Si vous pensez qu’une personne connaît votre mot de passe, changez-le depuis un appareil que vous estimez sûr. Modifiez-le également sur tout autre compte où vous l’auriez réutilisé." }
  },
  {
    id: "multi-factor",
    category: "accounts",
    minutes: 3,
    title: { en: "Turn on multi-factor authentication", fr: "Activer l’authentification multifacteur" },
    summary: { en: "Add another layer of protection beyond your password.", fr: "Ajoutez une protection supplémentaire à votre mot de passe." },
    intro: {
      en: "Multi-factor authentication (MFA) asks for another proof of identity when you sign in. This can make it harder for someone to access your account with only a stolen password.",
      fr: "L’authentification multifacteur (AMF) demande une preuve supplémentaire de votre identité lors de la connexion. Elle peut empêcher une personne d’accéder à votre compte avec un mot de passe volé uniquement."
    },
    sections: [
      { heading: { en: "Choose an available method", fr: "Choisir une méthode disponible" }, body: { en: "Where possible, use a passkey, security key or authenticator app. Text-message codes may be better than no second step, but can be exposed through phone-number or SIM-related attacks. The options differ by service.", fr: "Lorsque cela est possible, utilisez une clé d’accès, une clé de sécurité ou une application d’authentification. Les codes par SMS peuvent être préférables à l’absence de deuxième étape, mais ils peuvent être exposés lors d’attaques visant votre numéro ou votre carte SIM. Les options varient selon le service." } },
      { heading: { en: "Protect recovery options", fr: "Protéger les options de récupération" }, body: { en: "Save backup codes in a secure place that is not simply a screenshot on the same phone. Check that your recovery email and phone number are current and belong to you.", fr: "Conservez les codes de secours dans un endroit sûr, et pas uniquement dans une capture d’écran sur le même téléphone. Vérifiez que votre adresse électronique et votre numéro de récupération sont à jour et vous appartiennent." } }
    ],
    reminder: { en: "Never tell a caller or message sender your one-time sign-in code. A genuine support team should not ask you to send them your code.", fr: "Ne communiquez jamais un code de connexion temporaire à une personne qui vous appelle ou vous écrit. Un véritable service d’assistance ne devrait pas vous demander de lui transmettre ce code." }
  },
  {
    id: "privacy-checkup",
    category: "privacy",
    minutes: 5,
    title: { en: "Review your privacy settings", fr: "Vérifier vos paramètres de confidentialité" },
    summary: { en: "Decide who can see your posts, contact you and find your profile.", fr: "Décidez qui peut voir vos publications, vous contacter et trouver votre profil." },
    intro: {
      en: "Privacy settings help you control what information is visible and who can interact with you. Settings differ across platforms and can change, so review them regularly.",
      fr: "Les paramètres de confidentialité vous aident à contrôler les informations visibles et les personnes qui peuvent interagir avec vous. Ils varient selon les plateformes et peuvent changer : vérifiez-les régulièrement."
    },
    sections: [
      { heading: { en: "Review your audience", fr: "Vérifier votre audience" }, body: { en: "Check who can see your posts, stories, profile details, friends or followers list, and activity status. Consider limiting older posts and removing details that reveal your routine, location or private contact information.", fr: "Vérifiez qui peut voir vos publications, stories, informations de profil, listes d’amis ou d’abonnés et statut d’activité. Envisagez de limiter l’accès aux anciennes publications et de retirer les détails qui révèlent vos habitudes, votre localisation ou vos coordonnées privées." } },
      { heading: { en: "Review contact and discovery settings", fr: "Vérifier les paramètres de contact et de recherche" }, body: { en: "Check who can send message requests, tag you, mention you, add you to groups or find you using your phone number or email address. Choose settings that fit your circumstances.", fr: "Vérifiez qui peut vous envoyer des demandes de message, vous identifier, vous mentionner, vous ajouter à des groupes ou vous retrouver à l’aide de votre numéro de téléphone ou de votre adresse électronique. Choisissez les paramètres adaptés à votre situation." } }
    ],
    reminder: { en: "A private account does not make every interaction safe. Review followers and connected apps, and be thoughtful about what you share.", fr: "Un compte privé ne rend pas toutes les interactions sûres. Vérifiez vos abonnés et les applications connectées, et réfléchissez aux informations que vous partagez." }
  },
  {
    id: "consent-and-images",
    category: "privacy",
    minutes: 4,
    title: { en: "Digital consent and personal images", fr: "Consentement numérique et images personnelles" },
    summary: { en: "Understand boundaries around sharing, forwarding and publishing images.", fr: "Comprenez les limites liées au partage, au transfert et à la publication d’images." },
    intro: {
      en: "Consent matters online as it does offline. Having access to a photo or message does not automatically mean you have permission to share it with other people or publish it.",
      fr: "Le consentement compte en ligne comme hors ligne. Avoir accès à une photo ou à un message ne signifie pas automatiquement que vous avez l’autorisation de le partager avec d’autres personnes ou de le publier."
    },
    sections: [
      { heading: { en: "Ask before sharing", fr: "Demander avant de partager" }, body: { en: "Ask the person before posting or forwarding an image, recording, private message or identifying detail. Respect a person's decision not to share. Consent to send something to one person is not consent to distribute it more widely.", fr: "Demandez l’accord de la personne avant de publier ou transférer une image, un enregistrement, un message privé ou une information permettant de l’identifier. Respectez son refus. Accepter d’envoyer un contenu à une personne ne signifie pas accepter sa diffusion plus large." } },
      { heading: { en: "If an image is shared without permission", fr: "Si une image est partagée sans autorisation" }, body: { en: "Avoid forwarding or reposting it. Use the platform's reporting options where appropriate. Consider seeking support from someone you trust or a qualified local service. Do not upload intimate images to Safe Space.", fr: "Évitez de transférer ou de republier l’image. Utilisez les options de signalement de la plateforme lorsque cela est approprié. Envisagez de demander de l’aide à une personne de confiance ou à un service local qualifié. Ne téléversez pas d’images intimes sur Safe Space." } }
    ],
    reminder: { en: "Never blame someone for an image being shared without their consent. Responsibility belongs to the person who shared it without permission.", fr: "Ne blâmez jamais une personne parce qu’une image a été diffusée sans son consentement. La responsabilité revient à la personne qui l’a partagée sans autorisation." }
  },
  {
    id: "recognise-harassment",
    category: "harassment",
    minutes: 4,
    title: { en: "Recognise online harassment", fr: "Reconnaître le harcèlement en ligne" },
    summary: { en: "Identify repeated unwanted contact, intimidation and harmful online behaviour.", fr: "Identifier les contacts répétés non souhaités, l’intimidation et les comportements nuisibles en ligne." },
    intro: {
      en: "Online harassment can take different forms. It may include repeated unwanted messages, threats, targeted insults, stalking, impersonation or the publication of private information. Context matters, and a person does not need to use a particular label before seeking information or support.",
      fr: "Le harcèlement en ligne peut prendre différentes formes : messages répétés non souhaités, menaces, insultes ciblées, surveillance, usurpation d’identité ou publication d’informations privées. Le contexte compte, et une personne n’a pas besoin d’utiliser une appellation précise pour chercher des informations ou du soutien."
    },
    sections: [
      { heading: { en: "Notice patterns and impact", fr: "Repérer les comportements et leurs effets" }, body: { en: "Pay attention to repeated behaviour, unwanted contact across multiple accounts, threats, attempts to control or frighten someone, and the spread of personal information. A single serious threat can also deserve attention.", fr: "Soyez attentif aux comportements répétés, aux contacts non souhaités provenant de plusieurs comptes, aux menaces, aux tentatives de contrôler ou d’effrayer une personne et à la diffusion d’informations personnelles. Une seule menace grave mérite également d’être prise au sérieux." } },
      { heading: { en: "You can seek information without sharing your story", fr: "Vous pouvez chercher des informations sans raconter votre histoire" }, body: { en: "You can read general guidance, adjust privacy settings or learn about platform reporting without explaining your personal circumstances to a website or chatbot.", fr: "Vous pouvez consulter des conseils généraux, modifier vos paramètres de confidentialité ou vous informer sur les signalements auprès des plateformes sans expliquer votre situation personnelle à un site ou à un chatbot." } }
    ],
    reminder: { en: "If you feel in immediate danger, do not rely on this website. Contact local emergency services or a trusted person who can help you reach safety.", fr: "Si vous pensez être en danger immédiat, ne comptez pas sur ce site. Contactez les services d’urgence locaux ou une personne de confiance qui peut vous aider à rejoindre un lieu sûr." }
  },
  {
    id: "impersonation-and-threats",
    category: "harassment",
    minutes: 5,
    title: { en: "Respond to impersonation and threats", fr: "Réagir à l’usurpation d’identité et aux menaces" },
    summary: { en: "Learn practical options when someone pretends to be you or sends threatening messages.", fr: "Découvrez des options pratiques lorsqu’une personne se fait passer pour vous ou envoie des messages menaçants." },
    intro: {
      en: "Impersonation and threats can be upsetting and may affect your reputation, relationships or sense of safety. You can consider practical steps, but choose only actions that feel safe in your circumstances.",
      fr: "L’usurpation d’identité et les menaces peuvent être éprouvantes et affecter votre réputation, vos relations ou votre sentiment de sécurité. Vous pouvez envisager des mesures pratiques, en choisissant uniquement celles qui sont sûres dans votre situation."
    },
    sections: [
      { heading: { en: "Secure your real accounts", fr: "Sécuriser vos vrais comptes" }, body: { en: "If an account may have been accessed, change its password from a device you trust, turn on multi-factor authentication and review active sessions and recovery details. Use the platform's official account-recovery process.", fr: "Si un compte a peut-être été compromis, changez son mot de passe depuis un appareil de confiance, activez l’authentification multifacteur et vérifiez les sessions actives ainsi que les coordonnées de récupération. Utilisez la procédure officielle de récupération de la plateforme." } },
      { heading: { en: "Avoid escalating contact", fr: "Éviter d’aggraver les échanges" }, body: { en: "You do not have to reply to threatening or abusive messages. Consider blocking or restricting the account and reporting it through the platform. If a threat suggests immediate physical danger, seek local help rather than engaging with the sender.", fr: "Vous n’êtes pas obligé de répondre aux messages menaçants ou abusifs. Envisagez de bloquer ou de restreindre le compte et de le signaler à la plateforme. Si une menace indique un danger physique immédiat, cherchez de l’aide localement plutôt que d’engager la conversation avec son auteur." } }
    ],
    reminder: { en: "Do not click links or download files sent by an account you do not trust, even if it appears to be someone you know.", fr: "Ne cliquez pas sur les liens et ne téléchargez pas les fichiers envoyés par un compte auquel vous ne faites pas confiance, même s’il semble appartenir à une personne que vous connaissez." }
  },
  {
    id: "preserve-information",
    category: "response",
    minutes: 5,
    title: { en: "Think carefully about preserving information", fr: "Réfléchir à la conservation des informations" },
    summary: { en: "Understand options for keeping a record without putting yourself at greater risk.", fr: "Comprenez les possibilités de conserver une trace sans vous exposer à davantage de risques." },
    intro: {
      en: "Some people choose to keep a record of harmful online activity in case they later decide to report it or discuss it with a support professional. Preserving information is a choice, not an obligation, and safety comes first.",
      fr: "Certaines personnes choisissent de conserver une trace d’activités nuisibles en ligne au cas où elles décideraient plus tard de les signaler ou d’en parler à un professionnel. Conserver des informations est un choix, pas une obligation : la sécurité passe avant tout."
    },
    sections: [
      { heading: { en: "Consider what may be useful", fr: "Réfléchir aux éléments qui peuvent être utiles" }, body: { en: "Where safe and lawful, a record might include the date and time, account name, web address and a brief description. A screenshot may show context, but it can also contain private information about you or other people.", fr: "Lorsque cela est sûr et légal, une trace peut inclure la date et l’heure, le nom du compte, l’adresse de la page et une brève description. Une capture d’écran peut montrer le contexte, mais elle peut aussi contenir des informations privées vous concernant ou concernant d’autres personnes." } },
      { heading: { en: "Store records carefully", fr: "Conserver les éléments avec prudence" }, body: { en: "Think about who can access your phone, cloud storage or messages. Do not create copies if doing so could expose you to greater risk. Do not send sensitive material to this website or an unverified contact.", fr: "Réfléchissez aux personnes qui peuvent accéder à votre téléphone, à votre stockage en ligne ou à vos messages. Ne créez pas de copies si cela risque de vous exposer davantage. N’envoyez pas de contenu sensible à ce site ni à un contact non vérifié." } }
    ],
    reminder: { en: "Laws and procedures differ by location. For advice about a specific case, seek a qualified local professional or an appropriate verified service.", fr: "Les lois et procédures varient selon les pays. Pour obtenir des conseils concernant une situation précise, adressez-vous à un professionnel local qualifié ou à un service approprié et vérifié." }
  },
  {
    id: "platform-reporting",
    category: "response",
    minutes: 4,
    title: { en: "Explore platform reporting options", fr: "Découvrir les options de signalement des plateformes" },
    summary: { en: "Find out how to look for official reporting and blocking tools on a platform.", fr: "Découvrez comment trouver les outils officiels de signalement et de blocage d’une plateforme." },
    intro: {
      en: "Most major online services provide ways to report content or accounts that may violate their rules. The exact menus, response times and outcomes vary by platform and can change.",
      fr: "La plupart des grands services en ligne proposent des moyens de signaler des contenus ou des comptes susceptibles d’enfreindre leurs règles. Les menus, délais de réponse et résultats varient selon la plateforme et peuvent changer."
    },
    sections: [
      { heading: { en: "Use the platform's own help centre", fr: "Utiliser le centre d’aide officiel de la plateforme" }, body: { en: "Open the service's official app or website and look for Help, Safety, Report or Privacy. Read what information is requested before submitting. Avoid third-party websites that promise to remove content or recover accounts for a fee.", fr: "Ouvrez l’application ou le site officiel du service et recherchez les rubriques Aide, Sécurité, Signaler ou Confidentialité. Lisez les informations demandées avant d’envoyer un signalement. Évitez les sites tiers qui promettent de supprimer des contenus ou de récupérer des comptes contre paiement." } },
      { heading: { en: "Keep expectations realistic", fr: "Garder des attentes réalistes" }, body: { en: "A platform report does not guarantee that content will be removed or that an account will be restricted. If you remain concerned, consider other appropriate support or reporting options available in your location.", fr: "Un signalement à une plateforme ne garantit pas la suppression d’un contenu ni la restriction d’un compte. Si vous restez préoccupé, envisagez d’autres options de soutien ou de signalement adaptées à votre lieu de résidence." } }
    ],
    reminder: { en: "Never share your password or one-time login code with someone who claims they can handle a report for you.", fr: "Ne communiquez jamais votre mot de passe ni votre code de connexion temporaire à une personne qui prétend pouvoir effectuer un signalement à votre place." }
  }
];

export const learningCategories = [
  { id: "all", label: { en: "All topics", fr: "Tous les thèmes" } },
  { id: "accounts", label: { en: "Account safety", fr: "Sécurité des comptes" } },
  { id: "harassment", label: { en: "Online harm", fr: "Préjudices en ligne" } },
  { id: "privacy", label: { en: "Privacy and consent", fr: "Vie privée et consentement" } },
  { id: "response", label: { en: "Responding and support", fr: "Réagir et trouver du soutien" } }
];
