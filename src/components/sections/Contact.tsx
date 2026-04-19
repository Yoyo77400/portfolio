import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/Yoyo77400", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/yohan-georgelin", icon: LinkedInIcon },
  { label: "Twitter / X", href: "https://x.com/yohan_gln92", icon: XIcon },
  { label: "Email", href: "mailto:yohan.georgelin@gmail.com", icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      {/* Section glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-[radial-gradient(ellipse,_#f59e0b0a,_transparent_70%)] pointer-events-none" />

      <div className="section-divider mb-16" />

      <div className="mx-auto max-w-4xl text-center px-10 pb-10">
        <ScrollReveal>
          <SectionHeading title="Travaillons ensemble" centered />

          <p className="max-w-xl mx-auto text-lg text-text-secondary leading-relaxed">
            Que ce soit pour un projet blockchain, une collaboration technique, ou
            simplement échanger — n'hésitez pas à me contacter !
          </p>

          <a
            href="mailto:yohan.georgelin@gmail.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-forge-orange/50 bg-forge-orange/5 px-8 py-4 font-medium text-forge-orange transition-all duration-300 hover:bg-forge-orange/10 hover:border-forge-orange glow-hover"
          >
            <Mail className="w-5 h-5" />
            Me contacter
          </a>

          <div className="mt-12 flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label={social.label}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl glass-card transition-all duration-300 group-hover:border-forge-orange/20 glow-hover">
                  <social.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono">{social.label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 text-center">
        <div className="section-divider mb-8" />
        <p className="font-mono text-xs text-text-muted">
          Let's build the future of web3 together ! 
          <span className="mx-2 text-forge-orange">•</span>
          © {new Date().getFullYear()} Yohan
        </p>
      </div>
    </section>
  );
}
