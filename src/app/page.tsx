import AboutSection from "@/features/Home/Components/about-section";
import Banner from "@/features/Home/Components/banner";
import ContactSection from "@/features/Home/Components/contact-section";
import ProjectSection from "@/features/Home/Components/project-section";
import ServicesSection from "@/features/Home/Components/services-section";

export default function Home() {
  return (
    <div className="min-h-screen space-y-28">
      <div className="container-rn">
        <Banner />
      </div>

      <div className="container-rn">
        <AboutSection />
      </div>

      <div className="container-rn">
        <ServicesSection />
      </div>

      <div className="container-rn">
        <ProjectSection />
      </div>

      <div className="container-rn">
        <ContactSection />
      </div>
    </div>
  );
}
