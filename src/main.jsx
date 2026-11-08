import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, ShieldCheck, BookOpen, HeartHandshake, Users, Menu, X, Printer, FileText,
  Search, MessageCircle, LockKeyhole, Smartphone, Globe2, ChevronDown,
  ExternalLink, PlayCircle, Sparkles, LifeBuoy, CheckCircle2, Leaf, Phone, Mail, MapPin
} from "lucide-react";
import "./styles.css";
import { learningResources, learningCategories } from "./learning.js";
import { toolkitResources, toolkitCategories, toolkitCategoryByResource } from "./toolkit.js";
import { supportResources, supportCategories } from "./support.js";

const copy = {
  en: {
    nav: ["Home", "Learn", "Safety guides", "Find support", "For organisations", "About"],
    eyebrow: "YOUR DIGITAL LIFE. YOUR CHOICES.",
    hero: "Feel safer in your digital world.",
    intro: "Understand online harm, discover practical ways to protect your digital life, and find reliable information when you need it.",
    explore: "Explore the learning hub",
    ask: "Ask Safe Space",
    individuals: "I’m here for myself",
    organisations: "I’m here to help others",
    pathways: "Start where you are",
    pathwaysIntro: "Find clear information and practical resources for the next step.",
    protect: "Protect your digital life",
    protectText: "Simple, practical steps for safer accounts, privacy and devices.",
    understand: "Understand online harm",
    understandText: "Learn about harassment, impersonation, threats and other harmful behaviour.",
    support: "Find support information",
    supportText: "Explore reviewed organisations and official reporting information.",
    share: "Learn and share",
    shareText: "Use videos, guides and workshop resources to build awareness together.",
    featured: "Learning that makes a difference",
    featuredText: "Explore accessible resources designed for everyday digital life and community learning.",
    video: "When Online Harassment Happens",
    videoText: "A learning series about recognising online harassment and considering safer next steps.",
    watch: "Explore the video library",
    videoLibraryTitle: "Watch the learning videos",
    videoLibraryIntro: "These videos are part of the Safe Space learning collection. Watch them here, then explore related guides.",
    fullVideoLabel: "Full video",
    shortVideoLabel: "Short video",
    fullVideoDescription: "Watch the full-length video in the player. You can also open it on YouTube.",
    shortVideoDescription: "Watch this short-form video in the player. You can also open it on YouTube.",
    openYouTube: "Open on YouTube",
    relatedGuides: "Explore related guides",
    captionsNote: "Use the YouTube player controls to enable captions when they are available. Transcripts can be added after they are prepared and reviewed.",
    videoNumberOne: "Video 1",
    videoNumberTwo: "Video 2",
    organisationsTitle: "Helping communities build safer digital spaces",
    organisationsText: "Practical materials for NGOs, educators and community facilitators: workshop plans, discussion guides and awareness resources.",
    toolkit: "Explore organisation resources",
    toolkitLabel: "TOOLS FOR COMMUNITY LEARNING",
    toolkitHeading: "Resources for people who help others learn",
    toolkitIntro: "Practical, adaptable materials for NGOs, educators and community facilitators working to build safer digital spaces.",
    toolkitSearchLabel: "Explore the resource collection",
    toolkitItemsCount: "resources",
    toolkitOpen: "Open resource",
    toolkitPrint: "Print / Save as PDF",
    toolkitClose: "Close resource",
    toolkitReading: "Preparation time",
    toolkitNote: "Adapt each resource to your audience, organisational safeguarding procedures and local context. These materials are educational tools, not legal, clinical or emergency-response protocols.",
    toolkitReady: "Ready to explore",
    toolkitFacilitator: "FACILITATOR RESOURCE",
    toolkitNoItems: "No resources in this category yet.",
    toolkitBack: "Back to resources",
    tip: "A small safety step",
    tipText: "Turn on multi-factor authentication for your most important accounts. It adds another layer of protection beyond your password.",
    supportTitle: "You deserve information you can trust.",
    supportText: "Safe Space shares educational information and signposts to external services. We are not an emergency service, legal practice or counselling provider.",
    directoryHeading: "Find support information in Senegal",
    directoryNote: "Explore official reporting channels and organisations that publish support information. Each listing explains what it is for and what Safe Space has or has not verified.",
    directoryButton: "Explore support information",
    directoryIntro: "Choose the type of information you need. A listing is not a guarantee of service availability, eligibility or outcome.",
    directorySearch: "Search by service, topic or organisation",
    directoryAll: "All resources",
    directorySourceChecked: "Source checked",
    directoryCall: "Call",
    directoryEmail: "Email",
    directoryWebsite: "Open website",
    directoryDetails: "Details and sources",
    directoryLastChecked: "Record checked",
    directoryCoverage: "Coverage",
    directoryProvider: "Service or organisation",
    directoryKind: "Type of resource",
    directoryLimit: "Important information",
    directorySources: "Sources used",
    directoryVerification: "Verification note",
    directoryNoResults: "No resources match your search. Try another term or category.",
    directoryEmergencyTitle: "Immediate danger?",
    directoryEmergencyText: "Safe Space is not an emergency service and cannot send help. For immediate emergencies in Senegal, use the official emergency contacts shown below or go to the nearest appropriate emergency service.",
    directoryListingCount: "resources",
    directoryUpdated: "Directory research date",
    directoryNoPhone: "No telephone number published here because a current number could not be confirmed.",
    directoryNoEmail: "No email address published here because a current address could not be confirmed.",
    directoryOpenSource: "Open source",
    directoryReturn: "Back to directory",
    contactHeading: "Contact details are being prepared",
    contactNote: "This prototype does not yet accept enquiries. Please do not send urgent requests or sensitive personal information.",
    privacyHeading: "Privacy and safety",
    privacyNote: "You can explore public resources without creating an account. This prototype does not include case submissions or a connected AI assistant. Full privacy information will be published before any data collection or AI service is introduced.",
    learn: "Explore topics",
    footer: "Safer Digital Spaces. Stronger Communities.",
    footerNote: "A digital-safety education and support-navigation project. Support information is reviewed before publication.",
    quickExit: "Quick exit",
    chatTitle: "Ask Safe Space",
    chatIntro: "I can help you explore digital-safety topics and find resources. You do not need to share personal details.",
    chatPlaceholder: "Ask a general digital-safety question…",
    send: "Send",
    prototype: "Chat assistant preview",
    prototypeText: "The AI assistant is not connected yet. Explore the learning resources while this feature is being developed.",
    close: "Close",
    search: "Search learning resources",
    aboutText: "Safe Space aims to make digital-safety education accessible, connect people with reliable support information, and equip community organisations with practical resources.",
    privacy: "Privacy & safety",
    contact: "Contact",
    menu: "Open menu",
    learningHeading: "Explore the learning library",
    learningIntro: "Practical, beginner-friendly guides to help you understand online harm and make informed digital-safety choices.",
    searchResources: "Search guides and topics",
    readResource: "Read guide",
    minutes: "min read",
    noResources: "No guides match your search. Try another word or choose a different topic.",
    closeArticle: "Close guide",
    learningNote: "These guides provide general educational information. They are not legal advice or a substitute for qualified local support."
  },
  fr: {
    nav: ["Accueil", "Apprendre", "Guides de sécurité", "Trouver du soutien", "Pour les organisations", "À propos"],
    eyebrow: "VOTRE VIE NUMÉRIQUE. VOS CHOIX.",
    hero: "Vivez votre monde numérique avec plus de sécurité.",
    intro: "Comprenez les préjudices en ligne, découvrez des moyens pratiques de protéger votre vie numérique et trouvez des informations fiables.",
    explore: "Explorer les ressources",
    ask: "Demander à Safe Space",
    individuals: "Je cherche des informations pour moi",
    organisations: "Je souhaite aider les autres",
    pathways: "Commencez ici",
    pathwaysIntro: "Trouvez des informations claires et des ressources pratiques pour avancer.",
    protect: "Protéger votre vie numérique",
    protectText: "Des conseils pratiques pour sécuriser vos comptes, votre vie privée et vos appareils.",
    understand: "Comprendre les préjudices en ligne",
    understandText: "Découvrez le harcèlement, l’usurpation d’identité, les menaces et d’autres comportements nuisibles.",
    support: "Trouver des informations de soutien",
    supportText: "Consultez des organisations et des informations officielles vérifiées.",
    share: "Apprendre et partager",
    shareText: "Utilisez des vidéos, des guides et des ressources d’atelier pour sensibiliser ensemble.",
    featured: "Apprendre pour agir",
    featuredText: "Des ressources accessibles pour la vie numérique quotidienne et l’apprentissage communautaire.",
    video: "Quand le harcèlement en ligne survient",
    videoText: "Une série éducative pour reconnaître le harcèlement en ligne et envisager des démarches plus sûres.",
    watch: "Explorer la vidéothèque",
    videoLibraryTitle: "Regarder les vidéos pédagogiques",
    videoLibraryIntro: "Ces vidéos font partie de la collection pédagogique de Safe Space. Regardez-les ici, puis découvrez les guides associés.",
    fullVideoLabel: "Vidéo complète",
    shortVideoLabel: "Vidéo courte",
    fullVideoDescription: "Regardez la vidéo complète dans le lecteur. Vous pouvez également l’ouvrir sur YouTube.",
    shortVideoDescription: "Regardez cette vidéo courte dans le lecteur. Vous pouvez également l’ouvrir sur YouTube.",
    openYouTube: "Ouvrir sur YouTube",
    relatedGuides: "Découvrir les guides associés",
    captionsNote: "Utilisez les commandes du lecteur YouTube pour activer les sous-titres lorsqu’ils sont disponibles. Les transcriptions pourront être ajoutées après leur préparation et leur vérification.",
    videoNumberOne: "Vidéo 1",
    videoNumberTwo: "Vidéo 2",
    organisationsTitle: "Aider les communautés à créer des espaces numériques plus sûrs",
    organisationsText: "Des outils pratiques pour les ONG, les éducateurs et les facilitateurs communautaires.",
    toolkit: "Explorer les ressources pour organisations",
    toolkitLabel: "OUTILS POUR L’APPRENTISSAGE COMMUNAUTAIRE",
    toolkitHeading: "Des ressources pour accompagner l’apprentissage",
    toolkitIntro: "Des supports pratiques et adaptables pour les ONG, les éducateurs et les facilitateurs communautaires qui souhaitent promouvoir des espaces numériques plus sûrs.",
    toolkitSearchLabel: "Explorer la collection de ressources",
    toolkitItemsCount: "ressources",
    toolkitOpen: "Ouvrir la ressource",
    toolkitPrint: "Imprimer / Enregistrer en PDF",
    toolkitClose: "Fermer la ressource",
    toolkitReading: "Temps de préparation",
    toolkitNote: "Adaptez chaque ressource à votre public, aux procédures de protection de votre organisation et au contexte local. Ces supports sont des outils pédagogiques, et non des protocoles juridiques, cliniques ou d’intervention d’urgence.",
    toolkitReady: "À découvrir",
    toolkitFacilitator: "RESSOURCE POUR FACILITATEURS",
    toolkitNoItems: "Aucune ressource dans cette catégorie pour le moment.",
    toolkitBack: "Retour aux ressources pour les organisations",
    tip: "Un petit geste de sécurité",
    tipText: "Activez l’authentification multifacteur pour vos comptes les plus importants. Elle ajoute une protection au-delà de votre mot de passe.",
    supportTitle: "Vous méritez des informations fiables.",
    supportText: "Safe Space propose des informations éducatives et oriente vers des services externes. Nous ne sommes ni un service d’urgence, ni un cabinet juridique, ni un service de conseil psychologique.",
    directoryHeading: "Trouver des informations de soutien au Sénégal",
    directoryNote: "Consultez les canaux officiels de signalement et les organisations qui publient des informations de soutien. Chaque fiche précise son objectif et ce que Safe Space a ou n’a pas vérifié.",
    directoryButton: "Consulter les informations de soutien",
    directoryIntro: "Choisissez le type d’information dont vous avez besoin. Une fiche ne garantit ni la disponibilité du service, ni l’éligibilité, ni un résultat.",
    directorySearch: "Rechercher un service, un thème ou une organisation",
    directoryAll: "Toutes les ressources",
    directorySourceChecked: "Source consultée",
    directoryCall: "Appeler",
    directoryEmail: "Courriel",
    directoryWebsite: "Ouvrir le site",
    directoryDetails: "Détails et sources",
    directoryLastChecked: "Fiche vérifiée le",
    directoryCoverage: "Zone de couverture",
    directoryProvider: "Service ou organisation",
    directoryKind: "Type de ressource",
    directoryLimit: "Information importante",
    directorySources: "Sources utilisées",
    directoryVerification: "Note de vérification",
    directoryNoResults: "Aucune ressource ne correspond à votre recherche. Essayez un autre terme ou une autre catégorie.",
    directoryEmergencyTitle: "Danger immédiat ?",
    directoryEmergencyText: "Safe Space n’est pas un service d’urgence et ne peut pas envoyer de secours. En cas d’urgence immédiate au Sénégal, utilisez les contacts officiels indiqués ci-dessous ou rendez-vous au service d’urgence approprié le plus proche.",
    directoryListingCount: "ressources",
    directoryUpdated: "Date de recherche de l’annuaire",
    directoryNoPhone: "Aucun numéro de téléphone n’est publié ici car un numéro actuel n’a pas pu être confirmé.",
    directoryNoEmail: "Aucune adresse électronique n’est publiée ici car une adresse actuelle n’a pas pu être confirmée.",
    directoryOpenSource: "Ouvrir la source",
    directoryReturn: "Retour à l’annuaire",
    contactHeading: "Les coordonnées de contact sont en préparation",
    contactNote: "Cette version de démonstration ne reçoit pas encore de demandes. N’envoyez pas d’informations personnelles sensibles ni de demandes urgentes.",
    privacyHeading: "Confidentialité et sécurité",
    privacyNote: "Vous pouvez consulter les ressources publiques sans créer de compte. Cette version ne permet pas de soumettre des dossiers et l’assistant IA n’est pas connecté. Les informations complètes sur la confidentialité seront publiées avant toute collecte de données ou intégration d’un service IA.",
    learn: "Explorer les thèmes",
    footer: "Des espaces numériques plus sûrs. Des communautés plus fortes.",
    footerNote: "Un projet d’éducation à la sécurité numérique et d’orientation vers des ressources de soutien.",
    quickExit: "Quitter rapidement",
    chatTitle: "Demander à Safe Space",
    chatIntro: "Je peux vous aider à explorer les sujets de sécurité numérique et à trouver des ressources. Vous n’avez pas besoin de partager des informations personnelles.",
    chatPlaceholder: "Posez une question générale sur la sécurité numérique…",
    send: "Envoyer",
    prototype: "Aperçu de l’assistant",
    prototypeText: "L’assistant IA n’est pas encore connecté. Consultez les ressources pédagogiques pendant son développement.",
    close: "Fermer",
    search: "Rechercher des ressources",
    aboutText: "Safe Space vise à rendre l’éducation à la sécurité numérique accessible, à orienter vers des informations fiables et à outiller les organisations communautaires.",
    privacy: "Confidentialité et sécurité",
    contact: "Contact",
    menu: "Ouvrir le menu",
    learningHeading: "Explorer la bibliothèque d’apprentissage",
    learningIntro: "Des guides pratiques et accessibles pour comprendre les préjudices en ligne et faire des choix éclairés en matière de sécurité numérique.",
    searchResources: "Rechercher des guides et des thèmes",
    readResource: "Lire le guide",
    minutes: "min de lecture",
    noResources: "Aucun guide ne correspond à votre recherche. Essayez un autre mot ou choisissez un autre thème.",
    closeArticle: "Fermer le guide",
    learningNote: "Ces guides fournissent des informations éducatives générales. Ils ne constituent pas un avis juridique et ne remplacent pas un accompagnement local qualifié."
  }
};

const topics = [
  { icon: LockKeyhole, title: "Account and device safety", detail: "Passwords, multi-factor authentication, privacy settings and account recovery." },
  { icon: MessageCircle, title: "Online harassment", detail: "Recognising harmful messages, threats, stalking and repeated unwanted contact." },
  { icon: Smartphone, title: "Privacy and consent", detail: "Digital boundaries, personal information and image-based abuse." },
  { icon: HeartHandshake, title: "Responding and finding help", detail: "Explore reporting options, evidence considerations and trusted support." }
];

function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedToolkit, setSelectedToolkit] = useState(null);
  const [toolkitCategory, setToolkitCategory] = useState("all");
  const [supportQuery, setSupportQuery] = useState("");
  const [supportCategory, setSupportCategory] = useState("all");
  const [selectedSupport, setSelectedSupport] = useState(null);
  const t = copy[lang];
  const supportTerm = supportQuery.trim().toLocaleLowerCase();
  const visibleSupportResources = supportResources.filter(resource => {
    const matchesCategory = supportCategory === "all" || resource.category === supportCategory;
    const fields = [resource.title[lang], resource.provider[lang], resource.description[lang], resource.coverage[lang], resource.kind[lang]].join(" ").toLocaleLowerCase();
    return matchesCategory && (!supportTerm || fields.includes(supportTerm));
  });
  const visibleToolkitResources = toolkitResources.filter(resource =>
    toolkitCategory === "all" || toolkitCategoryByResource[resource.id] === toolkitCategory
  );
  const searchTerm = query.trim().toLocaleLowerCase();
  const filteredResources = learningResources.filter((resource) => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const searchableText = [
      resource.title[lang], resource.summary[lang], resource.intro[lang],
      ...resource.sections.map(section => section.heading[lang] + " " + section.body[lang])
    ].join(" ").toLocaleLowerCase();
    return matchesCategory && (!searchTerm || searchableText.includes(searchTerm));
  });

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const quickExit = () => {
    // This navigates away; it cannot erase browser history or protect a monitored device.
    window.location.replace("https://www.wikipedia.org/");
  };

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={14} /> A welcoming place to learn about digital safety</div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Safe Space home">
          <span className="brand-mark"><ShieldCheck size={25} strokeWidth={1.8} /></span>
          <span><strong>Safe Space</strong><small>BY AOCREATIVITY</small></span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {t.nav.map((item, i) => <button key={item} onClick={() => goTo(["home","learn","guides","support","organisations","about"][i])}>{item}</button>)}
        </nav>
        <div className="header-actions">
          <button className="language" onClick={() => setLang(lang === "en" ? "fr" : "en")} aria-label="Switch language"><Globe2 size={16}/>{lang.toUpperCase()} <ChevronDown size={14}/></button>
          <button className="quick-exit" onClick={quickExit}>{t.quickExit}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-dot"></span>{t.eyebrow}</div>
            <h1>{t.hero}</h1>
            <p className="hero-lede">{t.intro}</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goTo("learn")}>{t.explore}<ArrowRight size={17}/></button>
              <button className="btn btn-secondary" onClick={() => setChatOpen(true)}><MessageCircle size={17}/>{t.ask}</button>
            </div>
            <div className="hero-trust"><ShieldCheck size={17}/> No account needed to explore public resources.</div>
          </div>
          <div className="hero-art" aria-label="Illustration of a protective shield surrounded by calm flowing shapes">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="orb orb-a"></div><div className="orb orb-b"></div>
            <div className="hero-shield"><ShieldCheck size={82} strokeWidth={1.25}/><span className="shield-spark">✦</span></div>
            <div className="float-note note-one"><LockKeyhole size={17}/> Your privacy matters</div>
            <div className="float-note note-two"><Leaf size={17}/> Learn at your pace</div>
          </div>
          <div className="hero-wave"></div>
        </section>

        <section className="audience-strip section-wrap">
          <button className="audience-card" onClick={() => goTo("guides")}><span className="audience-icon"><UserIcon/></span><span><strong>{t.individuals}</strong><small>Guidance, learning and support information</small></span><ArrowRight/></button>
          <button className="audience-card" onClick={() => goTo("organisations")}><span className="audience-icon"><Users/></span><span><strong>{t.organisations}</strong><small>Facilitator materials and community resources</small></span><ArrowRight/></button>
        </section>

        <section className="content-section section-wrap" id="learn">
          <div className="section-heading learning-heading">
            <div>
              <span className="eyebrow">{t.pathways}</span>
              <h2>{t.learningHeading}</h2>
              <p>{t.learningIntro}</p>
            </div>
            <div className="library-count"><BookOpen size={17}/><span>{filteredResources.length} {lang === "fr" ? "guides" : "guides"}</span></div>
          </div>
          <div className="search-box learning-search">
            <Search size={18}/>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.searchResources} aria-label={t.searchResources}/>
            {query && <button onClick={()=>setQuery("")}>×</button>}
          </div>
          <div className="category-filters" role="group" aria-label={t.learningHeading}>
            {learningCategories.map(category => <button key={category.id} className={activeCategory===category.id ? "filter-pill active" : "filter-pill"} onClick={()=>setActiveCategory(category.id)}>{category.label[lang]}</button>)}
          </div>
          {filteredResources.length > 0 ? <div className="learning-grid">
            {filteredResources.map(resource => <article className="learning-card" key={resource.id}>
              <div className="learning-card-top"><span className="learning-icon"><BookOpen size={20}/></span><span className="reading-time">{resource.minutes} {t.minutes}</span></div>
              <h3>{resource.title[lang]}</h3>
              <p>{resource.summary[lang]}</p>
              <button className="card-link" onClick={()=>setSelectedResource(resource)}>{t.readResource}<ArrowRight size={16}/></button>
            </article>)}
          </div> : <div className="no-results"><Search size={22}/><p>{t.noResources}</p></div>}
          <p className="learning-note"><ShieldCheck size={15}/>{t.learningNote}</p>
        </section>

        <section className="feature-section" id="guides">
          <div className="feature-inner section-wrap">
            <div className="feature-art"><div className="video-window"><div className="video-top"><i></i><i></i><i></i><span>SAFE SPACE LEARNING</span></div><div className="video-illustration"><div className="video-phone"><MessageCircle size={31}/><span></span><span></span><span></span></div><div className="video-sun"></div><div className="video-leaf leaf-left"></div><div className="video-leaf leaf-right"></div><PlayCircle size={48} className="play-mark"/></div></div></div>
            <div className="feature-copy"><span className="eyebrow">WATCH · REFLECT · LEARN</span><h2>{t.video}</h2><p>{t.videoText}</p><button className="btn btn-primary" onClick={()=>goTo("videos")}>{t.watch}<ArrowRight size={17}/></button><small className="placeholder-note">The two videos below are embedded from the YouTube links supplied for this project.</small></div>
          </div>
        </section>

        <section className="video-library-section section-wrap" id="videos">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WATCH · REFLECT · LEARN</span>
              <h2>{t.videoLibraryTitle}</h2>
              <p>{t.videoLibraryIntro}</p>
            </div>
            <div className="library-count"><PlayCircle size={17}/><span>2 {lang === "fr" ? "vidéos" : "videos"}</span></div>
          </div>
          <div className="video-grid">
            <article className="video-card">
              <div className="video-card-heading">
                <span className="video-type">{t.videoNumberOne} · {t.fullVideoLabel}</span>
                <span className="video-series">WHEN ONLINE HARASSMENT HAPPENS</span>
              </div>
              <div className="video-embed video-embed-wide">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/9aBGc1ApjnU"
                  title="When Online Harassment Happens - full video"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-card-copy">
                <h3>{t.video}</h3>
                <p>{t.fullVideoDescription}</p>
                <div className="video-actions">
                  <a className="video-text-link" href="https://youtu.be/9aBGc1ApjnU" target="_blank" rel="noreferrer">{t.openYouTube}<ExternalLink size={14}/></a>
                  <button className="video-text-link" onClick={()=>{setActiveCategory("harassment");goTo("learn");}}>{t.relatedGuides}<ArrowRight size={14}/></button>
                </div>
              </div>
            </article>
            <article className="video-card video-card-short">
              <div className="video-card-heading">
                <span className="video-type">{t.videoNumberTwo} · {t.shortVideoLabel}</span>
                <span className="video-series">WHEN ONLINE HARASSMENT HAPPENS</span>
              </div>
              <div className="short-video-stage">
                <div className="video-embed video-embed-short">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/MJCIjRcj0N0"
                    title="When Online Harassment Happens - short video"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="video-card-copy">
                <h3>{t.video}</h3>
                <p>{t.shortVideoDescription}</p>
                <div className="video-actions">
                  <a className="video-text-link" href="https://youtube.com/shorts/MJCIjRcj0N0" target="_blank" rel="noreferrer">{t.openYouTube}<ExternalLink size={14}/></a>
                  <button className="video-text-link" onClick={()=>{setActiveCategory("harassment");goTo("learn");}}>{t.relatedGuides}<ArrowRight size={14}/></button>
                </div>
              </div>
            </article>
          </div>
          <p className="video-caption-note"><ShieldCheck size={15}/>{t.captionsNote}</p>
        </section>

                <section className="organisation-section" id="organisations">
          <div className="organisation-inner section-wrap">
            <div className="organisation-icon"><Users size={35}/><span>✦</span></div>
            <div className="organisation-copy"><span className="eyebrow">{t.toolkitLabel}</span><h2>{t.organisationsTitle}</h2><p>{t.organisationsText}</p></div>
            <button className="btn btn-light" onClick={()=>goTo("organisation-resources")}>{t.toolkit}<ArrowRight size={17}/></button>
          </div>
        </section>

        <section className="organisation-resources section-wrap" id="organisation-resources">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{t.toolkitLabel}</span>
              <h2>{t.toolkitHeading}</h2>
              <p>{t.toolkitIntro}</p>
            </div>
            <div className="library-count"><FileText size={17}/><span>{toolkitResources.length} {t.toolkitItemsCount}</span></div>
          </div>
          <div className="toolkit-filters" role="group" aria-label={t.toolkitSearchLabel}>
            {toolkitCategories.map(category => <button key={category.id} className={toolkitCategory===category.id ? "filter-pill active" : "filter-pill"} onClick={()=>setToolkitCategory(category.id)}>{category.label[lang]}</button>)}
          </div>
          {visibleToolkitResources.length > 0 ? <div className="toolkit-grid">
            {visibleToolkitResources.map(resource => <article className="toolkit-card" key={resource.id}>
              <div className="toolkit-card-top"><span className="toolkit-icon"><FileText size={21}/></span><span className="toolkit-format">{resource.format[lang]}</span></div>
              <span className="toolkit-kicker">{t.toolkitFacilitator}</span>
              <h3>{resource.title[lang]}</h3>
              <p>{resource.summary[lang]}</p>
              <div className="toolkit-card-footer"><span className="reading-time">{resource.minutes} {lang==="fr" ? "min" : "min"}</span><button className="card-link" onClick={()=>setSelectedToolkit(resource)}>{t.toolkitOpen}<ArrowRight size={16}/></button></div>
            </article>)}
          </div> : <div className="no-results"><p>{t.toolkitNoItems}</p></div>}
          <p className="toolkit-note"><ShieldCheck size={15}/>{t.toolkitNote}</p>
        </section>

        <section className="tip-section section-wrap">
          <div className="tip-icon"><LockKeyhole size={25}/></div>
          <div><span className="eyebrow">{t.tip}</span><h3>{t.tip}</h3><p>{t.tipText}</p></div>
          <Sparkles className="tip-spark"/>
        </section>

                <section className="support-section section-wrap" id="support">
          <div className="support-copy"><span className="eyebrow">INFORMATION · OPTIONS · CONNECTION</span><h2>{t.supportTitle}</h2><p>{t.supportText}</p></div>
          <div className="support-art"><div className="support-circle"><LifeBuoy size={65}/></div><div className="support-dot dot-one"></div><div className="support-dot dot-two"></div><div className="support-dot dot-three"></div></div>
        </section>

        <section className="support-directory-section section-wrap" id="directory">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{lang==="fr" ? "SÉNÉGAL · RESSOURCES ET ORIENTATION" : "SENEGAL · RESOURCES AND REFERRAL"}</span>
              <h2>{t.directoryHeading}</h2>
              <p>{t.directoryIntro}</p>
            </div>
            <div className="library-count"><HeartHandshake size={17}/><span>{visibleSupportResources.length} {t.directoryListingCount}</span></div>
          </div>
          <div className="directory-search search-box">
            <Search size={18}/>
            <input value={supportQuery} onChange={e=>setSupportQuery(e.target.value)} placeholder={t.directorySearch} aria-label={t.directorySearch}/>
            {supportQuery && <button onClick={()=>setSupportQuery("")} aria-label={lang==="fr"?"Effacer la recherche":"Clear search"}>×</button>}
          </div>
          <div className="directory-filters" role="group" aria-label={t.directoryHeading}>
            {supportCategories.map(category=><button key={category.id} className={supportCategory===category.id?"filter-pill active":"filter-pill"} onClick={()=>setSupportCategory(category.id)}>{category.id==="all"?t.directoryAll:category.label[lang]}</button>)}
          </div>
          {visibleSupportResources.length>0 ? <div className="support-grid">
            {visibleSupportResources.map(resource=><article className="support-card" key={resource.id}>
              <div className="support-card-top"><span className="support-kind">{resource.kind[lang]}</span><span className="support-status"><CheckCircle2 size={13}/>{t.directorySourceChecked}</span></div>
              <span className="support-provider">{resource.provider[lang]}</span>
              <h3>{resource.title[lang]}</h3>
              <p>{resource.description[lang]}</p>
              <div className="support-coverage"><MapPin size={14}/>{resource.coverage[lang]}</div>
              <div className="support-contact-actions">
                {resource.phone && <a className="support-contact-link" href={"tel:"+resource.phone}><Phone size={14}/>{resource.phone}</a>}
                {resource.emergencyNumbers?.map(item=><a className="support-contact-link emergency-link" href={"tel:"+item.number} key={item.number}><Phone size={14}/>{item.label[lang]} {item.number}</a>)}
                {resource.email && <a className="support-contact-link" href={"mailto:"+resource.email}><Mail size={14}/>{t.directoryEmail}</a>}
              </div>
              <div className="support-card-footer">
                <a className="btn btn-secondary support-open-link" href={resource.url} target="_blank" rel="noreferrer">{resource.contactLabel[lang]}<ExternalLink size={14}/></a>
                <button className="support-details-button" onClick={()=>setSelectedSupport(resource)}>{t.directoryDetails}<ArrowRight size={14}/></button>
              </div>
            </article>)}
          </div> : <div className="no-results"><Search size={22}/><p>{t.directoryNoResults}</p></div>}
          <div className="directory-emergency-note">
            <div className="directory-emergency-icon"><LifeBuoy size={21}/></div>
            <div><strong>{t.directoryEmergencyTitle}</strong><p>{t.directoryEmergencyText}</p></div>
          </div>
          <p className="directory-maintenance-note">{t.directoryUpdated}: 8 November 2026. Contact details and service availability should be reconfirmed before relying on them. Safe Space has not test-called the listed numbers or submitted reports through the portals.</p>
        </section>

        <section className="about-section" id="about"><div className="section-wrap about-inner"><div><span className="eyebrow">WHY SAFE SPACE</span><h2>A little more knowledge. A little more confidence.</h2></div><p>{t.aboutText}</p></div></section>
        <section className="legal-section" id="privacy"><div className="section-wrap legal-inner"><div className="legal-icon"><ShieldCheck size={24}/></div><div><span className="eyebrow">{t.privacy}</span><h2>{t.privacyHeading}</h2><p>{t.privacyNote}</p></div></div></section>
        <section className="legal-section contact-section" id="contact"><div className="section-wrap legal-inner"><div className="legal-icon"><MessageCircle size={24}/></div><div><span className="eyebrow">{t.contact}</span><h2>{t.contactHeading}</h2><p>{t.contactNote}</p></div></div></section>
      </main>

      <footer className="footer"><div className="section-wrap footer-main"><div className="footer-brand"><a className="brand brand-light" href="#home"><span className="brand-mark"><ShieldCheck/></span><span><strong>Safe Space</strong><small>BY AOCREATIVITY</small></span></a><p>{t.footer}</p></div><div className="footer-links"><button onClick={()=>goTo("learn")}>{t.nav[1]}</button><button onClick={()=>goTo("support")}>{t.nav[3]}</button><button onClick={()=>goTo("privacy")}>{t.privacy}</button><button onClick={()=>goTo("contact")}>{t.contact}</button></div></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} Safe Space · Prototype</span><span>{t.footerNote}</span></div></footer>

      {selectedSupport && <div className="support-detail-backdrop" onClick={()=>setSelectedSupport(null)}>
        <article className="support-detail-modal" role="dialog" aria-modal="true" aria-label={selectedSupport.title[lang]} onClick={e=>e.stopPropagation()}>
          <header className="support-detail-header">
            <div className="support-detail-icon"><HeartHandshake size={22}/></div>
            <div className="support-detail-heading">
              <span className="eyebrow">{selectedSupport.kind[lang]}</span>
              <h2>{selectedSupport.title[lang]}</h2>
              <span className="support-provider">{selectedSupport.provider[lang]}</span>
            </div>
            <button className="article-close" onClick={()=>setSelectedSupport(null)} aria-label={t.toolkitClose}><X/></button>
          </header>
          <div className="support-detail-body">
            <p className="article-intro">{selectedSupport.description[lang]}</p>
            <div className="support-detail-facts">
              <div><span>{t.directoryCoverage}</span><strong>{selectedSupport.coverage[lang]}</strong></div>
              <div><span>{t.directoryLastChecked}</span><strong>{selectedSupport.checked}</strong></div>
            </div>
            <section className="support-detail-block"><h3>{t.directoryLimit}</h3><p>{selectedSupport.note[lang]}</p></section>
            <section className="support-detail-block"><h3>{t.directoryVerification}</h3><p>{selectedSupport.checkStatus[lang]}</p></section>
            <section className="support-detail-block"><h3>{t.directorySources}</h3>
              <ul>{selectedSupport.sources.map((source,index)=><li key={index}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<ExternalLink size={13}/></a></li>)}</ul>
            </section>
            <div className="support-detail-actions">
              <a className="btn btn-primary" href={selectedSupport.url} target="_blank" rel="noreferrer">{selectedSupport.contactLabel[lang]}<ExternalLink size={15}/></a>
              <button className="btn btn-secondary" onClick={()=>setSelectedSupport(null)}>{t.directoryReturn}</button>
            </div>
            <p className="article-disclaimer">{t.directoryNote}</p>
          </div>
        </article>
      </div>}
      {selectedToolkit && <div className="toolkit-backdrop" onClick={()=>setSelectedToolkit(null)}>
        <article className="toolkit-modal" role="dialog" aria-modal="true" aria-label={selectedToolkit.title[lang]} onClick={e=>e.stopPropagation()}>
          <header className="toolkit-modal-header">
            <span className="toolkit-icon"><FileText size={21}/></span>
            <div className="toolkit-modal-heading">
              <span className="eyebrow">{selectedToolkit.format[lang]}</span>
              <h2>{selectedToolkit.title[lang]}</h2>
              <span className="reading-time">{t.toolkitReading}: {selectedToolkit.minutes} {lang==="fr" ? "min" : "min"}</span>
            </div>
            <button className="article-close" onClick={()=>setSelectedToolkit(null)} aria-label={t.toolkitClose}><X/></button>
          </header>
          <div className="toolkit-modal-body">
            <p className="article-intro">{selectedToolkit.intro[lang]}</p>
            {selectedToolkit.sections.map((section,index)=><section className="toolkit-content-section" key={index}>
              <h3>{section.heading[lang]}</h3>
              <p>{section.body[lang]}</p>
              {section.bullets[lang].length>0 && <ul>{section.bullets[lang].map((bullet,i)=><li key={i}>{bullet}</li>)}</ul>}
            </section>)}
            <div className="article-reminder"><ShieldCheck size={19}/><p>{selectedToolkit.caution[lang]}</p></div>
            <div className="toolkit-modal-actions">
              <button className="btn btn-primary" onClick={()=>window.print()}><Printer size={16}/>{t.toolkitPrint}</button>
              <button className="btn btn-secondary" onClick={()=>setSelectedToolkit(null)}>{t.toolkitBack}</button>
            </div>
            <p className="article-disclaimer">{t.toolkitNote}</p>
          </div>
        </article>
      </div>}
      {selectedResource && <div className="article-backdrop" onClick={()=>setSelectedResource(null)}>
        <article className="article-modal" role="dialog" aria-modal="true" aria-label={selectedResource.title[lang]} onClick={e=>e.stopPropagation()}>
          <header className="article-modal-header">
            <span className="learning-icon"><BookOpen size={20}/></span>
            <div className="article-modal-heading"><span className="eyebrow">{learningCategories.find(category=>category.id===selectedResource.category)?.label[lang]}</span><h2>{selectedResource.title[lang]}</h2><span className="reading-time">{selectedResource.minutes} {t.minutes}</span></div>
            <button className="article-close" onClick={()=>setSelectedResource(null)} aria-label={t.closeArticle}><X/></button>
          </header>
          <div className="article-modal-body">
            <p className="article-intro">{selectedResource.intro[lang]}</p>
            {selectedResource.sections.map((section,index)=><section className="article-section" key={index}><h3>{section.heading[lang]}</h3><p>{section.body[lang]}</p></section>)}
            <div className="article-reminder"><ShieldCheck size={19}/><p>{selectedResource.reminder[lang]}</p></div>
            <p className="article-disclaimer">{t.learningNote}</p>
          </div>
        </article>
      </div>}
      <button className="chat-launcher" onClick={()=>setChatOpen(true)} aria-label={t.ask}><MessageCircle size={21}/><span>{t.ask}</span></button>
      {chatOpen && <div className="chat-backdrop" onClick={()=>setChatOpen(false)}><section className="chat-panel" role="dialog" aria-modal="true" aria-label={t.chatTitle} onClick={e=>e.stopPropagation()}><header><div className="chat-avatar"><ShieldCheck/></div><div><strong>{t.chatTitle}</strong><small>{t.prototype}</small></div><button onClick={()=>setChatOpen(false)} aria-label={t.close}><X/></button></header><div className="chat-body"><div className="chat-message"><p>{t.chatIntro}</p></div><div className="chat-notice"><Sparkles size={17}/><div><strong>{t.prototype}</strong><p>{t.prototypeText}</p></div></div></div><form className="chat-input" onSubmit={e=>{e.preventDefault();setQuery("");}}><input placeholder={t.chatPlaceholder} aria-label={t.chatPlaceholder} disabled/><button disabled>{t.send}</button></form></section></div>}
      <div className="safety-disclaimer">Safe Space is an educational and resource-navigation prototype. It is not an emergency service. Quick exit cannot erase browser history or make a monitored device safe.</div>
    </div>
  );
}

function UserIcon(){return <LifeBuoy/>}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);