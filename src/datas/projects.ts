export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: "web3" | "fullstack" | "backend";
  github?: string;
  live?: string;
  contract?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "the-12th-door",
    title: "The 12th Door",
    description:
      "Application web3 développée lors du Hackathon Chiliz — billetterie NFT et gestion d'accès on-chain.",
    stack: ["Solidity", "TypeScript", "React", "Ethers.js", "Node.js"],
    category: "web3",
    github: "https://github.com/Yoyo77400/The-12Th-Door-Front",
    featured: false,
  },
  {
    id: "arenaflow",
    title: "ArenaFlow",
    description:
      "Plateforme de billetterie décentralisée avec NFT tickets, meta-transactions et validation QR on-chain.",
    stack: ["Solidity", "Foundry", "TypeScript", "React", "Node.js", "MongoDB", "Dynamic.xyz"],
    category: "web3",
    github: "https://github.com/Yoyo77400/ArenaFlow-FrontEnd",
    featured: false,
  },
  {
    id: "actify",
    title: "Actify",
    description:
      "Marketplace d'actifs numériques full-stack avec panel d'administration et gestion des ventes.",
    stack: ["Nuxt 3", "Vue 3", "TypeScript", "Node.js", "Prisma", "MongoDB", "TailwindCSS", "Docker"],
    category: "fullstack",
    featured: false,
  },
  {
    id: "crowdtrust",
    title: "CrowdTrust",
    description:
      "Plateforme de crowdfunding décentralisé sur Tezos avec modes de vote multiples et mécanisme anti-reentrancy.",
    stack: ["SmartPy", "Python", "Tezos"],
    category: "web3",
    github: "https://github.com/Yoyo77400/CrowdTrust_SC",
    featured: false,
  },
  {
    id: "docker-ecommerce",
    title: "E-Commerce Microservices",
    description:
      "Plateforme e-commerce en microservices avec Docker Swarm, CI/CD GitLab et déploiement multi-environnement.",
    stack: ["Node.js", "Vue.js", "MongoDB", "Docker", "Docker Swarm", "Nginx", "GitLab CI/CD"],
    category: "backend",
    github: "https://github.com/Yoyo77400/Dockers-Ecommerce-Exam",
    featured: false,
  },
  {
    id: "rwa-save-the-world",
    title: "RWA Academic Project",
    description:
      "Tokenisation d'actifs réels (Real World Assets) sur blockchain via smart contracts Solidity/Foundry.",
    stack: ["Solidity", "Foundry", "TypeScript"],
    category: "web3",
    github: "https://github.com/Yoyo77400/RWA-Save-The-World",
    featured: false,
  },
  {
    id: "kryptosphere-pitchathon-ethcc",
    title: "Pitchathon KRYPTOSPHERE × EthCC",
    description:
      "Création de la page de l'événement de pitchathon KRYTPSOHERE x EthCC[9] sur le site KRYPTOSPHERE.",
    stack: ["React", "TypeScript", "TailwindCSS"],
    category: "fullstack",
    live: "https://www.kryptosphere.org/fr/pitchathon-ethcc",
    featured: true,
  },
];
