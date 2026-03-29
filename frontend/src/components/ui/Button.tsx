import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-md shadow-brand-600/20 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
  secondary:
    "bg-white text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-md active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400",
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
