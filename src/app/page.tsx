"use client";

import ScrollingText from "@/components/scrolling-text";
import AboutSection from "@/features/Home/Components/about-section";
import Banner from "@/features/Home/Components/banner";
import ContactSection from "@/features/Home/Components/contact-section";
import ProjectSection from "@/features/Home/Components/project-section";
import ServicesSection from "@/features/Home/Components/services-section";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen space-y-28">
      <div className="container-rn">
        <Banner />
      </div>

      <div className="flex flex-col items-center justify-center container-rn">
      <ScrollingText />
      <p className="text-lg text-gray-600 mt-10">Explore my portfolio below!</p>
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
