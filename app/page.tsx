import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import Differentiator from "@/components/Differentiator";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Marquee dark />
      <Process />
      <Portfolio />
      <Differentiator />
      <Testimonials />
      <CTA />
    </main>
  );
}
