export type Project = {
  id: string;
  featured?: boolean;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  image?: string[];
  technologies: string[];
  cours?: string;
  githubUrl?: string;
  liveUrl?: string;
};
export const projects: Project[] = [
  {
  id: "1",
  featured: true,
  title: "Provisions - Assistant Alimentaire Intelligent",
  description:
    "Application mobile multiplateforme de gestion alimentaire avec IA pour réduire le gaspillage et optimiser les achats.",
  longDescription:
    "Application complète de gestion alimentaire développée en méthodologie Agile sur 3 sprints. Solution tout-en-un permettant la gestion intelligente du garde-manger avec reconnaissance d'aliments par IA et photo, planification hebdomadaire des repas, création de listes d'épicerie dynamiques, recherche et consultation de recettes, et générateur de recettes basé sur les ingrédients disponibles. Intégration fluide entre tous les modules permettant d'ajouter directement les ingrédients d'une recette à la liste d'épicerie. Architecture full-stack avec authentification sécurisée, base de données non-relationnelle, et application mobile compatible Android et iOS. Vise à réduire concrètement le gaspillage alimentaire.",
  tags: ["React Native", "IA", "Mobile", "Full-Stack", "SQL"],
  features: [
    "Authentification sécurisée (inscription, connexion)",
    "Ajout d'aliments par photo avec reconnaissance IA",
    "Gestion complète du garde-manger ",
    "Liste d'épicerie intelligente (ajout, cochage)",
    "Base de données de recettes avec recherche avancée",
    "Planificateur de repas hebdomadaire avec calendrier",
    "Générateur de recettes basé sur ingrédients disponibles",
    "Intégration recette → liste d'épicerie en un clic",
    "Application mobile Android et iOS",
    "Landing page de présentation responsive",
    "Synchronisation multi-appareils",
  ],
  image: ["/provisions-home.webp", "/provisions-recipes.webp", "/provisions-shopping-list.webp","/provisions-meal-planner.webp","/provisions-recipe-detail.webp"],
  technologies: [
    "React Native",
    "Expo",
    "Node.js",
    "Express",
    "Firebase",
    "Firebase Firestore",
    "Firebase Auth",
    "API REST",
    "Zod",
    "TypeScript",
  ],
  cours: "420-712-AH",
  liveUrl: "https://provisions-app.vercel.app/",
},
  {
    id: "2",
    featured: true,
    title: "Boutique Animo - Système de Design Complet",
    description:
      "Conception complète d'une boutique en ligne responsive avec prototype interactif desktop et mobile.",
    longDescription:
      "Élaboration du concept visuel complet de la boutique Animo, depuis la maquette filaire jusqu'au prototype interactif. Création d'un design system cohérent, moodboard personnalisé, et développement d'interfaces adaptatives pour grand écran et mobile avec animations et micro-interactions.",
    tags: ["Figma", "UI/UX", "Design System"],
    features: [
      "Moodboard avec palette de couleurs et typographies",
      "Guide de style et design system",
      "Design responsive (desktop et mobile)",
      "Prototype interactif avec navigation fluide",
      "Animations et micro-interactions",
      "Composants UI réutilisables",
      "Page d'accueil et page produit",
    ],
    image: ["/animo-home.webp", ],
    technologies: [
      "Figma",
      "Prototyping",
      "UI Components",
      "Responsive Design",
    ],
    cours: "570-701-AH",
  },
  {
    id: "3",
    featured: true,
    title: "Forum Read It - Microservices Node.js",
    description:
      "Architecture microservices avec Node.js, authentification JWT et gestion de données.",
    longDescription:
      "Forum de discussion complet avec architecture N-tiers (Client, Server, APIs, Database). Système d'authentification sécurisé par JWT, gestion des utilisateurs avec rôles (admin/user), publication de messages avec réponses, système de likes/dislikes, et recherche de contenus.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Authentification JWT (login/register)",
      "Gestion des rôles (admin/user)",
      "Création et consultation de messages",
      "Système de réponses aux messages",
      "Likes et dislikes",
      "Recherche de messages et utilisateurs",
      "Profil utilisateur et mes messages",
      "Suppression admin des messages",
      "Architecture microservices",
      "API RESTful",
    ],
    image: ["/placeholder-project.jpg"],
    technologies: ["Node.js", "Express", "MongoDB", "Postman", "JWT",
      "TypeScript"],
    cours: "420-708-AH",
    githubUrl: "#",
  },
  {
    id: "4",
    featured: true,
    title: "Libraire - Plateforme E-commerce Laravel",
    description:
      "Plateforme e-commerce complète de gestion de bibliothèque avec paiements intégrés et panneau admin.",
    longDescription:
      "Développement d'une application web transactionnelle complète pour la gestion d'une bibliothèque en ligne. Système d'authentification avec gestion des rôles (admin/utilisateur), CRUD complet pour les livres, panier d'achat dynamique, intégration des APIs de paiement PayPal et Stripe, système de remises et coupons, historique des transactions, recherche avancée avec filtres multiples, et section de contact avec gestion des messages. Architecture MVC avec Laravel et base de données MySQL relationnelle.",
    tags: ["Laravel", "E-commerce", "PayPal", "Stripe", "MySQL"],
    features: [
      "Authentification et gestion des rôles",
      "Panier d'achat avec calcul automatique (taxes, remises)",
      "Système de remises et coupons",
      "Recherche avancée (titre, auteur, année, prix)",
      "Authentification utilisateur",
      "Intégration PayPal et Stripe",
      "Interface responsive et moderne",
      "Interface admin",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "PayPal API",
      "Stripe API",
      "Blade",
      "Bootstrap",
    ],
    cours: "420-709-AH",
    githubUrl: "https://github.com/francistalbot/402.709-projet1-Bibliotheque",
  },
  {
    id: "5",
    featured: true,
    title: "RouteTracker - Application de Gestion de Trajets GPS",
    description:
      "Application mobile multiplateforme de tracking GPS avec synchronisation cloud et mode hors ligne.",
    longDescription:
      "Application React Native complète pour la gestion et le suivi de trajets GPS. Authentification sécurisée avec Firebase Auth, synchronisation des données entre Cloud Firestore et SQLite pour le support hors ligne, tracking GPS en temps réel avec affichage sur carte interactive, système de partage de trajets entre utilisateurs, catégorisation des trajets (personnel/affaire) avec navigation par onglets, thème clair/sombre personnalisable, et pagination optimisée des listes avec lazy loading.",
    tags: ["React Native", "Firebase", "Google Maps", "Expo", "Zustand"],
    features: [
      "Authentification Firebase",
      "Tracking GPS en temps réel",
      "Routes sécurisées avec Expo Router",
      "Synchronisation Firestore + SQLite (mode hors ligne)",
      "Types de trajets: Personnel et Affaire",
      "Navigation par onglets (FlatList + lazy loading)",
      "Partage de trajets par email entre utilisateurs",
      "Mode clair et mode sombre",
      "Compatible iOS et Android",
      "Gestion d'état centralisée (auth, user, password reset) avec Zustand",
      "Navigation multi-écrans",
      "Intégration APIs REST",
      "Mode clair/sombre",
    ],
    image: ["/placeholder-project.jpg"],
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "Zustand",
      "Firebase",
      "Firebase Auth",
      "Cloud Firestore",
      "SQLite",
      "Expo Location",
      "MapView",
      "TypeScript",
    ],
    cours: "420-713-AH",
    githubUrl: "#",
  },
  {
    id: "6",
    title: "Application Docker Vulnérable XSS",
    description:
      "Démonstration de vulnérabilité Reflected XSS et implémentation des correctifs de sécurité.",
    longDescription:
      "Développement d'une application web containerisée avec Docker, intentionnellement vulnérable au Reflected XSS (Cross-Site Scripting). Analyse complète de la vulnérabilité avec score CVSS, démonstration de l'exploitation avec charges utiles malveillantes et captures d'écran détaillées. Implémentation de correctifs de sécurité incluant la validation des entrées, l'échappement HTML, et les Content Security Policy (CSP). Déploiement avec Docker Compose pour orchestrer les services. Documentation complète du processus d'attaque et des mesures de remédiation.",
    tags: ["Docker", "Sécurité", "XSS"],
    features: [
      "Vulnérabilité Reflected XSS démontrée",
      "Version corrigée avec mesures de sécurité",
      "Validation et échappement des entrées",
      "Content Security Policy (CSP)",
      "Docker Compose pour orchestration",
      "Score CVSS de la vulnérabilité",
      "Rapport d'analyse de sécurité complet",
    ],
    image: ["/placeholder-project.jpg"],
    technologies: [
      "Docker",
      "Docker Compose",
      "Security Testing",
      "OWASP",
      "HTML Sanitization",
      "CSP",
    ],
    cours: "420-711-AH",
  },
  {
    id: "7",
    title: "Suite de Tests Complète et Pipeline CI/CD",
    description:
      "Tests automatisés multi-niveaux (unitaires, composants, E2E) avec analyse de code et optimisation de performance.",
    longDescription:
      "Développement d'une suite de tests complète avec tests unitaires (Vitest), tests de composants (Cypress Component Testing), et tests de bout en bout (Cypress E2E). Analyse architecturale avec Sokrates.dev incluant identification et correction de problèmes de couplage, duplication et complexité du code. Audit de performance avec Lighthouse (desktop et mobile) avec optimisation mesurable (LCP, CLS, TBT). Pipeline d'intégration continue avec GitHub Actions exécutant automatiquement tous les tests, analyses de code et audits de performance sur chaque push/PR. Documentation détaillée des métriques avant/après optimisation.",
    tags: ["Testing", "CI/CD", "Performance"],
    features: [
      "Tests unitaires avec Vitest",
      "Tests de composants Cypress CT",
      "Tests E2E Cypress",
      "Analyse architecturale Sokrates.dev",
      "Refactoring basé sur métriques (LOC, couplage, duplication)",
      "Audit Lighthouse (desktop + mobile)",
      "Optimisations de performance mesurables",
      "Pipeline GitHub Actions complet",
      "Artifacts automatiques (vidéos, screenshots)",
      "Documentation avant/après avec métriques",
      "Exécution automatique sur push/PR",
      "Couverture de code et rapports",
    ],
    technologies: [
      "Vitest",
      "Cypress",
      "Zod",
      "Cypress Component Testing",
      "GitHub Actions",
      "Sokrates.dev",
      "Lighthouse",
      "CI/CD",
      "Performance Optimization",
    ],
    cours: "420-715-AH",
  },
];
