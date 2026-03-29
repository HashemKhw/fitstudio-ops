import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DemoForm } from "@/components/landing/DemoForm";
import { TrialForm } from "@/components/landing/TrialForm";

export function FinalCta() {
  return (
    <Section className="bg-brand-700 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to reclaim your weeknights?
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Start your free trial or book a 20-minute walkthrough. We&apos;ll show you member billing,
            classes, and reporting tailored to your gym.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="#trial-form" variant="secondary" className="w-full min-w-[200px] sm:w-auto">
              Start free trial
            </Button>
            <Link
              href="#demo"
              className="inline-flex w-full min-w-[200px] items-center justify-center rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto"
            >
              Book demo
            </Link>
          </div>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div id="trial-form" className="scroll-mt-24 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
            <h3 className="text-lg font-semibold">Start your 14-day trial</h3>
            <p className="mt-2 text-sm text-brand-100">
              We&apos;ll email you login details. No credit card required.
            </p>
            <div className="mt-6">
              <TrialForm />
            </div>
          </div>
          <div id="demo" className="scroll-mt-24 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
            <h3 className="text-lg font-semibold">Book a live demo</h3>
            <p className="mt-2 text-sm text-brand-100">
              Pick a time that works—see the dashboard and ask anything.
            </p>
            <div className="mt-6">
              <DemoForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
