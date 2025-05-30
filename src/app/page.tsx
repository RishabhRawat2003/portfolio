import AboutPage from "@/Components/About";
import { LandingPage } from "@/Components/LandingPage";
import ProjectsSection from "@/Components/Projects";
import ContactSection from "../Components/Contact";


export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col overflow-hidden">
      {/* Home Section */}
      <section id="home">
        <LandingPage />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutPage />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
