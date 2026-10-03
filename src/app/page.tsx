import AboutPage from "@/Components/About";
import { LandingPage } from "@/Components/LandingPage";
import ProjectsSection from "@/Components/Projects";
import ContactSection from "../Components/Contact";
import { ExperienceSection } from "@/Components/Experiences";

export default function Home() {
  return (
    <>
      <section id="home">
        <LandingPage />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
