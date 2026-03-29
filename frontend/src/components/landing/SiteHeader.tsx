import Link from "next/link";
import { HEADER_NAV_LINKS } from "@/lib/navLinks";
import { Container } from "@/components/ui/Container";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";

const navLinkClass =
  "relative whitespace-nowrap transition-colors duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-500 after:ease-out hover:text-zinc-900 hover:after:scale-x-100";

const scrollLinkClass =
  "shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-zinc-900 active:bg-zinc-100";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-md transition-shadow duration-500 ease-out hover:shadow-sm supports-[backdrop-filter]:bg-white/85">
      <Container className="flex min-h-[3.25rem] items-center justify-between gap-2 py-2 sm:min-h-16 sm:gap-4 sm:py-0 lg:min-h-[4.25rem]">
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 font-semibold tracking-tight text-zinc-900 transition-transform duration-500 ease-out hover:scale-[1.02]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-sm text-white shadow-md shadow-brand-600/30 transition-shadow duration-500 ease-out hover:shadow-lg hover:shadow-brand-600/40 sm:h-8 sm:w-8">
              FS
            </span>
            <span className="hidden min-w-0 truncate sm:inline sm:max-w-none sm:text-base">FitStudio Ops</span>
          </Link>
          <nav
            className="hidden items-center gap-6 text-sm font-medium text-zinc-600 lg:flex xl:gap-8"
            aria-label="Primary"
          >
            {HEADER_NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={navLinkClass}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <CtaButtonGroup compact />
        </div>
      </Container>

      {/* Below lg: same links as desktop, always present — swipe/scroll horizontally (no client JS). */}
      <div className="border-t border-zinc-100 bg-zinc-50/90 lg:hidden">
        <Container>
          <nav
            className="-mx-4 flex gap-1 overflow-x-auto overscroll-x-contain px-4 py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:gap-2 sm:px-6"
            aria-label="Page sections"
          >
            {HEADER_NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={scrollLinkClass}>
                {label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
