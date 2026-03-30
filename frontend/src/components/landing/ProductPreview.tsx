import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ProductPreview() {
  return (
    <Section id="preview" className="border-y-4 border-[#ffd709]/60 bg-[#001717]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl uppercase italic skew-x-[-5deg]">
            Your command center, worthy of a Stand
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#9cfbfa] sm:mt-4 sm:text-lg">
            A JoJo-tier dashboard for revenue, attendance, and today&apos;s classes—dramatic, legible, and built
            for quick glances between battles.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border-4 border-[#cb98ff]/60 bg-[#001e1e] shadow-2xl shadow-[#7D26CD]/40 ring-1 ring-[#cb98ff]/40 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(125,38,205,0.8)] sm:mt-12 sm:rounded-2xl">
          <div className="flex min-h-[2.75rem] items-center gap-2 border-b border-[#cb98ff]/40 bg-[#001111]/80 px-3 py-2.5 sm:px-4 sm:py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff6e84] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffd709] sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#4ade80] sm:h-3 sm:w-3" />
            <span className="ml-1 min-w-0 truncate text-[10px] font-medium text-[#59bab9] sm:ml-3 sm:text-xs">
              <span className="sm:hidden">Dashboard preview</span>
              <span className="hidden sm:inline">app.fitstudioops.com / dashboard</span>
            </span>
          </div>
          <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-[#cb98ff]/30 bg-[#001717] p-4 lg:block">
              <div className="space-y-1 text-sm">
                <div className="rounded-none bg-[#cb98ff] px-3 py-2 font-semibold text-[#001111] shadow-sm ring-1 ring-[#ffd709] uppercase italic skew-x-[-5deg]">
                  Overview
                </div>
                {["Members", "Classes", "Billing", "Reports"].map((item) => (
                  <div
                    key={item}
                    className="rounded-none px-3 py-2 text-[#cb98ff]/80 hover:bg-[#7D26CD]/40 hover:text-[#ffd709] uppercase tracking-tight transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
            <div className="p-3 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#59bab9] sm:text-sm uppercase tracking-[0.25em]">
                    System status: Menacing
                  </p>
                  <p className="mt-1 truncate text-xl font-extrabold tracking-tight text-slate-50 sm:text-2xl italic skew-x-[-5deg]">
                    Northside Strength
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <span className="rounded-none bg-[#ffd709] px-2.5 py-1 text-[11px] font-black text-[#001111] ring-1 ring-[#ff7cba] sm:px-3 sm:text-xs uppercase tracking-[0.2em]">
                    +12% mrr vs last month
                  </span>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                {[
                  { label: "Active members", value: "428", delta: "+18" },
                  { label: "Check-ins today", value: "156", delta: "Peak 5–7pm" },
                  { label: "Revenue (30d)", value: "$48.2k", delta: "92% collected" },
                ].map((card) => (
                  <div key={card.label} className="rounded-xl border border-[#cb98ff]/40 bg-[#001111] p-3 shadow-sm sm:p-4">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-[#59bab9] sm:text-xs">
                      {card.label}
                    </p>
                    <p className="mt-1 text-xl font-extrabold tabular-nums text-slate-50 sm:mt-2 sm:text-2xl">
                      {card.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#59bab9] sm:mt-1 sm:text-xs">{card.delta}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-dashed border-[#cb98ff]/40 bg-[#001111] p-3 sm:mt-8 sm:p-4">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2 sm:mb-3">
                  <p className="text-sm font-semibold text-slate-50 italic">Attendance trend</p>
                  <span className="text-xs text-[#59bab9] uppercase tracking-[0.18em]">Last 14 days</span>
                </div>
                <div className="-mx-1 overflow-x-auto pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
                  <div className="flex h-24 min-w-[17rem] items-end justify-between gap-0.5 px-1 sm:h-28 sm:min-w-0 sm:gap-1 sm:px-0">
                    {[40, 55, 48, 62, 58, 70, 65, 72, 68, 80, 76, 85, 82, 88].map((h, i) => (
                      <div
                        key={i}
                        className="min-w-[6px] flex-1 rounded-t bg-gradient-to-t from-[#7D26CD] to-[#cb98ff] opacity-90 sm:min-w-0"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
