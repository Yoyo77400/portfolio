export interface ExperiencePro {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  stack?: string[];
}

export const experiencesPro: ExperiencePro[] = [
  {
    id: "Fullstack-dev",
    title: "Développeur Full-Stack",
    organization: "Dedalus",
    period: "2024 — Présent",
    description:
      "Conception et amélioration de solutions pour logiciels dans le domaine de la santé et gestion de laboratoire.",
    highlights: [
      "Architectures backend PHP",
      "Intégration frontend (blade) + javascript",
      "Optimisation de la performance et sécurité",
      "Tests unitaires et code review"
    ],
    stack: ["PHP", "JavaScript", "Blade", "SQL", "Git"],
  },
  {
    id: "student",
    title: "Etudes — Ingénierie de la Blockchain",
    organization: "ESGI",
    period: "2024 — Présent",
    description:
      "Formation avancée dans la compréhension, l'application et le développement des technologies blockchain.",
    highlights: [
      "Architecture logicielle et design patterns",
      "Blockchain avancée et smart contracts",
      "DevOps et infrastructure cloud",
    ],
    stack: ["Solidity", "Hardhat", "Foundry", "Git", "Docker", "Python", "Rust", "Node.js", "Vue.js", "React", "TypeScript", "PostgreSQL", "MongoDB", "Tezos", "XRPL", "Solana", "ZKPs", "Layer 2 solutions"],
  },
  {
    id: "stage-dev-web",
    title: "Développeur Symfony",
    organization: "Graphik Channel",
    period: "Septembre 2023 — Octobre 2023",
    description:
      "Développement de progiciels et d'interfaces web en PHP/Symfony pour les clients de l'agence.",
    highlights: [
      "Développement de fonctionnalités sur un site existant pour un client",
      "Correction de bugs et amélioration du code PHP/Symfony",
      "Échanges directs avec le client pour recueillir les besoins et valider les livraisons",
    ],
    stack: ["PHP", "Symfony", "JavaScript", "HTML/CSS", "Git"],
  },
  {
    id: "formation-devweb",
    title: "Titre Professionnel — Développeur Web/Web Mobile",
    organization: "NextFormation",
    period: "Mars 2023 — Octobre 2023",
    description:
      "Formation intensive couvrant l'ensemble du cycle de développement web, du maquettage au déploiement.",
    highlights: [
      "Développement front-end : HTML/CSS, JavaScript, React",
      "Développement back-end : PHP, Node.js, bases de données SQL/NoSQL",
      "Conception et maquettage d'interfaces web et mobile",
    ],
    stack: ["HTML/CSS", "JavaScript", "React", "PHP", "Node.js", "SQL", "MongoDB"],
  },
  {
    id: "sncf",
    title: "Technicien des installations Télécoms",
    organization: "SNCF",
    period: "2016-2024",
    description:
      "Maintenance et supervision des installations télécoms pour la sécurité ferroviaire et l'information voyageurs.",
    highlights: [
      "Maintenance préventive et corrective",
      "Supervision et gestion des incidents",
      "Collaboration avec les équipes de terrain et les fournisseurs",
      "Respect strict des normes de sécurité et de qualité"
    ],
    stack: ["TOIP", "VOIP", "Vidéosurveillance", "Système de contrôle d'accès et sécurité", "WDM", "Transmission Audio-Fréquence", "Réseaux IP", "Systèmes Radio"],
  }
];
