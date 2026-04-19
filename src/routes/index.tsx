import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/guardians/Nav";
import { Hero } from "@/components/guardians/Hero";
import { TrustBar } from "@/components/guardians/TrustBar";
import { Services } from "@/components/guardians/Services";
import { GlobalMap } from "@/components/guardians/GlobalMap";
import { WhyUs } from "@/components/guardians/WhyUs";
import { CaseStudies } from "@/components/guardians/CaseStudies";
import { Team } from "@/components/guardians/Team";
import { Testimonials } from "@/components/guardians/Testimonials";
import { FinalCTA } from "@/components/guardians/FinalCTA";
import { Footer } from "@/components/guardians/Footer";
import { CursorSpotlight } from "@/components/guardians/CursorSpotlight";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guardians — Elite Protection. Global Reach. Absolute Discretion." },
      { name: "description", content: "Guardians delivers world-class executive, celebrity, and high-risk protection across 50+ countries. Trusted by Fortune 500 leaders and global icons since 2005." },
      { property: "og:title", content: "Guardians — Elite Protection. Global Reach." },
      { property: "og:description", content: "Vetted operators. 24/7 global operations. Absolute discretion for principals who cannot afford error." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-onyx text-foreground antialiased overflow-x-hidden">
      <CursorSpotlight />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <GlobalMap />
        <WhyUs />
        <CaseStudies />
        <Team />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
