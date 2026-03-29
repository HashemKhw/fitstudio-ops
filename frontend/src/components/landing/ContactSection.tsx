import { Container } from "@/components/ui/Container";
import { CONTACT_SECTION_ID, getWhatsAppUrl } from "@/lib/cta";
import { ContactForm } from "@/components/landing/ContactForm";

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id={CONTACT_SECTION_ID}>
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-700 to-brand-900 py-12 text-white sm:py-20">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl"
          aria-hidden
        />
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">Contact us</h2>
            <p className="mt-3 text-base text-brand-100 sm:mt-4 sm:text-lg">
              Send a message and we&apos;ll get back to you shortly.
            </p>
          </div>
        </Container>
      </div>
      <div className="border-t border-white/10 bg-zinc-50 py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            <h3 className="text-center text-lg font-semibold text-zinc-900 sm:text-xl">Your details</h3>
            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600">
              Fill out the form below, or use WhatsApp if you prefer.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
            <div className="relative mt-10">
              <div className="absolute inset-0 flex items-center" aria-hidden>
                <div className="w-full border-t border-zinc-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-zinc-50 px-3 text-zinc-500">or</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-md items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:w-auto"
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
