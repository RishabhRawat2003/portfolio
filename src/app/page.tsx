import AboutPage from "@/Components/About";
import { LandingPage } from "@/Components/LandingPage";
import ProjectsSection from "@/Components/Projects";


export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col overflow-hidden">
      <LandingPage />
      <AboutPage />
      <ProjectsSection />
    </div>
  );
}
