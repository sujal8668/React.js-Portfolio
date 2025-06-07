import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import fleaf from '../assets/fleag.png'
import award from '../assets/award.png'
import notes from '../assets/note.png'
import aigen from '../assets/aigen.png'
import feedback from '../assets/Feedback.png'

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "MERN E-Commerce",
    desc: "This website provides a seamless shopping experience with a modern, responsive, and user-friendly interface. It contains an admin panel, searching features, filters, product details, a shopping cart, user authentication, product listings, and a great UI/UX.",
    img: fleaf, // Update your local image path
    link: "https://5leaf-frontend.vercel.app/",
  },
  {
    id: 2,
    color: "from-purple-300 to-red-300",
    title: "IGen AI SaaS",
    desc: "A Text to Image Generator App powered with AI with a modern UI, featuring instant Images, user authentication, and a smooth user experience.",
    img: aigen,
    link: "https://igen-frontend.vercel.app/",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Award Winning Site",
    desc: "An award-winning website made in React and JavaScript featuring scroll-based animations, clip-path shaped animations, 3D hover effects, video transitions, smooth UI/UX, and full responsiveness.",
    img: award,
    link: "https://award-winning-website-main-five.vercel.app/",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Feedback Web App",
    desc: "A sleek and responsive Feedback app with a modern UI, designed for quick and organized feedback collection. It includes dynamic feedback creation, color-coded feedback, pop-ups, day-night mode, and full responsiveness.",
    img: feedback,
    link: "https://feedback-jet-eight.vercel.app/",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div ref={ref} className="h-[600vh] relative">
      <div className="mb-10 pt-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <span className="border-2 font-semibold px-6 py-3 rounded-3xl">
          Portfolio
        </span>
      </div>

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex flex-col px-8 sm:px-16 md:px-24 lg:px-44 items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 text-center" />
            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex flex-col px-8 sm:px-16 md:px-24 lg:px-44 items-center justify-center bg-gradient-to-r ${item.color} text-center`}
              >
                <h1 className="text-3xl md:text-5xl pt-12 font-bold text-white pb-4">
                  {item.title}
                </h1>
                <div className="relative w-full max-w-[500px] h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-white text-sm md:text-lg max-w-2xl mt-4">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
                >
                  See Demo
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </motion.div>
  );
};

export default Portfolio;
