import Link from "next/link";
import { HEADER_NAV_LINKS } from "@/lib/navLinks";
import { Container } from "@/components/ui/Container";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";

const navLinkClass =
  "relative whitespace-nowrap transition-colors duration-300 ease-out text-[#cb98ff]/80 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#ffd709] after:transition-transform after:duration-500 after:ease-out hover:text-[#ffd709] hover:after:scale-x-100 uppercase italic tracking-tight skew-x-[-5deg]";

const scrollLinkClass =
  "shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-[#cb98ff]/80 transition-colors hover:bg-[#001e1e] hover:text-[#ffd709] active:bg-black uppercase italic tracking-[0.15em]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#ffd709] bg-[#001111]/95 pt-[env(safe-area-inset-top)] backdrop-blur-xl shadow-[0_20px_50px_rgba(125,38,205,0.4)] transition-shadow duration-500 ease-out supports-[backdrop-filter]:bg-[#001111]/90">
      <Container className="flex min-h-[3.25rem] items-center justify-between gap-2 py-2 sm:min-h-16 sm:gap-4 sm:py-0 lg:min-h-[4.25rem]">
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 font-semibold tracking-tight text-[#ffd709] transition-transform duration-500 ease-out hover:scale-[1.02] uppercase italic skew-x-[-5deg]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-none border-2 border-[#ffd709] bg-[#7D26CD] text-sm text-white shadow-md shadow-[#7D26CD]/50 transition-shadow duration-500 ease-out hover:shadow-lg hover:shadow-[#ff7cba]/70 sm:h-8 sm:w-8">
              FS
            </span>
            <span className="hidden min-w-0 truncate text-sm text-[#cb98ff] sm:inline sm:max-w-none sm:text-base">
              FitStudio Ops
            </span>
          </Link>
          <nav
            className="hidden items-center gap-6 text-sm font-medium text-[#cb98ff]/80 lg:flex xl:gap-8"
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
      <div className="border-t border-slate-800 bg-slate-900/80 lg:hidden">
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
