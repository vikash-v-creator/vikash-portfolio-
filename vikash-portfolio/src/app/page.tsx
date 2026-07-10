import prisma from "@/lib/prisma";

// UI
import Navbar from "@/components/ui/Navbar";
import ClientWrapper from "@/components/ui/ClientWrapper";

// Sections
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import CreativePhilosophy from "@/components/sections/CreativePhilosophy";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// (Optional) FAQ if they want it later. But we removed it.

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [
    stats,
    services,
    projects,
    deskItems,
    philosophyCards,
    skillCategories,
    processSteps,
    testimonials,
    pricingPlans,
    whyHireMe,
  ] = await Promise.all([
    prisma.stat.findMany(),
    prisma.service.findMany(),
    prisma.project.findMany(),
    prisma.deskItem.findMany(),
    prisma.philosophyCard.findMany(),
    prisma.skillCategory.findMany(),
    prisma.processStep.findMany(),
    prisma.testimonial.findMany(),
    prisma.pricingPlan.findMany(),
    prisma.whyHireMe.findMany(),
  ]);

  return (
    <ClientWrapper>
      <Navbar />
      <main>
        <Hero />
        <Services services={services} />
        <Portfolio projects={projects} />
        <About deskItems={deskItems} />
        <CreativePhilosophy philosophyCards={philosophyCards} />
        <Skills skillCategories={skillCategories} />
        <Process processSteps={processSteps} />
        <Testimonials testimonials={testimonials} />
        <Pricing pricingPlans={pricingPlans} />
        <WhyHireMe items={whyHireMe} />
        <Contact />
      </main>
      <Footer />
    </ClientWrapper>
  );
}
