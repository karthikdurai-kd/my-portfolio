"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and functional web applications using technologies like ReactJS, NextJS, and Node.js. Focused on delivering user-friendly and scalable solutions.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Crafting clean and intuitive interfaces with a focus on enhancing user experience. Ensuring designs are modern, responsive, and accessible.",
    href: "",
  },
  {
    num: "03",
    title: "Cloud Application Development",
    description:
      "Developing scalable and reliable applications using cloud platforms like AWS and Azure. Utilizing serverless technologies for efficient deployment and integration.",
    href: "",
  },
  {
    num: "04",
    title: "IT Consulting",
    description:
      "Offering insights on technology choices and cloud integration to streamline processes. Helping businesses adopt practical and modern solutions.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* Services */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                {/* <Link href={service.href}>
                  <BsArrowDownRight />
                </Link> */}
              </div>
              {/* title */}
              <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
