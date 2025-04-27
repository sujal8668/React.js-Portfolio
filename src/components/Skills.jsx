import React from "react";
import { motion } from "framer-motion";

const skills1 = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "GSAP",
  "Motion",
  "Javascript",
  "Sass",
  "React",
  "Redux",
  "Next.js",
];

const skills2 = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "SQL",
  "Git",
  "Github",
  "Figma",
  "Postman",
  "VScode",
];

const Skills = () => {
  return (
    <div className="pt-20 px-4 sm:px-8">
      {/* First Row - Scroll Right */}
      <div className="relative overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-6 sm:gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills1, ...skills1].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium shadow-md hover:scale-105 transition-transform whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Scroll Left */}
      <div className="relative overflow-hidden whitespace-nowrap mt-6">
        <motion.div
          className="flex gap-6 sm:gap-8 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills2, ...skills2].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium shadow-md hover:scale-105 transition-transform whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
