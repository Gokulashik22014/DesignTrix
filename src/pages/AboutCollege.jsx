import React from "react";
import { motion } from "framer-motion";
const AboutCollege = () => {
  return (
    <motion.div className="flex w-full h-screen">
      .{/* about data */}
      <div className="grid grid-flow-col grid-col-2 w-2/3 max-w-2/3 h-full">
        {/* about college */}
        <div className="flex flex-row flex-wrap h-full w-full">
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
        initial={{ opacity: 0,scale:0.5}}
        whileInView={{
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1
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
