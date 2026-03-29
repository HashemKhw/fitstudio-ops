import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({ id, children, className = "", as: Tag = "section" }: SectionProps) {
  return (
    <Tag id={id} className={`py-16 sm:py-24 ${className}`}>
      {children}
    </Tag>
  );
}
