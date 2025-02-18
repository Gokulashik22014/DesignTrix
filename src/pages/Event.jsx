import React, { useRef } from "react";
import ThreeDCard from "../components/styles/ThreeDCard";
import TrueFocus from "../components/styles/TrueFocus";
import { useScroll, useTransform } from "framer-motion";

import { motion } from "framer-motion";
// import EventNavbar from "../components/EventNavbar";
import SpotlightCard from "../components/styles/SpotlightCard";
const Event = ({ progress, range }) => {
  const containerRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scaleMain = useTransform(progress, range, [1, 0.5]);
  return (
    <div className="px-24 mb-12 py-6 h-screen sticky top-0">
      
      <motion.div
        style={{ scale: scaleMain }}
        viewport={{
          margin: "-100px",
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden w-full h-screen px-24 py-6 flex flex-col gap-12 items-start bg-gray-900 rounded-lg"
      >
       
        {/* New Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-teal-500/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/50 via-teal-500/30 to-transparent"></div>

        {/* Main Content */}
        <div
          className="relative z-10 w-full flex flex-col gap-12 max-h-screen h-full"
          ref={containerRef}
        >
          {/* Title Section */}
          <div className="w-full flex">
            <h1 className="text-5xl font-bold text-white flex space-x-3">
              <TrueFocus
                sentence="Technical Coding"
                manualMode={true}
                borderColor="red"
                blurAmount={"4"}
              />
            </h1>
          </div>

          {/* Content Grid */}
          <div className="w-full h-full flex gap-8">
            {/* Left Section - About */}
            <div className="w-1/3 flex flex-col gap-6">
              <SpotlightCard className="bg-transparent text-white p-6 rounded-lg shadow-lg border-0 hover:scale-105 transition-transform duration-300 ease-in-out">
              
                <p className="text-2xl font-bold mb-4 text-cyan-400">What?</p>
                <p className="text-lg text-gray-300">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              
              </SpotlightCard>

              {/* Image Below About */}
              <div className="overflow-hidden relative rounded-lg hover:scale-110">
                <motion.div
                  style={{ scale }}
                  className="w-full rounded-lg  shadow-lg border border-red-400/20 hover:brightness-110 transition duration-300"
                >
                  <img
                    src="/temp/PaperPresentation.jpg"
                    alt="Event"
                    className="object-contain w-full h-64 rounded-lg"
                  />
                </motion.div>
              </div>
            </div>

            {/* Middle Section - Rules */}
            
            
            <SpotlightCard className="w-1/3 h-2/3 bg-transparent text-white p-6 rounded-lg shadow-lg border-0">
              <p className="text-2xl font-bold mb-4 text-red-400">Rules:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Cras sodales metus ac turpis consectetur venenatis.</li>
                <li>Integer imperdiet lorem eget rhoncus pharetra.</li>
                <li>Morbi rutrum elit sed dapibus aliquam.</li>
              </ul>
              </SpotlightCard>
            
            

            {/* Right Section - Standalone Image */}
            <div className="flex justify-center py-6">
              <ThreeDCard imgURL="/temp/AIArtWar.gif" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;