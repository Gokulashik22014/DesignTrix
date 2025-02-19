import React, { useRef } from "react";
import ThreeDCard from "../components/styles/ThreeDCard";
import TrueFocus from "../components/styles/TrueFocus";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import SpotlightCard from "../components/styles/SpotlightCard";

const Event = ({ progress, range, name, desc, smallImg, bigImg, rules,handleHover }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scaleMain = useTransform(progress, range, [1, 0.5]);

  return (
    <div className="px-6 sm:px-12 md:px-24 mb-12 py-6 h-screen sticky top-0">
      <motion.div
        style={{ scale: scaleMain }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="relative overflow-hidden w-full h-screen px-6 sm:px-12 py-6 flex flex-col gap-6 md:gap-12 items-start bg-gray-900 rounded-lg"
      >
        {/* New Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 via-rose-500/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-orange-600/40 via-rose-500/20 to-transparent"></div>

        {/* Main Content */}
        <div
          className="relative z-10 w-full flex flex-col gap-6 md:gap-12 max-h-screen h-full"
          ref={containerRef}
        >
          {/* Title Section */}
          <div className="w-full flex space-x-6 items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              <TrueFocus
                sentence={name}
                manualMode={true}
                borderColor="red"
                blurAmount={"4"}
              />
            </h1>
            <button {...handleHover} className="btn hover:bg-black/30 text-xl border border-white shadow-md rounded-full px-6 py-2 text-white bg-gray-900/20">
              Register
            </button>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Left Section - About */}
            <div className="lg:flex lg:flex-col gap-6 sm:hidden max-sm:hidden">
              <SpotlightCard className="bg-transparent text-white p-6 rounded-lg shadow-lg border-0 hover:scale-105 transition-transform duration-300 ease-in-out">
                <p className="text-2xl font-bold mb-4 text-cyan-400">What?</p>
                <p className="text-lg text-gray-300">{desc}</p>
              </SpotlightCard>

              {/* Image Below About */}
              <div {...handleHover} className="overflow-hidden relative rounded-lg hover:scale-110 transition duration-300">
                <motion.div
                  style={{ scale }}
                  className="w-full rounded-lg shadow-lg border border-red-400/20 hover:brightness-110"
                >
                  <img
                    src={smallImg}
                    alt="Event"
                    className="object-cover w-full h-48 sm:h-64 rounded-lg"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>

            {/* Middle Section - Rules */}
            <SpotlightCard className="h-auto bg-transparent text-white p-6 rounded-lg shadow-lg border-0 hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-bold mb-4 text-red-400">Rules:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {rules.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </SpotlightCard>

            {/* Right Section - Standalone Image */}
            <div className="flex justify-center py-6">
              <ThreeDCard imgURL={bigImg} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
