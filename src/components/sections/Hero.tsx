import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";

const techBadges = [
  "Solidity", "React", "TypeScript", "Node.js", "Web3",
  "Foundry", "Ethers.js", "Next.js", "Docker", "CI/CD",
  "PHP", "Python", "Rust", "SmartPy", "DeFi", "Tokenization"
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-white/60 tracking-widest uppercase">
            Disponible pour construire vos projets Web3
          </span>
        </motion.div>

        {/* Name — full width centered */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display font-bold leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(5rem, 16vw, 13rem)" }}
        >
          <span
            style={{
              background: "linear-gradient(180deg, #ffffff 40%, rgba(255,255,255,0.55) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            YOHAN
          </span>
        </motion.h1>

        {/* Orange separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="my-8 h-[1px] w-full max-w-md"
          style={{
            background: "linear-gradient(90deg, transparent, #f59e0b, transparent)",
          }}
        />

        {/* Two columns */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left: presentation + skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="font-mono text-lg sm:text-xl tracking-wider">
              <span className="text-forge-orange">Blockchain</span>
              <span className="text-white/25 mx-3">/</span>
              <span className="text-white/80">Architect</span>
              <span className="text-white/25 mx-3">&</span>
              <span className="text-forge-blue">Builder</span>
            </p>

            <p className="mt-5 max-w-md text-base text-white/50 leading-relaxed">
              Je conçois et développe des applications web3 de bout en bout —
              smart contracts, backends, et interfaces. Etudiant et Président de l'antenne{" "}
              <span className="text-white/80">KRYPTOSPHERE ESGI</span>.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-2 max-w-md"
            >
              {techBadges.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.05 + i * 0.04 }}
                >
                  <Badge variant="orange">{tech}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: portrait — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="relative hidden md:block shrink-0 w-64 lg:w-72"
          >
            {/* Orange glow behind */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(245,158,11,0.3) 0%, transparent 60%)",
                filter: "blur(32px)",
                transform: "scale(1.2)",
              }}
            />

            {/* Image with vignette overlay */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/avatar.png"
                alt="Yohan Georgelin"
                className="w-full object-cover object-top"
              />
              {/* Vignette — fades edges into background */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse 80% 85% at 50% 42%, transparent 45%, #0a0a0a 80%)",
                }}
              />
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
