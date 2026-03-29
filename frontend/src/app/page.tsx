import { ContactSection } from "@/components/landing/ContactSection";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Testimonials } from "@/components/landing/Testimonials";
import { Reveal } from "@/components/motion/Reveal";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Reveal>
          <ProblemSolution />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <ProductPreview />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
