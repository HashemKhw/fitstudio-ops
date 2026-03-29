import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT_SECTION_ID, getContactMailtoUrl } from "@/lib/cta";

export function Footer() {
  const mailto = getContactMailtoUrl();

  return (
    <footer className="border-t border-zinc-200 bg-white py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
      <Container>
        <div className="flex flex-col items-stretch justify-between gap-8 sm:flex-row sm:items-center">
          <div className="min-w-0 text-center sm:text-left">
            <p className="font-semibold text-zinc-900">FitStudio Ops</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-500">
              Operations software for gyms and fitness studios.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-zinc-600 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-6 sm:gap-y-2">
            <Link href="#pricing" className="min-h-11 touch-manipulation py-2 hover:text-zinc-900 sm:min-h-0 sm:py-0">
              Pricing
            </Link>
            <a
              href={`#${CONTACT_SECTION_ID}`}
              className="min-h-11 touch-manipulation py-2 hover:text-zinc-900 sm:min-h-0 sm:py-0"
            >
              Contact
            </a>
            <a href={mailto} className="min-h-11 touch-manipulation py-2 hover:text-zinc-900 sm:min-h-0 sm:py-0">
              Email
            </a>
            <span className="text-xs leading-snug text-zinc-400 sm:text-sm">
              Privacy · Terms (add your legal pages)
            </span>
          </div>
        </div>
        <p className="mt-8 text-center text-xs leading-relaxed text-zinc-400 sm:text-left">
          © {new Date().getFullYear()} FitStudio Ops. Demo product scaffold—replace branding and copy as needed.
        </p>
      </Container>
    </footer>
  );
}
