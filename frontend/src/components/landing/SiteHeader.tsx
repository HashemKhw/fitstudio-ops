import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm text-white">
            FS
          </span>
          <span className="hidden sm:inline">FitStudio Ops</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
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
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button href="#demo" variant="ghost" className="hidden px-3 sm:inline-flex">
            Book demo
          </Button>
          <Button href="#trial" variant="primary" className="px-3 sm:px-5">
            Start free trial
          </Button>
        </div>
      </Container>
    </header>
  );
}
