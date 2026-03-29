import Link from "next/link";
import { CONTACT_SECTION_ID } from "@/lib/cta";
import { Container } from "@/components/ui/Container";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";
import { MobileNav } from "@/components/landing/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-md transition-shadow duration-500 ease-out hover:shadow-sm supports-[backdrop-filter]:bg-white/85">
      <Container className="flex min-h-[3.5rem] flex-col gap-3 py-2.5 sm:min-h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0 lg:min-h-[4.25rem]">
        <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:flex-initial md:justify-start md:gap-0">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 font-semibold tracking-tight text-zinc-900 transition-transform duration-500 ease-out hover:scale-[1.02]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-sm text-white shadow-md shadow-brand-600/30 transition-shadow duration-500 ease-out hover:shadow-lg hover:shadow-brand-600/40 sm:h-8 sm:w-8">
              FS
            </span>
            <span className="hidden min-w-0 truncate sm:inline sm:max-w-none sm:text-base">FitStudio Ops</span>
          </Link>
          <MobileNav />
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
        <div className="flex w-full flex-wrap items-stretch justify-center sm:w-auto sm:items-center sm:justify-end lg:flex-nowrap">
          <CtaButtonGroup compact className="w-full sm:w-auto" />
        </div>
      </Container>
    </header>
  );
}
