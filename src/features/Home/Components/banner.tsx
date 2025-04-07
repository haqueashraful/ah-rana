"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/assets/nobg.png";
import { useEffect } from "react";

// Optional: Define a type for the repo if you want type safety
interface Repo {
  name: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
}

const Banner = () => {

  useEffect(() => {
    fetch("https://api.github.com/users/haqueashraful/repos?per_page=100")
      .then((res) => res.json())
      .then((data: Repo[]) => {
        console.log(data, "data");
        const withHomepage = data
        .filter((repo) => repo.homepage && repo.homepage.trim() !== "")
        .map((repo) => ({
          name: repo.name,
          description: repo.description,
          homepage: repo.homepage,
          language: repo.language,
        }));
      

        console.log(withHomepage, "withHomepage");
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <div className="py-28">
      <div className="w-full mx-auto gap-10 lg:gap-0">
        <div className="w-72 mx-auto">
          <Image
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
            src={image}
            alt="ashraful"
            width={288} // or use layout="responsive" if desired
            height={288}
            className="rounded-full shadow-rn dark:shadow-dark-rn"
          />
        </div>
        <div className="w-full space-y-5 py-6">
          <h1 className="text-3xl">Hi! I&apos;m Ashraful Haque. 👋🏻</h1>
          <h1 className="text-3xl lg:text-8xl font-bold">
            Creating impactful
            <br />
            experiences on <br className="lg:hidden" />
            <span className="text-[#b6bcc6] dark:text-[#4d99f7]">
              web design
            </span>
          </h1>

          <p className="py-6 text-lg">
            I transform ideas into impactful digital experiences, delivering
            innovative solutions that elevate brands and captivate audiences
            around the world.
          </p>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
            <Button className="flex">
              Connect with me
              <ArrowRight />
            </Button>

            <Link
              href="https://drive.google.com/uc?export=download&id=1e7r-Yb6lI6QhtR0j5nHbs5fq8FEuh_8R"
              download="ashraful-resume.pdf"
            >
              <Button variant="rn">
                My Resume
                <Download />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
