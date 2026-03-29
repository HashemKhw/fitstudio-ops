import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white pt-8 pb-12 sm:pt-16 sm:pb-20">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-brand-400/25 blur-3xl hero-orb"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-brand-600/15 blur-3xl hero-orb-delayed"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.93_0.06_250),transparent)] hero-glow-drift"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center sm:px-0">
          <p className="animate-fade-rise mb-3 inline-flex max-w-full flex-wrap justify-center rounded-full bg-brand-50 px-3 py-1.5 text-center text-xs font-medium leading-snug text-brand-700 ring-1 ring-brand-100 sm:mb-4 sm:text-sm">
            For independent gyms & boutique studios
          </p>
          <h1 className="animate-fade-rise animate-delay-100 text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight text-zinc-900 min-[400px]:text-3xl sm:text-5xl lg:text-6xl">
            Run your gym without the spreadsheet chaos
          </h1>
          <p className="animate-fade-rise animate-delay-200 mx-auto mt-4 max-w-2xl text-pretty pb-1 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg lg:text-xl">
            Members slip through cracks. Billing is manual. Classes get double-booked. FitStudio Ops brings
            subscriptions, check-ins, scheduling, and revenue clarity into one calm dashboard—so you save time
            and grow with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
