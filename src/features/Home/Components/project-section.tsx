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
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Thumbnail from "@/components/thumbnail";
import { usePathname } from "next/navigation";

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

  const renderCard = (item: Repo, index: number) => (
    <Card
      key={index}
      className={`w-full border !overflow-hidden ${
        pathName === "/project" ? "min-h-[900px] !shadow-none" : "h-full shadow-rn dark:shadow-dark-rn"
      }`}    >
      <CardContent className="flex min-h-[700px] flex-col space-y-4 !p-0 !dark:bg-background">
        <Thumbnail url={item.homepage || ""} className="w-full min-h-[700px]" />
      </CardContent>
      <CardFooter className=" flex-col pt-5 space-y-5">
        {pathName === "/project" ? (
          <>
            <div className="flex items-center justify-between gap-2 w-full">
              <h3 className="text-xl uppercase font-semibold w-full">
                {item.name}
              </h3>
              <div className="w-full !text-xl flex items-end justify-end gap-5">
                <Button variant="link" className="px-0 py-0">
                  <Link target="_blank" href={item.homepage || ""}>
                    Live View
                  </Link>
                </Button>
                <Button variant="link" className="px-0 py-0">
                  <Link
                    target="_blank"
                    href={`https://github.com/haqueashraful/${item.name}`}
                  >
                    Code Link
                  </Link>
                </Button>
              </div>
            </div>
            <p className="text-sm text-white text-center flex-grow">
              {item.description || "No description available."}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.topics?.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-xl uppercase font-semibold">{item.name}</h3>
            <p className="text-sm text-white text-center flex-grow">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.topics?.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Ensuring buttons always stay at the bottom */}
            <div className="w-full flex justify-between mt-auto">
              <Button variant="link" className="px-0 py-0">
                <Link target="_blank" href={item.homepage || ""}>
                  Live View
                </Link>
              </Button>
              <Button variant="link" className="px-0 py-0">
                <Link
                  target="_blank"
                  href={`https://github.com/haqueashraful/${item.name}`}
                >
                  Code Link
                </Link>
              </Button>
            </div>
          </>
        )}
      </CardFooter>
    </Card>
  );

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
              className="w-full sticky top-0"
              //  style={{ top: `${index * 30}px`, right: `${index * 10}px` }}
            >
              {renderCard(item, index)}
            </div>
          ))}
        </div>
      ) : (
        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full">
          <CarouselContent className="-ml-1">
            {myProject.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 xl:basis-1/3"
              >
                <div className="p-1 h-full">{renderCard(item, index)}</div>
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

// "use client";

// import SectionTitle from "@/components/section-title";
// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent, CardFooter } from "@/components/ui/card";

// import ProjectData from "@/utils/data.json";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Thumbnail from "@/components/thumbnail";

// interface itemType {
//   id: number;
//   title: string;
//   description: string;
//   liveLink: string;
//   codeLink: string;
// }

// const ProjectSection = () => {
//   return (
//     <div>
//       <SectionTitle
//         intro="My Projects"
//         title="My Latest Works"
//         description="Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development."
//       />

//       <Carousel
//        plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//       className="w-full"
//       >
//         <CarouselContent className="-ml-1">
//           {ProjectData.map((item: itemType) => (
//             <CarouselItem key={item.id} className="pl-1 md:basis-1/2 xl:basis-1/3">
//               <div className="p-1 h-full">
//                 <Card className="min-h-full shadow-rn dark:shadow-dark-rn border !overflow-hidden">
//                   <CardContent className="flex flex-col h-full space-y-4 !p-0">
//                     <Thumbnail url={item.liveLink} className="w-full" />
//                   </CardContent>
//                   <CardFooter className="flex-col pt-5 space-y-5">
//                   <h3 className="text-xl uppercase font-semibold">{item.title}</h3>
//                     <p className="text-sm text-gray-600 text-center flex-grow">{item.description}</p>

//                     {/* Ensuring buttons always stay at the bottom */}
//                     <div className="w-full flex justify-between mt-auto">
//                       <Button variant="link" className="px-0 py-0">
//                         <Link target="_blank" href={item?.liveLink}>
//                           Live View
//                         </Link>
//                       </Button>
//                       <Button variant="link" className="px-0 py-0">
//                         <Link target="_blank" href={item?.codeLink}>
//                           Code Link
//                         </Link>
//                       </Button>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// };

// export default ProjectSection;
