import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const problems = [
  {
    title: "Revenue you cannot see",
    body: "Spreadsheets and disconnected tools hide churn, failed payments, and who actually shows up.",
  },
  {
    title: "Front desk overload",
    body: "Staff juggle walk-ins, renewals, and class lists—mistakes cost trust and money.",
  },
  {
    title: "Members expect apps",
    body: "They want to book, pay, and check in smoothly. Paper lists and DMs do not scale.",
  },
];

const solutions = [
  {
    title: "One source of truth",
    body: "Profiles, plans, attendance, and billing live together—updated in real time.",
  },
  {
    title: "Automated billing & renewals",
    body: "Monthly and yearly plans with auto-renew, invoices, and payment status at a glance.",
  },
  {
    title: "Check-ins that fit your floor",
    body: "QR or manual check-in, class caps, and staff tools that stay out of the way.",
  },
];

export function ProblemSolution() {
  return (
    <Section id="problem" className="bg-zinc-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Sound familiar? You are not alone.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg">
            Gym owners wear every hat. We built FitStudio Ops so operations stop eating your day—and your
            margins.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Common pain</h3>
            <ul className="mt-6 space-y-6">
              {problems.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md sm:p-6"
                >
                  <p className="font-semibold text-zinc-900">{item.title}</p>
                  <p className="mt-2 text-zinc-600">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">How we fix it</h3>
            <ul className="mt-6 space-y-6">
              {solutions.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm ring-1 ring-brand-50 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-100 sm:p-6"
                >
                  <p className="font-semibold text-zinc-900">{item.title}</p>
                  <p className="mt-2 text-zinc-600">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
