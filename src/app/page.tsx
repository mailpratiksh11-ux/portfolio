import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { HowICanHelp } from "@/components/sections/HowICanHelp";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowICanHelp />
        <Services />
        <Projects />
        <About />
        <Experience />
        <TechStack />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
