import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 pt-10 pb-16 sm:pt-20 sm:pb-24">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-indigo-500/25 blur-3xl hero-orb"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-emerald-400/15 blur-3xl hero-orb-delayed"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-40%,rgba(129,140,248,0.35),transparent)] hero-glow-drift"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center sm:px-0">
          <p className="animate-fade-rise mb-3 inline-flex max-w-full flex-wrap justify-center rounded-full bg-slate-900/80 px-3 py-1.5 text-center text-[0.65rem] font-semibold leading-snug text-emerald-300 ring-1 ring-emerald-400/30 sm:mb-4 sm:text-xs tracking-[0.2em] uppercase">
            For independent gyms & boutique studios
          </p>
          <h1 className="animate-fade-rise animate-delay-100 text-balance text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-slate-50 min-[400px]:text-3xl sm:text-5xl lg:text-6xl">
            Run your gym without the spreadsheet chaos
          </h1>
          <p className="animate-fade-rise animate-delay-200 mx-auto mt-5 max-w-2xl text-pretty pb-1 text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg lg:text-xl">
            Members slip through cracks. Billing is manual. Classes get double-booked. FitStudio Ops brings
            subscriptions, check-ins, scheduling, and revenue clarity into one calm dashboard—so you save time
            and grow with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
