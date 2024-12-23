"use client";

import React, { useState } from "react";
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

// Projects Data
const projects = [
  {
    num: "01",
    category: "full stack",
  },
];

const Projects = () => {
  return <div>Project Page</div>;
};

export default Projects;
