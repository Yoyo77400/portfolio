import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/datas/projects";
import { cn } from "@/lib/utils";
import { ExternalLink, GitFork } from "lucide-react";

function getCategoryVariant(category: string): "orange" | "blue" | "default" {
  if (category === "web3") return "orange";
  if (category === "fullstack") return "blue";
  return "default";
}

function getCategoryLabel(category: string) {
  if (category === "web3") return "Web3";
  if (category === "fullstack") return "Full-Stack";
  return "Backend";
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_#f59e0b08,_transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title="Mes projets" />
        </ScrollReveal>

        {/* Online projects */}
        {featured.length > 0 && (
          <>
            <ScrollReveal>
              <h3 className="mb-8 font-mono text-sm text-text-muted tracking-wide uppercase text-center md:text-left">
                Projets online
              </h3>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.1}>
                  <TiltCard className={cn(i === 0 && "md:col-span-2")}>
                    <article className="group relative h-full rounded-2xl glass-card p-8 transition-all duration-500 hover:border-forge-orange/20 overflow-hidden">
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-forge-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="mb-4 flex items-center justify-between">
                        <Badge variant={getCategoryVariant(project.category)}>
                          {getCategoryLabel(project.category)}
                        </Badge>
                        <div className="flex items-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-muted hover:text-text-primary transition-colors"
                              aria-label="GitHub"
                            >
                              <GitFork className="w-4 h-4" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-muted hover:text-text-primary transition-colors"
                              aria-label="Live demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-forge-orange transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary">
                        {project.description}
                      </p>

                      {project.contract && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-background/50 px-3 py-2 font-mono text-xs text-text-muted border border-border">
                          <span className="text-forge-orange">Contract:</span>
                          {project.contract}
                        </div>
                      )}

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-text-muted bg-white/5 rounded-md px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(600px_at_var(--mouse-x,50%)_var(--mouse-y,50%),_#f59e0b08,_transparent)]" />
                    </article>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        {/* Divider */}
        {featured.length > 0 && others.length > 0 && (
          <div className="section-divider my-16" />
        )}

        {/* Academic projects */}
        {others.length > 0 && (
          <ScrollReveal delay={0.2}>
            <h3 className="mb-8 font-mono text-sm text-text-muted tracking-wide uppercase text-center md:text-left">
              Projets académiques
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {others.map((project) => (
                <article
                  key={project.id}
                  className="group rounded-xl glass-card p-6 transition-all duration-300 hover:border-border-hover"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant={getCategoryVariant(project.category)}>
                        {getCategoryLabel(project.category)}
                      </Badge>
                      <h4 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-forge-orange transition-colors">
                        {project.title}
                      </h4>
                      <p className="mt-2 text-sm text-text-secondary">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-primary transition-colors"
                        >
                          <GitFork className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-text-muted bg-white/5 rounded-md px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
