export interface ExperienceAssociative {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiencesAssociative: ExperienceAssociative[] = [
  {
    id: "kryptosphere-president",
    title: "Président — Antenne ESGI",
    organization: "KRYPTOSPHERE",
    period: "2025 — Présent",
    description:
      "Direction de l'antenne locale de la plus grande association étudiante blockchain en Europe. Management d'équipe, stratégie, et représentation.",
    highlights: [
      "Management d'une équipe de 15+ membres",
      "Organisation de workshops et conférences sur les nouvelles technologies",
      "Création de l'antenne ESGI en 2025"
    ],
  },
  {
    id: "kryptosphere-events",
    title: "Responsable Pôle Événements & Hackathons",
    organization: "KRYPTOSPHERE Europe",
    period: "2026 — Présent",
    description:
      "Participation à la coordination des événements et hackathons à l'échelle européenne.",
    highlights: [
      "Coordination d'événements multi-campus à travers l'Europe",
      "Aide à l'organisation de hackathons blockchain avec 100+ participants",
      "Développement d'outils de gestion d'événements pour aider les résponsables d'antennes locales"
    ],
  },
  {
    id: "kryptosphere-website",
    title: "Responsable site internet",
    organization: "KRYPTOSPHERE Europe",
    period: "2026 — Présent",
    description:
      "Gestion et amélioration du site internet de l'association à l'échelle européenne.",
    highlights: [
      "Coordination des mises à jour et améliorations du site",
      "Optimisation de l'expérience utilisateur et de la performance",
      "Développement de nouvelles fonctionnalités pour la gestion des informations et des événements"
    ],
  }
];
