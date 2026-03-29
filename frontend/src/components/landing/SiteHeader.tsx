import Link from "next/link";
import { CONTACT_SECTION_ID } from "@/lib/cta";
import { Container } from "@/components/ui/Container";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <Container className="flex min-h-16 flex-col gap-4 py-3 sm:h-auto sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0 lg:min-h-[4.25rem]">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-sm text-white">
              FS
            </span>
            <span className="hidden sm:inline">FitStudio Ops</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex lg:gap-8">
            <a href="#problem" className="hover:text-zinc-900">
              Why us
            </a>
            <a href="#features" className="hover:text-zinc-900">
              Features
            </a>
            <a href="#preview" className="hover:text-zinc-900">
              Product
            </a>
            <a href="#pricing" className="hover:text-zinc-900">
              Pricing
            </a>
            <a href={`#${CONTACT_SECTION_ID}`} className="hover:text-zinc-900">
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
