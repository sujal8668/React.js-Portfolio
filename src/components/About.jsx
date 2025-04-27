import React from "react";
import { motion } from "framer-motion";
import Second from "../assets/second.webp";

const About = () => {
  // Animation variants for fading and sliding up
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="flex flex-col bg-white pt-20 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      {/* Section Title */}
      <div className="mb-10">
        <span className="border-2 font-semibold px-6 py-3 rounded-3xl">
          About Me
        </span>
      </div>

      {/* Heading Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-semibold"
        >
          Development has always been more <br className="hidden sm:block" />
          than just a job - it's my passion
        </motion.h1>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 font-medium text-base sm:text-lg"
        >
          Development is not just a job for me, <br className="sm:hidden" />
          It's a passion that drives me
        </motion.h1>
      </div>

      {/* Image and Stats Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        {/* Image Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[60%]"
        >
          <img
            src={Second}
            className="rounded-2xl w-full object-cover"
            alt="About"
          />
        </motion.div>

        {/* Stats Section */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="font-semibold text-4xl sm:text-5xl">+320</h1>
            <p className="font-medium text-gray-500 mt-2">
              Our step-by-step to simplify your <br className="hidden sm:block" />
              Excellent Project Powerful
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className="font-semibold text-4xl sm:text-5xl">+280</h1>
            <p className="font-medium text-gray-500 mt-2">
              Our step-by-step to simplify your <br className="hidden sm:block" />
              Excellent Project Our step-by-step <br className="hidden sm:block" />
              to simplify
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
