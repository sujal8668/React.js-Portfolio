import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "We help your business create mobile apps that are not only attractive, but also functional.",
    image:
      "https://cdn.dribbble.com/userupload/17127043/file/original-805c3b905e6934923350385006b9ee32.jpg?resize=1504x1128&vertical=center",
  },
  {
    title: "Backend Development",
    description:
      "We create websites that are responsive, modern and easy to navigate, helping your business look professional and reach your audience effectively.",
    image:
      "https://cdn.dribbble.com/userupload/27260900/file/original-8e3db58a34fa8d4b4b24e004e538fdc2.png?resize=1504x1128&vertical=center",
  },
  {
    title: "Fullstack Development",
    description:
      "We use the latest technology to ensure the products we make are not only efficient, but can also grow with your business needs.",
    image:
      "https://cdn.dribbble.com/userupload/19057482/file/original-5011f08e7deeabc7ebf19f4c6c41da99.png?resize=1504x1128&vertical=center",
  },
];

const Services = () => {
  // Animation variants for fading and sliding up
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="mb-10">
        <span className="border-2 font-semibold px-6 py-3 rounded-3xl">
          Services
        </span>
      </div>

      {/* Visible on small, medium, large screens (hidden on xl and above) */}
      <div className="block xl:hidden">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex rounded-md px-2 hover:bg-gray-200 flex-col md:flex-row justify-between items-center gap-8 py-6"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto md:mx-0">
                {service.description}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-40 h-40 object-cover object-center shadow-md"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visible only on xl and above */}
      <div className="hidden xl:block">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex rounded-md hover:bg-gray-200 justify-between items-center gap-8 py-6"
          >
            <div className="flex justify-between items-center w-full">
              <h2 className="text-3xl w-[40%] font-semibold">{service.title}</h2>
              <img
                src={service.image}
                alt={service.title}
                className="w-50 h-60 object-cover object-center rounded-xl shadow-md"
              />
              <p className="text-gray-600 text-sm max-w-md w-[20%]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
