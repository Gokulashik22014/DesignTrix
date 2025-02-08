import React, { useEffect, useRef } from "react";
import {
  easeIn,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
const AboutCollege = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef);
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start({
        translateY: [0, "10px", 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);
  return (
    <motion.div className="flex w-full h-screen mt-4 overflow-hidden">
      .{/* about data */}
      <div className="grid grid-flow-col grid-col-2 w-2/3 max-w-2/3 h-full">
        {/* about college */}
        <div className="flex flex-row flex-wrap h-full w-full">
          <div className="bg-cover h-1/2 w-1/2 flex items-center justify-center">
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
                  translateY: [0, "10px", 0], // Restarts animation
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                });
              }}
              animate={controls}
              className="bg-cover h-32 w-32"
            >
              <img src="/images/clg_logo.png" alt="" />
            </motion.div>
          </div>
          {[0, 1, 2].map((data) => (
            <motion.div
              initial={{
                opacity: 0,
                translateX: "-100%",
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                duration: 0.7 * (data + 1),
              }}
              whileHover={{
                scale: 1.1,
                translateX: "5px",
              }}
              viewport={{
                margin:"-50px"
              }}
              className="max-h-1/2 w-1/2 flex items-center text-justify px-4"
              key={data}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </motion.div>
          ))}
        </div>
        {/* about department */}
        <div className="flex flex-row-reverse flex-wrap h-full w-full">
          <div className="bg-cover h-1/2 w-1/2 flex items-center justify-center">
            <div className="bg-cover h-32 w-32">
              <img src="/images/clg_logo.png" alt="" />
            </div>
          </div>
          {[0, 1, 2].map((data) => (
            <div
              className="bg-cover max-h-1/2 w-1/2 flex items-center text-justify px-4"
              key={data}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </div>
          ))}
        </div>
      </div>
      {/* image */}
      <motion.div
        className="object-cover w-1/3 bg-white"
        initial={{ opacity: 0, translateX: "100%" }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          duration: 0.5,
          ease: easeIn,
        }}
      >
        <img
          src="/images/decor.jpg"
          alt=""
          className="object-cover max-h-full w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutCollege;
