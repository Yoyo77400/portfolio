import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "blue";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-mono font-medium",
        variant === "default" && "bg-surface-light text-text-secondary",
        variant === "orange" && "bg-forge-orange/10 text-forge-orange border border-forge-orange/20",
        variant === "blue" && "bg-forge-blue/10 text-forge-blue border border-forge-blue/20",
        className
      )}
    >
      {children}
    </span>
  );
}
