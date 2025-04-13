"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/assets/nobg.png";


const Banner = () => {

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
             Attractive<span className="text-[#ec1552]">,</span> innovative <span className="text-[#ec1552] text-4xl">&</span>
            <br />
            experienced <br className="lg:hidden" />
            <span className="text-[#b6bcc6] dark:text-[#4d99f7]">
              web Developer<span className="text-[#ec1552]">.</span>
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
