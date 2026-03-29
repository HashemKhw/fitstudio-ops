import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT_SECTION_ID, getContactMailtoUrl } from "@/lib/cta";

export function Footer() {
  const mailto = getContactMailtoUrl();

  return (
    <footer className="border-t border-zinc-200 bg-white py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-zinc-900">FitStudio Ops</p>
            <p className="mt-1 text-sm text-zinc-500">Operations software for gyms and fitness studios.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-600">
            <Link href="#pricing" className="hover:text-zinc-900">
              Pricing
            </Link>
            <a href={`#${CONTACT_SECTION_ID}`} className="hover:text-zinc-900">
              Contact
            </a>
            <a href={mailto} className="hover:text-zinc-900">
              Email
            </a>
            <span className="text-zinc-400">Privacy · Terms (add your legal pages)</span>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-400 sm:text-left">
          © {new Date().getFullYear()} FitStudio Ops. Demo product scaffold—replace branding and copy as needed.
        </p>
      </Container>
    </footer>
  );
}
