import React from "react";
import { motion } from "framer-motion";
import ThreeDCard from "../components/styles/ThreeDCard";
import GradientText from "../components/styles/GradientText";
import { aboutCollege } from "../data";

const AboutCollege = () => {
  return (
    <div
      id="about"
      className="h-screen relative w-full  flex items-center justify-center bg-[url(/images/about_bg.gif)] bg-no-repeat bg-cover bg-center"
    >
      {/* Glassmorphism Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-wrap h-full py-16 lg:flex-nowrap items-center gap-8 px-6 lg:px-16">
        {/* Left Section: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="lg:w-2/3 flex flex-col space-y-7 h-full items-start text-white"
        >
          {/* College Logo */}
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 object-cover shadow-lg">
              <motion.img
                src="/images/clg_logo.png"
                alt="College Logo"
                className="object-cover shadow-lg"
                initial={{ scale: 0.8, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <h1 className="text-2xl lg:text-5xl font-bold text-[#00ffff]">
              Computer Science and Design
            </h1>
          </div>

          <div className="flex flex-col items-start space-y-4">
            {/* Section Title */}
            <div className="mt-6">
              <GradientText className="p-2">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Department Mission</h2>
              </GradientText>
            </div>

            {/* Mission Description */}
            <div className="mt-4 space-y-3 text-sm lg:text-xl max-sm:text-red-500">
              {aboutCollege.description.map((data, index) => (
                <motion.p
                  key={index}
                  className="text-sm lg:text-xl text-gray-200 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {data}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section: Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-sm:hidden lg:w-1/3 flex justify-center h-full"
        >
          <ThreeDCard imgURL="/images/logo.png" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCollege;