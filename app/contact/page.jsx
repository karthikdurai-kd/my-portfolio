"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify"; // Ensure correct imports
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

// Contact Details Data
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 514 572 6589",
    link: "tel:+15145726589",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "duraikarthik6@gmail.com",
    link: "mailto:duraikarthik6@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "1444 Rue Mackay, Montréal, QC H3G 2H9",
    link: "https://www.google.com/maps?q=1444+Rue+Mackay,+Montréal,+QC+H3G+2H9",
  },
];

const Contact = () => {
  const form = useRef();

  // handleSubmit event after user clicks send message button
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!"); // Using toast for success
          console.log(result.text);
        },
        (error) => {
          toast.error("Failed to send message. Please try again."); // Using toast for error
          console.error(error.text);
        }
      );

    // Optional: Reset form fields after submission
    e.target.reset();
  };

  return (
    <motion.section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-7 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  required
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <Button type="submit" size="md" className="max-w-40 px-3 py-3">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">
                      <a
                        href={item.link}
                        target={item.title === "Address" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-accent"
                      >
                        {item.description}
                      </a>
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
