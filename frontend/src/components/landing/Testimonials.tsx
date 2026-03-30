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
    <Section className="border-t-4 border-[#ffd709]/60 bg-[#001111]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl uppercase italic skew-x-[-5deg]">
            Trusted by operators who pose while they lift
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#9cfbfa] sm:mt-4 sm:text-lg">
            Placeholder testimonials for launch—swap in your own Stand users and legends when you are ready.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 md:grid-cols-3">
          {quotes.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-[#cb98ff]/40 bg-[#001717] p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#ffd709] hover:shadow-xl hover:shadow-[#7D26CD]/60 sm:p-6"
            >
              <p className="flex-1 text-pretty text-sm leading-relaxed text-[#9cfbfa]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-zinc-100 pt-4">
                <p className="font-semibold text-slate-50">{t.name}</p>
                <p className="text-sm text-[#59bab9]">{t.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
