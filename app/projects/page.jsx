"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

// Imporing components
import WorkSliderButtons from "@/components/WorkSliderButtons";

// Projects Data
const projects = [
  {
    num: "01",
    category: "Full Stack Web App",
    title: "Work Management Application",
    description:
      "An advanced MERN stack application designed to enhance work management through seamless project initiation, task distribution, and real-time updates. This application is tailored to improve project tracking and team collaboration, offering automated role-based access control and real-time notifications.",
    stack: [
      { name: "ReactJS" },
      { name: "AntD" },
      { name: "TailwindCSS" },
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "MongoDB" },
      { name: "Socket.io" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack Web App",
    title: "Vote Stream App",
    description:
      "Vote Stream App is a real-time voting application where users can join rooms based on topics, share comments, and see them displayed as a WordCloud format instantly. The app is built with Next.js for the frontend, Tailwind CSS for styling, Express.js for the backend, Redis for data storage, and Socket.io for real-time updates.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "Redis" },
      { name: "Socket.io" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Serverless Cloud Application",
    title: "Travel Tales App",
    description:
      "Travel Tales App is a serverless web application designed to provide users with an interactive platform to share and explore travel experiences. The frontend is built with React and TypeScript, while the backend is developed with AWS services to create a robust, scalable, and efficient infrastructure.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "AWS Amplify" },
      { name: "AWS Lambda" },
      { name: "AWS API Gateway" },
      { name: "AWS DynamoDB" },
      { name: "AWS S3" },
      { name: "AWS Cognito" },
      { name: "AWS CDK" },
      { name: "CloudFormation" },
      { name: "AWA KMS" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  // handleSlideChange event
  const handleSlideChange = (swiper) => {
    // fetch current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on the current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap[30px]">
          {/* Project Description Content Area */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              {/* project tech stack */}
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="h-[50px] bg-[#232329] rounded-xl flex items-center justify-center text-[15px] text-accent px-4"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* project border */}
              <div className="border border-white/20"></div>
              {/* project links */}
              <div className="flex items-center gap-4">
                {/* project live button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* project github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Project Image Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* project image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project-image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSliderButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
