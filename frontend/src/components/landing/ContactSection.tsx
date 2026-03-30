import { Container } from "@/components/ui/Container";
import { CONTACT_SECTION_ID, getWhatsAppUrl } from "@/lib/cta";
import { ContactForm } from "@/components/landing/ContactForm";

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id={CONTACT_SECTION_ID}>
      <div className="relative overflow-hidden bg-gradient-to-br from-[#7D26CD] via-[#430077] to-[#001111] py-12 text-white sm:py-20 border-t-4 border-[#ffd709]/60">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffd709]/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#cb98ff]/25 blur-3xl" aria-hidden />
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl uppercase italic skew-x-[-5deg]">
              Contact the command center
            </h2>
            <p className="mt-3 text-base text-[#e2fffe] sm:mt-4 sm:text-lg">
              Send a message and we&apos;ll get back to you shortly.
            </p>
          </div>
        </Container>
      </div>
      <div className="border-t border-[#cb98ff]/40 bg-[#001111] py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            <h3 className="text-center text-lg font-semibold text-slate-50 sm:text-xl">Your details</h3>
            <p className="mt-2 text-center text-sm leading-relaxed text-[#9cfbfa]">
              Fill out the form below, or use WhatsApp if you prefer.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
            <div className="relative mt-10">
              <div className="absolute inset-0 flex items-center" aria-hidden>
                <div className="w-full border-t border-[#cb98ff]/40" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[#001111] px-3 text-[#59bab9] uppercase tracking-[0.25em] text-xs">
                  or
                </span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-md items-center justify-center rounded-none border-2 border-[#ffd709] bg-[#7D26CD] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#ffd709] hover:text-[#001111] hover:shadow-lg hover:shadow-[#7D26CD]/40 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd709] sm:w-auto uppercase italic tracking-[0.2em]"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
