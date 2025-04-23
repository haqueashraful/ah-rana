"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/assets/nobg.png";

const Banner = () => {
  return (
    <div className="pt-28">
      <div className="w-full mx-auto gap-10 lg:gap-0">
        <div className="w-72 mx-auto">
          <Image
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
            src={image}
            alt="ashraful"
            // or use layout="responsive" if desired
            width={288}
            height={288}
            className="rounded-full shadow-rn dark:shadow-dark-rn "
          />
        </div>
        <div className="w-full space-y-5 py-6">
          <h1 className="text-3xl">Hi! I&apos;m Ashraful Haque. 👋🏻</h1>
          <h1 className="text-3xl lg:text-8xl font-bold">
            Attractive<span className="text-[#ec1552]">,</span> innovative{" "}
            <span className="text-[#ec1552] text-4xl">&</span>
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

            <Link href="https://github.com/haqueashraful" target="_blank">
              <button className="flex justify-center items-center animate-bounce">
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#ec1552"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
