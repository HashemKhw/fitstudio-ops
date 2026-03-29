import { Container } from "@/components/ui/Container";
import { CONTACT_SECTION_ID, getWhatsAppUrl } from "@/lib/cta";
import { ContactForm } from "@/components/landing/ContactForm";

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id={CONTACT_SECTION_ID} className="scroll-mt-24">
      <div className="bg-brand-700 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact us</h2>
            <p className="mt-4 text-lg text-brand-100">
              Send a message and we&apos;ll get back to you shortly.
            </p>
          </div>
        </Container>
      </div>
      <div className="border-t border-brand-600/30 bg-zinc-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            <h3 className="text-center text-xl font-semibold text-zinc-900">Your details</h3>
            <p className="mt-2 text-center text-sm text-zinc-600">
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
                className="inline-flex w-full max-w-md items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:w-auto"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
