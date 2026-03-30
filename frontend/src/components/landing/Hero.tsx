import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-[#ffd709] bg-[#001111] pt-12 pb-18 sm:pt-24 sm:pb-28">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-[#7D26CD]/40 blur-3xl hero-orb"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-[#ffd709]/20 blur-3xl hero-orb-delayed"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-40%,rgba(203,152,255,0.4),transparent)] hero-glow-drift"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center sm:px-0">
          <p className="animate-fade-rise mb-4 inline-flex max-w-full flex-wrap justify-center rounded-full bg-[#7D26CD]/40 px-4 py-1.5 text-center text-[0.65rem] font-semibold leading-snug text-[#ffd709] ring-1 ring-[#ff7cba]/60 sm:mb-5 sm:text-xs tracking-[0.3em] uppercase">
            Ascend to gym owner divinity
          </p>
          <h1 className="animate-fade-rise animate-delay-100 text-balance text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-slate-50 min-[400px]:text-3xl sm:text-5xl lg:text-6xl uppercase italic skew-x-[-5deg] drop-shadow-[4px_4px_0px_#7D26CD]">
            Run your gym like a{" "}
            <span className="text-[#ffd709] drop-shadow-[4px_4px_0px_#ff7cba]">Stand user.</span>
          </h1>
          <p className="animate-fade-rise animate-delay-200 mx-auto mt-6 max-w-2xl text-pretty pb-1 text-base leading-relaxed text-[#9cfbfa] sm:mt-7 sm:text-lg lg:text-xl">
            Members slip through cracks. Billing is manual. Classes get double-booked. FitStudio Ops brings
            subscriptions, check-ins, scheduling, and revenue clarity into one calm dashboard—so you save time
            and grow with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
