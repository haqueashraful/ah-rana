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

import vscode from "@/assets/vscode.png";
import figma from "@/assets/figma.png";
import git from "@/assets/git.png";
import firebase from "@/assets/firebase.png";
import mongo from "@/assets/mongo.png";
import image from "@/assets/one.jpeg"

const AboutSection = () => {
  return (
    <div>
      <SectionTitle intro="Introduction" title="Who am I?" />

      <div className="flex items-start gap-10 flex-col xl:flex-row">
        {/* <div className="col-span-1 w-full mx-auto md:w-3/5"> */}
          <Image
          width={0}
          height={0}
          alt="ashraful"
            src={image}
            className="w-2/3 mx-auto lg:w-full h-full rounded-lg shadow-rn dark:shadow-dark-rn"
          />
        {/* </div> */}

        <div className="flex justify-center flex-col">
          <p className="text-justify text-lg">
            Hello There! I am a Full Stack web developer. I have 4+ years of
            experience in web programming. My Technology Skills:- HTML, CSS,
            SCSS, Tailwind CSS, Bootstrap, Material UI, JavaScript, ES6,
            React.js, React Router, Next.js, Redux, Firebase, Node.js,
            Express.js, MongoDB Etc.
          </p>

          <div className="w-full grid grid-cols-1 xl:grid-cols-3 items-center gap-4 xl:gap-8 mt-10">
            <Card className="h-full">
              <CardHeader className="space-y-4">
                <CardDescription>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chart-network"
                  >
                    <path d="m13.11 7.664 1.78 2.672" />
                    <path d="m14.162 12.788-3.324 1.424" />
                    <path d="m20 4-6.06 1.515" />
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <circle cx="12" cy="6" r="2" />
                    <circle cx="16" cy="12" r="2" />
                    <circle cx="9" cy="15" r="2" />
                  </svg>
                </CardDescription>

                <CardTitle>Skills</CardTitle>
              </CardHeader>

              <CardContent>
                <p>
                  HTML, CSS, JavaScript, React.js, Next.js, Firebase, Node.js,
                  Express.js, MongoDB
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="space-y-4">
                <CardDescription>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                </CardDescription>

                <CardTitle>Education</CardTitle>
              </CardHeader>

              <CardContent>
                <strong className="text-lg">Diploma in Engineering</strong>
                <p> Computer Science and Technology</p>
                <p>CGPA: <strong>3.42</strong></p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="space-y-4">
                <CardDescription>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chart-network"
                  >
                    <path d="m13.11 7.664 1.78 2.672" />
                    <path d="m14.162 12.788-3.324 1.424" />
                    <path d="m20 4-6.06 1.515" />
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <circle cx="12" cy="6" r="2" />
                    <circle cx="16" cy="12" r="2" />
                    <circle cx="9" cy="15" r="2" />
                  </svg>
                </CardDescription>

                <CardTitle>Experience</CardTitle>
              </CardHeader>

              <CardContent>
                <strong className="text-xl">Universe Softcare</strong>
                <p>Frontend Developer</p>
                <p>Feb, 2024 - Jul, 2024</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <p>Tools i use</p>

            <div className="flex gap-5 my-3">
              <Card className="border rounded-md p-2">
                <Image width={32} height={32} src={vscode} alt="vscode" />
              </Card>

              <Card className="border rounded-md p-2">
                <Image width={32} height={32} src={firebase} alt="figma" />
              </Card>

              <Card className="border rounded-md p-2">
                <Image width={32} height={32} src={mongo} alt="git" />
              </Card>

              <Card className="border rounded-md p-2">
                <Image width={32} height={32} src={figma} alt="github" />
              </Card>

              <Card className="border rounded-md p-2">
                <Image width={32} height={32} src={git} alt="github" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
