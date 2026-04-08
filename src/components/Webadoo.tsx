import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function Webadoo() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Projects />

        <Benefits />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Webadoo;