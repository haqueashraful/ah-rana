"use client"

import SectionTitle from "@/components/section-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import webdesign from "@/assets/webdesign.png";
import responsive from "@/assets/responsive.png";
import fullstack from "@/assets/fullstack.png"
import backend from "@/assets/backend.png"

const ServicesSection = () => {
  return (
    <div>
      <SectionTitle
        intro="What i offers"
        title="My Services"
        description="I am a frontend developer from Bangladesh with several times of experience in web design and development."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 pb-5">
        <Card data-aos="fade-left" data-aos-delay="100" className="p-2 z-10 ">
          <CardHeader>
            <Image width={64} height={64} src={webdesign} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Web Design</CardTitle>
            <CardDescription className="text-lg text-justify">
              {/* I can develop any type of website you want. I can also develop any
              type of website you want. I can also develop any type of website
              you want. */}
              Creating visually stunning and user-focused website designs that combine aesthetics with functionality, translating your brand identity into engaging digital experiences.
            </CardDescription>
          </CardContent>
        </Card>

        <Card data-aos="fade-left" data-aos-delay="200" className="p-2 ">
          <CardHeader>
            <Image width={64} height={64} src={responsive} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Responsive Website</CardTitle>
            <CardDescription className="text-lg text-justify">
            Developing adaptable websites that provide optimal viewing and interaction experiences across all devices, from desktop computers to smartphones and tablets.
            </CardDescription>
          </CardContent>
        </Card>

        <Card data-aos="fade-right" data-aos-delay="200" className="p-2 ">
          <CardHeader>
            <Image width={64} height={64} src={fullstack} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Frontend Development</CardTitle>
            <CardDescription className="text-lg text-justify">
            Crafting intuitive user interfaces with modern frameworks and clean code, bringing designs to life through interactive elements that engage visitors and improve user experience.
            </CardDescription>
          </CardContent>
        </Card>

        <Card data-aos="fade-right" data-aos-delay="100" className="p-2 ">
          <CardHeader>
            <Image width={64} height={64} src={backend} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Backend Development</CardTitle>
            <CardDescription className="text-lg text-justify">
            Building robust server-side systems that power applications, handling databases, APIs, and business logic to ensure your digital platforms function seamlessly behind the scenes.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicesSection;
