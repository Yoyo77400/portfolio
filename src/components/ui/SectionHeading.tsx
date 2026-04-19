import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", className)}>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl font-display">
        {title}
      </h2>
    </div>
  );
}
