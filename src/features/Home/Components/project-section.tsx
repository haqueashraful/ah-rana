"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import ProjectCard from "@/components/project-card";

interface Repo {
  name: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  created_at: string;
  topics?: string[];
}

const ProjectSection = () => {
  const pathName = usePathname();
  const [myProject, setMyProject] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/haqueashraful/repos?per_page=100")
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const withHomepage = data
          .filter((repo) => repo.homepage && repo.homepage.trim() !== "")
          .map((repo) => ({
            name: repo.name.replace(/[-_]/g, " "),
            description: repo.description,
            homepage: repo.homepage,
            language: repo.language,
            topics: repo.topics,
            created_at: repo.created_at,
          }));

        const sortedProjects = withHomepage.sort((a, b) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });

        setMyProject(sortedProjects);
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  if (!myProject.length){
    return <Loading />
  }


  return (
    <div className="w-full px-4 md:px-8 lg:px0">
      <SectionTitle
        intro="My Projects"
        title="My Latest Works"
        description="Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development."
      />

      {pathName === "/project" ? (
        <div className="flex flex-col gap-10 relative">
          {myProject.map((item, index) => (
          <div
          key={index}
          className="w-full sticky transition-transform ease-in-out"
          style={{
            top: `${index * 10}px`,
            transform: `scale(${1 - index * 0.01})`,
            // zIndex: myProject.length - index,
            // zIndex: index - myProject.length,
          }}
        >
          <ProjectCard item={item} index={index} />
        </div>
        
          ))}
        </div>
      ) : (
        <Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full">
          <CarouselContent className="-ml-1">
            {myProject.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 xl:basis-1/3"
              >
                <div className="p-1 h-full">
                  <ProjectCard item={item} index={index} />
                  </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
};

export default ProjectSection;
