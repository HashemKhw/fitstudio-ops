import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({ id, children, className = "", as: Tag = "section" }: SectionProps) {
  return (
    <Tag id={id} className={`py-12 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </Tag>
  );
}
