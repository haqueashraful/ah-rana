"use client";

import SectionTitle from "@/components/section-title";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import ProjectData from "@/utils/data.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Thumbnail from "@/components/thumbnail";


interface itemType {
  id: number;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
}

const ProjectSection = () => {
  return (
    <div>
      <SectionTitle
        intro="My Projects"
        title="My Latest Works"
        description="Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development."
      />

      <Carousel
       plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
      >
        <CarouselContent className="-ml-1">
          {ProjectData.map((item: itemType) => (
            <CarouselItem key={item.id} className="pl-1 md:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
                <Card className="min-h-full shadow-rn dark:shadow-dark-rn border !overflow-hidden">
                  <CardContent className="flex flex-col h-full space-y-4 !p-0">
                    <Thumbnail url={item.liveLink} className="w-full" />
                  </CardContent>
                  <CardFooter className="flex-col pt-5 space-y-5">
                  <h3 className="text-xl uppercase font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 text-center flex-grow">{item.description}</p>

                    {/* Ensuring buttons always stay at the bottom */}
                    <div className="w-full flex justify-between mt-auto">
                      <Button variant="link" className="px-0 py-0">
                        <Link target="_blank" href={item?.liveLink}>
                          Live View
                        </Link>
                      </Button>
                      <Button variant="link" className="px-0 py-0">
                        <Link target="_blank" href={item?.codeLink}>
                          Code Link
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectSection;
