import React, { useEffect, useRef } from "react";
import {
  easeIn,
  easeInOut,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import ThreeDCard from "../components/styles/ThreeDCard";
import ShinyText from "../components/styles/ShinyText";

const AboutCollege = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        translateY: [0, "10px", 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div className="flex w-full h-screen mt-[50px] overflow-hidden justify-between pl-12 bg-[url(/temp/bgPoster.png)] bg-no-repeat bg-cover">
      <div className="flex w-full h-screen backdrop-blur-sm overflow-hidden justify-between">
        {/* Left Section (About College) */}
        <div className="w-2/3 h-full flex flex-col gap-4 justify-center">
          {/* Logo - Positioned at the Top Left */}
          <div className="flex flex-row justify-between">
            <motion.div
              ref={imageRef}
              initial={{
                scale: 0,
                translateY: "100%",
              }}
              whileInView={{
                scale: 1,
                translateY: 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              onHoverStart={() => {
                controls.stop();
                controls.start({
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                });
              }}
              onHoverEnd={() => {
                controls.stop();
                controls.start({
                  translateY: [0, "10px", 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                });
              }}
              animate={controls}
              className="bg-cover h-24 w-24"
            >
              <img src="/images/clg_logo.png" alt="College Logo" />
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{
                y: [-5, 5, -5], // Bounces up and down
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <h1 className="text-4xl text-[#00ffff]">
                Computer Science and Design
              </h1>
            </motion.div>

            <motion.div
              ref={imageRef}
              initial={{
                scale: 0,
                translateY: "100%",
              }}
              whileInView={{
                scale: 1,
                translateY: 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              onHoverStart={() => {
                controls.stop();
                controls.start({
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                });
              }}
              onHoverEnd={() => {
                controls.stop();
                controls.start({
                  translateY: [0, "10px", 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                });
              }}
              animate={controls}
              className="bg-cover h-40 w-40"
            >
              <img src="/images/CSD_logo.png" alt="College Logo" />
            </motion.div>
          </div>

          {/* Content Section - Centered */}
          <motion.div
            className="text-left mt-8"
            whileHover={{
              y: [-5, 5, -5], // Bounces up and down
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <ShinyText
              text="Our Department mission"
              className="text-3xl font-bold text-gray-700"
              speed={3}
            />
          </motion.div>
          <motion.div
            className="text-left py-2"
            whileHover={{
              y: [-5, 5, -5], // Bounces up and down
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>
          <motion.div
            className="text-left py-2"
            whileHover={{
              y: [-5, 5, -5], // Bounces up and down
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <p className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </motion.div>
          <motion.div
            className="text-left py-2"
            whileHover={{
              y: [-5, 5, -5], // Bounces up and down
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <p className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <div className="rounded-2xl w-1/3 h-full py-20 flex justify-center">
          <ThreeDCard imgURL="/temp/img6.jpg" />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCollege;
