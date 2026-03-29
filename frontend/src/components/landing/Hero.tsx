import { Container } from "@/components/ui/Container";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";
import { getContactMailtoUrl } from "@/lib/cta";

export function Hero() {
  const mailto = getContactMailtoUrl();

  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.93_0.06_250),transparent)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100 sm:text-sm">
            For independent gyms & boutique studios
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Run your gym without the spreadsheet chaos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-zinc-600 sm:text-xl">
            Members slip through cracks. Billing is manual. Classes get double-booked. FitStudio Ops brings
            subscriptions, check-ins, scheduling, and revenue clarity into one calm dashboard—so you save time
            and grow with confidence.
          </p>
          <div className="mt-10">
            <CtaButtonGroup />
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Prefer email?{" "}
            <a href={mailto} className="font-medium text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-700">
              Send us a note
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
