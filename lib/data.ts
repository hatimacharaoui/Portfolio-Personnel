export const profile = {
  name: 'Hatim Acharaoui',
  title: 'Développeur Full-Stack Java',
  intro:
    "Je suis un développeur web full-stack titulaire d'une Licence Professionnelle en Développement Web et Applications Mobiles, avec une formation spécialisée en développement web full-stack Java Spring Boot.",
  email: 'hatimacharaoui@gmail.com',
  phone: '+212 672 503 079',
  linkedin: 'https://www.linkedin.com/in/hatim-acharaoui/',
  github: 'https://github.com/hatimacharaoui',
  cvUrl: '/cv-hatim-acharaoui.pdf',
}

export const about = {
  paragraphs: [
    "Je suis un développeur web full-stack titulaire d'une Licence Professionnelle en Développement Web et Applications Mobiles.",
    "J'ai suivi une formation spécialisée en développement web full-stack Java Spring Boot, ce qui me permet de concevoir des applications complètes, du front-end à la base de données.",
    "Je maîtrise la création d'API REST, la gestion des routes, des requêtes et des erreurs, ainsi que la collaboration via Git et le déploiement sur des plateformes modernes.",
  ],
  highlights: [
    { label: 'Formation', value: 'Full-Stack Java' },
    { label: 'Langues', value: 'AR · FR · EN' },
    { label: 'Localisation', value: 'Beni Mellal, Maroc' },
  ],
}

export const services = [
  {
    icon: 'Code2',
    title: 'Développement Web Full-Stack',
    description:
      "Conception d'applications web complètes, du front-end à la base de données, avec React et Spring Boot.",
  },
  {
    icon: 'Server',
    title: 'Développement d’API REST',
    description:
      "Création d'API REST avec Spring Boot : gestion des routes, des requêtes et des erreurs de manière structurée.",
  },
  {
    icon: 'Database',
    title: 'Gestion de Bases de Données',
    description:
      'Modélisation et gestion de bases de données SQL / MySQL pour des applications fiables et performantes.',
  },
  {
    icon: 'Layout',
    title: 'Intégration Front-End',
    description:
      "Développement d'interfaces réactives et modernes avec HTML, CSS, JavaScript, React et Tailwind CSS.",
  },
  {
    icon: 'GitBranch',
    title: 'Versioning avec Git',
    description:
      'Gestion du versioning, documentation des modifications et collaboration sur un dépôt avec Git et GitHub.',
  },
  {
    icon: 'Rocket',
    title: 'Déploiement d’Applications',
    description:
      "Déploiement et mise en ligne d'applications sur Vercel, Netlify et Render.",
  },
]

export const skillGroups = [
  {
    title: 'Langages',
    icon: 'Braces',
    skills: ['Java', 'JavaScript'],
  },
  {
    title: 'Front-End',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Back-End',
    icon: 'Server',
    skills: ['Spring Boot', 'Spring Security', 'API REST', 'MVC Pattern'],
  },
  {
    title: 'Bases de Données',
    icon: 'Database',
    skills: ['SQL', 'MySQL'],
  },
  {
    title: 'Outils & DevOps',
    icon: 'Wrench',
    skills: ['Docker', 'Git', 'GitHub', 'Postman', 'Swagger'],
  },
  {
    title: 'Déploiement',
    icon: 'Rocket',
    skills: ['Vercel', 'Netlify', 'Render'],
  },
]

export const projects = [
  {
    title: 'LogiTrack',
    subtitle: 'Gestion logistique',
    image: '/projects/logitrack.png',
    description:
        'Le système LogiTrack est une application de gestion logistique permettant de gérer les clients, les produits et les commandes. Il est développé avec Spring Boot, Spring Data JPA et React JS, et offre une interface moderne communiquant de manière sécurisée avec une API REST selon le rôle de chaque utilisateur.',
    tags: [ 'Java 21','Spring Boot', 'React JS', 'Spring Security','Docker', 'MapStruct', 'Swagger', 'MySQL'],
    github: 'https://github.com/hatimacharaoui/LogiTrack_Gestion_Logistique',
  },
  {
    title: 'HealthCare+',
    subtitle: 'Système de gestion médicale',
    image: '/projects/healthcare.png',
    description:
      'Le système HealthCare+ est une application de gestion médicale permettant de gérer les patients, les médecins, les rendez-vous et les dossiers médicaux. Il est développé avec Spring Boot et React JS, et offre une interface moderne communiquant de manière sécurisée avec une API REST.',
    tags: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'MySQL',
      'Docker',
      'MapStruct',
      'Swagger',
      'JUnit',
      'React JS',
    ],
    github: 'https://github.com/hatimacharaoui/HealthCare_SpringBoot_React',
  },
  {
    title: 'FleetFlow',
    subtitle: 'Application de gestion logistique',
    image: '/projects/fleetflow.png',
    description:
      "Le système FleetFlow est une application de gestion des livraisons permettant de gérer les clients, les véhicules, les chauffeurs et les livraisons. Il est développé avec Spring Boot et offre une API REST pour faciliter l'organisation et le suivi des opérations logistiques.",
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker', 'MapStruct', 'React JS', 'Swagger'],
    github: 'https://github.com/ENAA-School-Student/FleetFlow-Part5',
  },
]

export const experiences = [

  {
    role: 'Commerce en ligne',
    company: 'Freelance',
    period: '2018 – 2025',
    type: 'Freelance',
    description:
      "Gestion d'activités de commerce en ligne en tant qu'indépendant.",
  },
]

export const education = [
  {
    degree: 'Développement Web Full-Stack Java',
    school: 'École Numérique Ahmed Al Hansali (ENAA)',
    period: '2025 – 2026',
    location: 'Beni Mellal, Maroc',
    image: '/education/enaa.png',
  },
  {
    degree: 'Licence Professionnelle — Développement Web et Applications Mobiles',
    school: 'Faculté des Sciences et Techniques de Béni Mellal',
    period: '2023 – 2024',
    location: 'Beni Mellal, Maroc',
    image: '/education/fst.png',
  },
  {
    degree: 'Master Spécialisé Énergétique',
    school: 'ENSET Rabat',
    period: '2016 – 2018',
    location: 'Rabat, Maroc',
    image: '/education/ENSET.png',
  },
]

export const languages = [
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Courant' },
]

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Éducation', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
