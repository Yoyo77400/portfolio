import { useState, useEffect, useRef } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
    // Let the fade-out animation play, then unmount
    setTimeout(() => setVisible(false), 800);
  };

  useEffect(() => {
    const duration = 2000;
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setProgress(eased);

      if (p >= 1) {
        clearInterval(timer);
        setTimeout(finish, 400);
      }
    }, 16);

    // SAFETY: force complete after 5 seconds no matter what
    const safety = setTimeout(finish, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(safety);
    };
  }, []);

  if (!visible) return null;

  const done = completedRef.current;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #0a0a0a 0%, #050505 100%)",
        opacity: done ? 0 : 1,
        transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: done ? "none" : "auto",
      }}
    >
      {/* Animated background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, rgba(245, 158, 11, ${progress * 0.05}), transparent 60%)`,
        }}
      />

      {/* Logo container */}
      <div className="relative mb-10">
        {/* Outer spinning ring */}
        <div
          className="absolute -inset-8 rounded-full border border-forge-orange/10"
          style={{
            transform: `rotate(${progress * 360}deg)`,
            opacity: progress,
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-forge-orange" />
        </div>

        {/* Middle ring */}
        <div
          className="absolute -inset-4 rounded-full border border-forge-blue/10"
          style={{
            transform: `rotate(${-progress * 270}deg)`,
            opacity: progress * 0.8,
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-1 w-1 rounded-full bg-forge-blue" />
        </div>

        {/* Logo */}
        <div
          className="relative h-20 w-20 rounded-2xl flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(245, 158, 11, ${progress * 0.1}), rgba(59, 130, 246, ${progress * 0.06}))`,
            border: `1px solid rgba(245, 158, 11, ${progress * 0.3})`,
            boxShadow: `0 0 ${progress * 60}px rgba(245, 158, 11, ${progress * 0.2})`,
            transform: `scale(${0.7 + progress * 0.3})`,
          }}
        >
          <span
            className="font-mono text-4xl font-black"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: Math.min(progress * 2, 1),
            }}
          >
            Y
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative w-56 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress * 100}%`,
            background: "linear-gradient(90deg, #f59e0b, #ef4444, #3b82f6)",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full"
          style={{
            left: `${progress * 100}%`,
            background: "#f59e0b",
            boxShadow: "0 0 10px #f59e0b, 0 0 20px rgba(245, 158, 11, 0.5)",
            opacity: progress > 0.02 ? 1 : 0,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Text */}
      <p
        className="mt-6 font-mono text-xs tracking-[0.3em] uppercase"
        style={{ color: `rgba(245, 158, 11, ${Math.min(progress * 2, 0.6)})` }}
      >
        {progress < 0.3 ? "Initializing..." : progress < 0.7 ? "Loading forge..." : "Ready"}
      </p>

      {/* Percentage */}
      <p
        className="mt-2 font-mono text-2xl font-bold"
        style={{ color: `rgba(245, 158, 11, ${Math.min(progress * 3, 0.4)})` }}
      >
        {Math.round(progress * 100)}%
      </p>
    </div>
  );
}
