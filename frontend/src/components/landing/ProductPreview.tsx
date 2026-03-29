import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ProductPreview() {
  return (
    <Section id="preview" className="border-y border-zinc-200 bg-zinc-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Your command center, on any device
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            A calm dashboard for revenue, attendance, and today&apos;s classes—optimized for quick glances
            between sessions.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 ring-1 ring-zinc-100 transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-500/10">
          <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/90" />
            <span className="h-3 w-3 rounded-full bg-amber-400/90" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
            <span className="ml-3 text-xs font-medium text-zinc-500">app.fitstudioops.com / dashboard</span>
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
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500">Good afternoon</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">Northside Strength</p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-100">
                    +12% MRR vs last month
                  </span>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Active members", value: "428", delta: "+18" },
                  { label: "Check-ins today", value: "156", delta: "Peak 5–7pm" },
                  { label: "Revenue (30d)", value: "$48.2k", delta: "92% collected" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-4 shadow-sm"
                  >
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{card.label}</p>
                    <p className="mt-2 text-2xl font-bold tabular-nums text-zinc-900">{card.value}</p>
                    <p className="mt-1 text-xs text-zinc-500">{card.delta}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-dashed border-zinc-200 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-zinc-900">Attendance trend</p>
                  <span className="text-xs text-zinc-500">Last 14 days</span>
                </div>
                <div className="flex h-28 items-end justify-between gap-1">
                  {[40, 55, 48, 62, 58, 70, 65, 72, 68, 80, 76, 85, 82, 88].map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t bg-gradient-to-t from-brand-600 to-brand-500 opacity-90"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
