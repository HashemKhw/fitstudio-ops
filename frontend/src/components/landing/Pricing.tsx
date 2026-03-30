import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CONTACT_SECTION_ID } from "@/lib/cta";

const tiers = [
  {
    name: "Basic",
    price: "$79",
    period: "/month",
    description: "Solo locations getting off spreadsheets.",
    features: [
      "Up to 300 members",
      "Class scheduling & bookings",
      "Manual & QR check-in",
      "Email reminders",
      "Standard support",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "Growing studios that need billing and insights.",
    features: [
      "Unlimited members",
      "Stripe billing & auto-renew",
      "Invoices & payment status",
      "Staff roles (admin + staff)",
      "SMS + email notifications",
      "Revenue & attendance analytics",
    ],
    cta: "Contact Us",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Multi-location brands and franchises.",
    features: [
      "Dedicated onboarding",
      "API & integrations",
      "SSO / advanced security",
      "SLA & priority support",
      "Custom reporting",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-[#001111]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl uppercase italic skew-x-[-5deg]">
            Simple pricing that scales with you
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#9cfbfa] sm:mt-4 sm:text-lg">
            Get a tailored quote for your gym or studio—reach out and we&apos;ll walk you through the right plan.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:p-8 ${
                tier.highlighted
                  ? "border-[#ffd709] bg-[#001717] ring-2 ring-[#ffd709]/80 hover:shadow-[0_25px_60px_rgba(125,38,205,0.8)]"
                  : "border-[#2a3548] bg-[#001717] hover:border-[#cb98ff]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-2.5 left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2 truncate rounded-none bg-[#ffd709] px-2.5 py-0.5 text-[11px] font-black text-[#001111] sm:-top-3 sm:px-3 sm:text-xs uppercase tracking-[0.2em]">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-50">{tier.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-slate-50">{tier.price}</span>
                {tier.period ? <span className="text-slate-400">{tier.period}</span> : null}
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-slate-300">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-0.5 text-emerald-400" aria-hidden>
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`#${CONTACT_SECTION_ID}`} variant={tier.highlighted ? "primary" : "secondary"} className="w-full">
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
