import React from "react";
import Navbar from "../components/Navbar";
import My from "../assets/my.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="/"
      className="bg-white pt-12 md:pt-14 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row pt-18 md:pt-6 lg:pt-10 gap-4 md:gap-6 lg:gap-8">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[65%] flex flex-col justify-end"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[4rem] pt-8 sm:text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[9rem] 2xl:text-[11rem] leading-tight font-light"
          >
            Full Stack <br /> Developer
          </motion.h1>

          {/* Intro text on small & medium screens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block lg:hidden mt-4 md:mt-4 sm:text-lg md:text-xl font-semibold text-gray-800"
          >
            Hi myself Sujal Parmar. <br /> A Fullstack Developer <br /> Creating Intuitive <br /> Experience
          </motion.div>
        </motion.div>

        {/* Right Side - Image and Text - Tablet/Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:hidden w-full flex flex-col items-center mt-0"
        >
          <img
            src={My}
            className="rounded-3xl w-full max-w-xs h-auto object-cover"
            alt="Sujal Parmar"
          />
        </motion.div>

        {/* Right Side - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden lg:flex lg:w-[35%] flex-col h-full justify-end gap-10 items-end"
        >
          <img
            src={My}
            className="rounded-3xl h-[25rem] w-full object-center object-cover"
            alt="Sujal Parmar"
          />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-end font-semibold text-lg text-gray-800"
          >
            Hi myself Sujal Parmar. <br /> A Fullstack Developer <br /> Creating Intuitive <br /> Experience
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
