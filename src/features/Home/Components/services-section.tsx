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
        description="I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card className="p-2">
          <CardHeader>
            <Image width={64} height={64} src={webdesign} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Web Design</CardTitle>
            <CardDescription className="text-lg text-justify">
              I can develop any type of website you want. I can also develop any
              type of website you want. I can also develop any type of website
              you want.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2">
          <CardHeader>
            <Image width={64} height={64} src={responsive} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Responsive Website</CardTitle>
            <CardDescription className="text-lg text-justify">
              I can develop any type of website you want. I can also develop any
              type of website you want. I can also develop any type of website
              you want.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2">
          <CardHeader>
            <Image width={64} height={64} src={fullstack} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Frontend Development</CardTitle>
            <CardDescription className="text-lg text-justify">
              I can develop any type of website you want. I can also develop any
              type of website you want. I can also develop any type of website
              you want.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2">
          <CardHeader>
            <Image width={64} height={64} src={backend} alt="web-design" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl pb-3">Backend Development</CardTitle>
            <CardDescription className="text-lg text-justify">
              I can develop any type of website you want. I can also develop any
              type of website you want. I can also develop any type of website
              you want.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicesSection;
