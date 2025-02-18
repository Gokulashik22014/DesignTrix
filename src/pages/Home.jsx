import React, { useEffect, useRef } from "react";
import CuteAnimal from "../components/ModelComponents/CuteAnimal";
import CrystalComponent from "../components/ModelComponents/CrystalComponent";

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
import { description } from "../data";

const Home = ({ handleHover }) => {
  const color = useMotionValue(COLORS_TOP[0]);
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
        className="flex flex-row space-x-4 justify-center items-center h-screen"
      >
        <div className="flex flex-col gap-6 max-h-1/2 h-1/2">
          <div {...handleHover}>
            <SplitText
              text="DesignTrix 2025"
              className="text-7xl font-bold text-white"
            />
          </div>
          <div className="max-w-[520px]">
            <p className="text-wrap text-slate-500 pl-2 text-md">
              {description}
            </p>
          </div>
          <div>
            <button
              {...handleHover}
              className="bg-primary px-8 py-2 rounded-full text-white font-bold"
            >
              Register
            </button>
          </div>
        </div>
        <div className="h-1/2 max-h-1/2 max-sm:hidden">
          <CuteAnimal />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
