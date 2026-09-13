import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string | ReactNode;
  subtext?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subtext,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 letter-spacing-wider">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
        {headline}
      </h2>
      {subtext && (
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
          {subtext}
        </p>
      )}
    </div>
  );
}
