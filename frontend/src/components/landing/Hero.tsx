import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
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
          <div id="trial" className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="#trial-form" variant="primary" className="w-full min-w-[200px] sm:w-auto">
              Start free trial
            </Button>
            <Button href="#demo" variant="secondary" className="w-full min-w-[200px] sm:w-auto">
              Book a live demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            14-day trial · No card required · Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  );
}
