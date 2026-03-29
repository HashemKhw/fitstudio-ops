import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ProductPreview() {
  return (
    <Section id="preview" className="border-y border-zinc-200 bg-zinc-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Your command center, on any device
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg">
            A calm dashboard for revenue, attendance, and today&apos;s classes—optimized for quick glances
            between sessions.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 ring-1 ring-zinc-100 transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-500/10 sm:mt-12 sm:rounded-2xl">
          <div className="flex min-h-[2.75rem] items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-3 py-2.5 sm:px-4 sm:py-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/90 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400/90 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400/90 sm:h-3 sm:w-3" />
            <span className="ml-1 min-w-0 truncate text-[10px] font-medium text-zinc-500 sm:ml-3 sm:text-xs">
              <span className="sm:hidden">Dashboard preview</span>
              <span className="hidden sm:inline">app.fitstudioops.com / dashboard</span>
            </span>
          </div>
          <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-zinc-100 bg-zinc-50/50 p-4 lg:block">
              <div className="space-y-1 text-sm">
                <div className="rounded-lg bg-white px-3 py-2 font-medium text-zinc-900 shadow-sm ring-1 ring-zinc-200">
                  Overview
                </div>
                {["Members", "Classes", "Billing", "Reports"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg px-3 py-2 text-zinc-600 hover:bg-white hover:text-zinc-900"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
            <div className="p-3 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-500 sm:text-sm">Good afternoon</p>
                  <p className="mt-0.5 truncate text-xl font-bold tracking-tight text-zinc-900 sm:mt-1 sm:text-2xl">
                    Northside Strength
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-800 ring-1 ring-emerald-100 sm:px-3 sm:text-xs">
                    +12% MRR vs last month
                  </span>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                {[
                  { label: "Active members", value: "428", delta: "+18" },
                  { label: "Check-ins today", value: "156", delta: "Peak 5–7pm" },
                  { label: "Revenue (30d)", value: "$48.2k", delta: "92% collected" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 shadow-sm sm:p-4"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500 sm:text-xs">
                      {card.label}
                    </p>
                    <p className="mt-1 text-xl font-bold tabular-nums text-zinc-900 sm:mt-2 sm:text-2xl">
                      {card.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500 sm:mt-1 sm:text-xs">{card.delta}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-dashed border-zinc-200 bg-white p-3 sm:mt-8 sm:p-4">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2 sm:mb-3">
                  <p className="text-sm font-semibold text-zinc-900">Attendance trend</p>
                  <span className="text-xs text-zinc-500">Last 14 days</span>
                </div>
                <div className="-mx-1 overflow-x-auto pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
                  <div className="flex h-24 min-w-[17rem] items-end justify-between gap-0.5 px-1 sm:h-28 sm:min-w-0 sm:gap-1 sm:px-0">
                    {[40, 55, 48, 62, 58, 70, 65, 72, 68, 80, 76, 85, 82, 88].map((h, i) => (
                      <div
                        key={i}
                        className="min-w-[6px] flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-500 opacity-90 sm:min-w-0"
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
