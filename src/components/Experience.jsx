import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  // Animation variants for fading and sliding up
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="border-2 font-semibold px-6 py-3 rounded-3xl">
          Experience
        </span>
      </motion.div>

      {/* Heading Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between gap-6 mb-10"
      >
        <h1 className="text-3xl sm:text-4xl font-medium">
          A Yearly snapshot of my <br className="hidden sm:block" />
          creative growth
        </h1>
        <h2 className="text-sm sm:text-base text-gray-600">
          An annual summary that summarizes my <br className="hidden md:block" />
          creative journey and development throughout <br className="hidden md:block" />
          the year.
        </h2>
      </motion.div>

      {/* Experience Cards */}
      <div>
        {/* Card 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 py-8 hover:bg-gray-200 rounded-xl"
        >
          <div>
            <h1 className="text-xl sm:text-2xl font-medium">
              MERN Stack Developer at GFG
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Mern Stack developer at GeeksforGeeks, where I gained hands-on
              experience in building full-stack web applications.
            </p>
          </div>
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">2024-2025</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 py-8 hover:bg-gray-200 rounded-xl"
        >
          <div>
            <h1 className="text-xl sm:text-2xl font-medium">
              Frontend Developer at Unified Mentor
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              React JS developer at Unified Mentor, focused on building modern,
              scalable, and performant web applications using React.
            </p>
          </div>
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">2025-2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
