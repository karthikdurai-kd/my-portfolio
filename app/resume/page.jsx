"use client";

import {
  SiReact,
  SiDocker,
  SiNodejs,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiPrisma,
  SiRedux,
  SiExpress,
  SiFigma,
  SiTailwindcss,
  SiJenkins,
  SiFirebase,
  SiMicrosoftazure,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

// About Data contents
const about = {
  title: "About me",
  description:
    "I hold a Master’s degree in Software Engineering with a strong foundation in developing scalable web applications. Proficient in modern frameworks and cloud platforms like AWS and Azure, I focus on creating user-friendly, high-performance solutions. Passionate about solving complex problems and continuously expanding my technical expertise.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Karthik Durai",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 514 572 6589",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:duraikarthik6",
    },
    {
      fieldName: "Email",
      fieldValue: "duraikarthik6@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Montreal, Quebec, Canada",
    },
  ],
};

// Work Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "",
  items: [
    {
      company: "Pointers",
      position: "Full Stack Developer",
      duration: "January 2021 - September 2022",
    },
    {
      company: "Kaar Technologies",
      position: "Software Developer",
      duration: "May 2020 - December 2020",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Concordia University",
      degree: "Master of Engineering in Software Engineering",
      duration: "January 2023 - Deceber 2024",
    },
    {
      institution: "Velammal Institute of Technology ",
      degree: "Bachelor of Engineering in Computer Science ",
      duration: "June 2016 - May 2020",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    { icon: <SiReact />, name: "ReactJS" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiExpress />, name: "ExpressJS" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiJenkins />, name: "JUnit" },
    { icon: <SiFirebase />, name: "Firebase" },
    // Add more skills here
  ],
};

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience content */}
            <TabsContent value="experience" className="w-full">
              Experience
            </TabsContent>
            {/* education content */}
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
            {/* skills content */}
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            {/* about content */}
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
