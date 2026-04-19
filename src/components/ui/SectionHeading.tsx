import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, className, centered }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", className)}>
      <h2 className={cn(
        "mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary font-display text-center",
        !centered && "md:text-left"
      )}>
        {title}
      </h2>
    </div>
  );
}
