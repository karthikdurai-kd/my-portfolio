"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* image */}
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="/assets/Karthik_Photo_2.png"
            priority
            quality={100}
            width={300}
            height={300}
            alt="Profile-Pic"
            className="object-contain rounded-[100px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
