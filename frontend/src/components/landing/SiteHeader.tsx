import Link from "next/link";
import { CONTACT_SECTION_ID } from "@/lib/cta";
import { Container } from "@/components/ui/Container";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md transition-shadow duration-500 ease-out hover:shadow-sm">
      <Container className="flex min-h-16 flex-col gap-4 py-3 sm:h-auto sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0 lg:min-h-[4.25rem]">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900 transition-transform duration-500 ease-out hover:scale-[1.02]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-sm text-white shadow-md shadow-brand-600/30 transition-shadow duration-500 ease-out hover:shadow-lg hover:shadow-brand-600/40">
              FS
            </span>
            <span className="hidden sm:inline">FitStudio Ops</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex lg:gap-8">
            <a href="#problem" className="relative transition-colors duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-500 after:ease-out hover:text-zinc-900 hover:after:scale-x-100">
              Why us
            </a>
            <a href="#features" className="relative transition-colors duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-500 after:ease-out hover:text-zinc-900 hover:after:scale-x-100">
              Features
            </a>
            <a href="#preview" className="relative transition-colors duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-500 after:ease-out hover:text-zinc-900 hover:after:scale-x-100">
              Product
            </a>
            <a href="#pricing" className="relative transition-colors duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-500 after:ease-out hover:text-zinc-900 hover:after:scale-x-100">
              Pricing
            </a>
            <a
              href={`#${CONTACT_SECTION_ID}`}
              className="relative transition-colors duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-500 after:ease-out hover:text-zinc-900 hover:after:scale-x-100"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end lg:flex-nowrap">
          <CtaButtonGroup compact />
        </div>
      </Container>
    </header>
  );
}
