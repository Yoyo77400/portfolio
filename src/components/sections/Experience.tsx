import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experiencesPro } from "@/datas/experiences-pro";
import { experiencesAssociative } from "@/datas/experiences-associative";

function TimelineCard({
  title,
  organization,
  period,
  description,
  highlights,
  stack,
  variant,
  index,
}: {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  stack?: string[];
  variant: "orange" | "blue";
  index: number;
}) {
  const isOrange = variant === "orange";

  return (
    <ScrollReveal delay={index * 0.12} direction="left">
      <div className="relative pl-14">
        {/* Dot */}
        <div className="absolute left-2.75 top-2">
          <div className={`h-4.25 w-4.25 rounded-full border-2 ${
            isOrange ? "border-forge-orange bg-forge-orange/30" : "border-forge-blue bg-forge-blue/30"
          }`} />
          <div className={`absolute inset-0 rounded-full blur-md ${
            isOrange ? "bg-forge-orange/20" : "bg-forge-blue/20"
          }`} />
        </div>

        {/* Card */}
        <div className="group rounded-xl glass-card p-6 transition-all duration-300 hover:border-border-hover">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Badge variant={variant}>
              {isOrange ? "Associatif" : "Professionnel"}
            </Badge>
            <span className="font-mono text-xs text-text-muted">{period}</span>
          </div>

          <h3 className="text-xl font-bold text-text-primary group-hover:text-forge-orange transition-colors">
            {title}
          </h3>
          <p className={`mt-1 font-mono text-sm ${isOrange ? "text-forge-orange/80" : "text-forge-blue/80"}`}>
            {organization}
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">{description}</p>

          <ul className="mt-4 space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${isOrange ? "bg-forge-orange" : "bg-forge-blue"}`} />
                {h}
              </li>
            ))}
          </ul>

          {stack && (
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="text-xs font-mono text-text-muted bg-white/5 rounded-md px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute top-1/4 right-0 w-100 h-100 bg-[radial-gradient(ellipse,#3b82f608,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title="Mon Parcours" />
        </ScrollReveal>

        {/* ── Expériences professionnelles & académiques ── */}
        <div className="mb-16">
          <ScrollReveal>
            <p className="font-mono text-xs text-forge-blue tracking-wide uppercase mb-8 text-center md:text-left">
              — Professionnel & Académique
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4.75 top-0 bottom-0 w-px">
              <div className="h-full bg-linear-to-b from-forge-blue to-transparent" />
            </div>
            <div className="space-y-10">
              {experiencesPro.map((exp, i) => (
                <TimelineCard key={exp.id} {...exp} variant="blue" index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="section-divider my-16" />

        {/* ── Expériences associatives ── */}
        <div>
          <ScrollReveal>
            <p className="font-mono text-xs text-forge-orange tracking-wide uppercase mb-8 text-center md:text-left">
              — Associatif
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4.75 top-0 bottom-0 w-px">
              <div className="h-full bg-linear-to-b from-forge-orange to-transparent" />
            </div>
            <div className="space-y-10">
              {experiencesAssociative.map((exp, i) => (
                <TimelineCard key={exp.id} {...exp} variant="orange" index={i} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
