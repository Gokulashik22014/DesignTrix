import React, { useEffect, useRef } from "react";
import { motion, animate, easeIn, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { COLORS_TOP } from "../constants";
import { description, regLink } from "../data";
import ShiftingCountdown from "../components/ShiftingCountDown";

const Home = ({ handleHover }) => {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundImage = useMotionTemplate`radial-gradient(100% 145% at 30% 0%, transparent 50%, ${color})`;

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0.3, 0], [1, 0]);

  useEffect(() => {
    animate(color, COLORS_TOP, { ease: "easeInOut", duration: 4, repeat: Infinity, repeatType: "mirror" });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <motion.div
      id="home"
      style={{
        backgroundImage: "url(/images/bg.jpg)",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: easeIn }}
    >
      {/* Background color animation effect */}
      <motion.div ref={ref} style={{ backgroundImage }} className="flex flex-col items-center h-screen px-4 pt-16 space-y-10 sm:space-y-16">
        
        {/* College Name & Department */}
        <div className="flex flex-col sm:flex-row w-full justify-center items-center text-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-24 h-24 object-cover">
            <img src="/images/clg_logo.png" alt="College Logo" />
          </div>
          <div className="flex flex-col items-center">
            <motion.h1 style={{ color }} className="text-lg sm:text-3xl lg:text-5xl font-extrabold roboto-serif-main">
              R.M.K. Engineering College
            </motion.h1>
            <motion.h2 className="text-sm sm:text-xl lg:text-2xl font-bold text-white/70">
              Department of Computer Science and Design
            </motion.h2>
          </div>
        </div>

        {/* Event Title & Details */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{ color }}
            className="text-3xl sm:text-5xl font-extrabold"
          >
            DesignTrix 2025
          </motion.h1>
          <p className="max-w-[720px] text-gray-300 text-md sm:text-lg">
            {description.content}
          </p>
        </div>

        {/* Register Button & Countdown */}
        <div className="flex flex-col items-center space-y-6 lg:hidden">
          <ShiftingCountdown border={border} boxShadow={boxShadow}/>
        </div>
          <button
            {...handleHover}
            onClick={() => openInNewTab(regLink)}
            className="bg-primary px-8 py-2 rounded-full text-white font-bold hover:bg-cyan-500 transition-all duration-300"
          >
            Register
          </button>

      </motion.div>
    </motion.div>
  );
};

export default Home;
