import React, { useEffect, useRef } from "react";
import CuteAnimal from "../components/ModelComponents/CuteAnimal";
import SplitText from "../components/styles/SplitText";
import ShinyText from "../components/styles/ShinyText";
import { COLORS_TOP } from "../constants";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  easeIn,
  useScroll,
  useTransform,
} from "framer-motion";
import useControlScroll from "../hooks/useControlScroll";
import { description, regLink } from "../data";
import ShiftingCountdown from "../components/ShiftingCountDown";

const Home = ({ handleHover }) => {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0], [1, 0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const backgroundImage = useMotionTemplate`radial-gradient(100% 145% at 30% 0%, transparent 50%, ${color})`;
  return (
    <motion.div
      id="home"
      style={{
        backgroundImage: "url(/images/bg.jpg)",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: easeIn,
      }}
    >
      <motion.div
        ref={ref}
        style={{ backgroundImage }}
        className="flex flex-row max-sm:flex-wrap space-x-4 justify-center items-center h-screen px-4"
      >
        <div className="flex flex-col gap-6 lg:max-h-1/2 lg:h-1/2">
          <div {...handleHover}>
            <SplitText
              text="DesignTrix 2025"
              className="text-4xl max-sm:hidden md:text-6xl lg:text-7xl font-bold text-white"
            />
            <h1 className="lg:hidden text-4xl text-white font-bold mt-4">DesignTrix 2025</h1>
          </div>
          <div className="max-w-[520px] text-justif">
            <p className="text-wrap text-slate-300 pl-2 text-sm sm:text-md">
              {window.innerWidth < 640
                ? `${description.substring(0, 100)}...` // Truncate description for small screens
                : description}
            </p>
          </div>
          <div className="hidden sm:flex">
            <button
              {...handleHover}
              onClick={() => openInNewTab(regLink)}
              className="bg-primary px-8 py-2 rounded-full text-white font-bold btn hover:bg-cyan-500 transition-all  duration-300"
            >
              Register
            </button>
          </div>
        </div>
        <div className="hidden sm:flex h-1/2 max-h-1/2">
          <CuteAnimal />
        </div>
        <div className="flex flex-col sm:hidden w-full pr-5 justify-center">
            <ShiftingCountdown border={border} boxShadow={boxShadow} />
            <div className="flex justify-center py-3">
            <button
              {...handleHover}
              onClick={() => openInNewTab(regLink)}
              className="bg-primary w-2/3  py-2 rounded-full text-white font-bold btn hover:bg-cyan-500 transition-all  duration-300"
            >
              Register
            </button>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
