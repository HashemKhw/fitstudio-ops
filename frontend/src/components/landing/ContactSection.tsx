import { Container } from "@/components/ui/Container";
import { CONTACT_SECTION_ID } from "@/lib/cta";
import { ContactForm } from "@/components/landing/ContactForm";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";

export function ContactSection() {
  return (
    <section id={CONTACT_SECTION_ID} className="scroll-mt-24">
      <div className="bg-brand-700 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s talk about your gym</h2>
            <p className="mt-4 text-lg text-brand-100">
              Questions, pricing, or a walkthrough—reach out however you prefer. We reply to every inquiry.
            </p>
            <div className="mt-10">
              <CtaButtonGroup variant="dark" />
            </div>
          </div>
        </Container>
      </div>
      <div className="border-t border-brand-600/30 bg-zinc-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            <h3 className="text-center text-xl font-semibold text-zinc-900">Send us a message</h3>
            <p className="mt-2 text-center text-sm text-zinc-600">
              Fill in the form below and we&apos;ll get back to you shortly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
