import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import Thumbnail from './thumbnail';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



interface Repo {
    name: string;
    description: string | null;
    homepage: string | null;
    language: string | null;
    created_at: string;
    topics?: string[];
  }

const ProjectCard = ({item, index} : {item: Repo, index: number}) => {

      const pathName = usePathname();
    

    return (
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
              <p className="text-sm dark:text-white text-center flex-grow">
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
              <p className="text-sm dark:text-white text-center flex-grow">
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
};

export default ProjectCard;