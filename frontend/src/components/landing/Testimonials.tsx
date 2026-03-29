import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const quotes = [
  {
    quote:
      "We cut front-desk billing questions by more than half. Members book in the app and we finally trust our numbers.",
    name: "Jordan M.",
    role: "Owner, Northside Strength",
  },
  {
    quote:
      "I was juggling three tools. FitStudio Ops replaced the mess with one dashboard my trainers actually log into.",
    name: "Elena R.",
    role: "Studio Director, Flow Pilates Collective",
  },
  {
    quote:
      "Auto-renew and invoices alone paid for the subscription in the first month. Their team made onboarding painless.",
    name: "Marcus T.",
    role: "Founder, Urban Box Club",
  },
];

export function Testimonials() {
  return (
    <Section className="border-t border-zinc-200 bg-zinc-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Trusted by operators who value their time
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Placeholder testimonials for launch—you can swap in real quotes and headshots anytime.
          </p>
        </div>
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {quotes.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="flex-1 text-sm leading-relaxed text-zinc-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-zinc-100 pt-4">
                <p className="font-semibold text-zinc-900">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
