"use client";

import {
  SiReact,
  SiDocker,
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
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaAws, FaCloud } from "react-icons/fa";
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
    "I hold a Master’s degree in Software Engineering from Concordia University, with a strong foundation in developing scalable web applications. Proficient in modern frameworks and cloud platforms like AWS and Azure, I focus on creating user-friendly, high-performance solutions. Passionate about solving complex problems and continuously expanding my technical expertise.",
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
      duration: "January 2023 - December 2024",
    },
    {
      institution: "Velammal Institute of Technology",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "June 2016 - May 2020",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "ReactJS" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <SiExpress />, name: "ExpressJS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaCloud />, name: "Azure" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFigma />, name: "Figma" },
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px] mt-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-h-[40px] text-center ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education content */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px] mt-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-h-[40px] text-center ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills content */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider dealayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] roundex-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about content */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center rounded-xl xl:justify-start gap-4 w-full h-[45px] bg-[#232329] roundex-xl"
                      >
                        <span className="text-white/60 pl-[20px]">
                          {item.fieldName}
                        </span>
                        <span>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
