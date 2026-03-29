import { FinalCta } from "@/components/landing/FinalCta";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Testimonials } from "@/components/landing/Testimonials";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <ProductPreview />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
