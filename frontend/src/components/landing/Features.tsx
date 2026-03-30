import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";

const features = [
  {
    title: "Members & subscriptions",
    benefit: "Know who is active, paused, or overdue—without opening five tabs.",
    icon: "M",
  },
  {
    title: "Attendance & classes",
    benefit: "QR or manual check-in, schedules, bookings, and capacity you can enforce.",
    icon: "A",
  },
  {
    title: "Staff & trainers",
    benefit: "Roles for admin and floor staff—everyone sees what they need, nothing more.",
    icon: "S",
  },
  {
    title: "Payments & invoices",
    benefit: "Stripe-ready flows, auto-renew, and professional invoices on autopilot.",
    icon: "P",
  },
  {
    title: "Analytics that matter",
    benefit: "Revenue, active members, attendance trends—so you spot growth early.",
    icon: "R",
  },
  {
    title: "Reminders that land",
    benefit: "Email or SMS nudges for renewals, class starts, and no-shows.",
    icon: "N",
  },
];

export function Features() {
  return (
    <Section id="features" className="bg-slate-950">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Everything you need to operate—not babysit software
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400 sm:mt-4 sm:text-lg">
            Built for busy owners: clear UI, mobile-friendly dashboards, and workflows your team will
            actually use.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-indigo-500/60 hover:shadow-md hover:shadow-indigo-500/20 sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-sm font-bold text-white shadow-md shadow-indigo-500/40 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-50">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.benefit}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-8 text-center shadow-sm transition-all duration-500 ease-out hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/20 sm:mt-16 sm:px-10 sm:py-12">
          <p className="text-base font-semibold text-slate-50 sm:text-lg">Questions? We&apos;re here to help.</p>
          <div className="mt-6">
            <CtaButtonGroup />
          </div>
        </div>
      </Container>
    </Section>
  );
}
