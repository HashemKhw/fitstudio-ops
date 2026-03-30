import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#7D26CD] text-white shadow-md shadow-[#7D26CD]/40 hover:-translate-y-0.5 hover:bg-[#ffd709] hover:text-[#001111] hover:shadow-lg hover:shadow-[#ff7cba]/60 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd709]",
  secondary:
    "bg-[#001111] text-[#cb98ff] shadow-sm ring-1 ring-inset ring-[#2a3548] hover:-translate-y-0.5 hover:bg-[#001e1e] hover:text-[#ffd709] hover:shadow-md active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cb98ff]",
  ghost:
    "text-[#ffd709] hover:bg-[#001717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd709]",
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  className = "",
  variant = "primary",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 touch-manipulation items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-out sm:min-h-0 sm:px-5 sm:py-3 sm:text-base";

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
