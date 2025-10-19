import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "white" | "gray" | "gradient";
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function Section({
  children,
  className = "",
  background = "default",
  title,
  subtitle,
  centered = false,
}: SectionProps) {
  const backgrounds = {
    default: "bg-background",
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-soft",
  };

  return (
    <section
      className={`section-padding ${backgrounds[background]} ${className}`}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className={`mb-16 ${centered ? "text-center" : ""}`}>
            {title && (
              <h2 className="text-display-lg font-bold text-text mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-text-light max-w-3xl ${centered ? 'mx-auto' : ''}">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
