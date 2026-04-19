import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: "orange" | "blue";
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let animId: number;

    const COUNT = 120;
    const MAX_DIST = 140;
    const MOUSE_RADIUS = 110;
    const MOUSE_FORCE = 1.8;

    let particles: Particle[] = [];

    function createParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.25,
        color: Math.random() > 0.75 ? "blue" : "orange",
      }));
    }

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      createParticles();
    }

    resize();

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      // ── Connexions ──
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            // Couleur de la ligne selon les deux particules
            const isBlue = particles[i].color === "blue" || particles[j].color === "blue";
            ctx.strokeStyle = isBlue
              ? `rgba(99,130,246,${alpha})`
              : `rgba(245,158,11,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Particules ──
      for (const p of particles) {
        // Couleurs
        const rgb = p.color === "orange" ? "245,158,11" : "99,130,246";

        // Dot avec glow
        ctx.save();
        ctx.shadowColor = p.color === "orange"
          ? "rgba(245,158,11,0.6)"
          : "rgba(99,130,246,0.5)";
        ctx.shadowBlur = p.size * 5;
        ctx.fillStyle = `rgba(${rgb},${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // ── Mise à jour position ──
        p.x += p.vx;
        p.y += p.vy;

        // Rebond sur les bords
        if (p.x < 0 || p.x > W) { p.vx *= -1; p.x = Math.max(0, Math.min(W, p.x)); }
        if (p.y < 0 || p.y > H) { p.vy *= -1; p.y = Math.max(0, Math.min(H, p.y)); }

        // Répulsion souris
        const mdx = p.x - mx;
        const mdy = p.y - my;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_RADIUS && mdist > 0) {
          const force = (1 - mdist / MOUSE_RADIUS) * MOUSE_FORCE;
          p.vx += (mdx / mdist) * force * 0.08;
          p.vy += (mdy / mdist) * force * 0.08;
        }

        // Friction légère pour éviter l'emballement
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Vitesse min/max
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.8) { p.vx = (p.vx / speed) * 1.8; p.vy = (p.vy / speed) * 1.8; }
        if (speed < 0.1) { p.vx += (Math.random() - 0.5) * 0.05; p.vy += (Math.random() - 0.5) * 0.05; }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    function onResize() { resize(); }
    function onMove(e: MouseEvent) {
      mouse.current = { x: e.clientX, y: e.clientY };
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    }
    function onLeave() { mouse.current = { x: -9999, y: -9999 }; }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Spotlight souris */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(350px circle at var(--mx,50%) var(--my,50%), rgba(245,158,11,0.05), transparent 55%)",
      }} />
    </div>
  );
}
