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
    <Section id="features" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Everything you need to operate—not babysit software
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg">
            Built for busy owners: clear UI, mobile-friendly dashboards, and workflows your team will
            actually use.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="group rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-brand-200/80 hover:shadow-md hover:shadow-brand-500/5 sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.benefit}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-zinc-200 bg-gradient-to-b from-brand-50/80 to-white px-4 py-8 text-center shadow-sm transition-all duration-500 ease-out hover:border-brand-200/60 hover:shadow-md sm:mt-16 sm:px-10 sm:py-12">
          <p className="text-base font-semibold text-zinc-900 sm:text-lg">Questions? We&apos;re here to help.</p>
          <div className="mt-6">
            <CtaButtonGroup />
          </div>
        </div>
      </Container>
    </Section>
  );
}
