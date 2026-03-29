import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

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
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Everything you need to operate—not babysit software
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Built for busy owners: clear UI, mobile-friendly dashboards, and workflows your team will
            actually use.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="group rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.benefit}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
