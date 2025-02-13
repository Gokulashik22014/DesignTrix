import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../../public/temp/dragon_1.jpg";
import image2 from "../../public/temp/dragon_2.jpg";
import image3 from "../../public/temp/dragon_3.jpg";
import image4 from "../../public/temp/dragon_4.jpg";
import image5 from "../../public/temp/dragon_5.jpg";
import image6 from "../../public/temp/dragon_6.jpg";

const Images = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const imageInfo = [
    {
      image: image1,
      scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
      position: { top: "0", left: "0" },
    },
    {
      image: image2,
      scale: useTransform(scrollYProgress, [0, 1], [1, 3]),
      position: { top: "0", left: "0", zIndex: 100 },
    },
    {
      image: image3,
      scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
      position: { top: "0", right: "0" },
    },
    {
      image: image4,
      scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
      position: { bottom: "0", left: "0" }, // Image 4
    },
    {
      image: image5,
      scale: useTransform(scrollYProgress, [0, 1], [1, 2.4]),
      position: { bottom: "0%", right: "0%" }, // Image 5
    },
    {
      image: image6,
      scale: useTransform(scrollYProgress, [0, 1], [1, 1.8]),
      position: { bottom: "0", left: "0" },
    },
  ];
  return (
    <div ref={container} className="relative h-[300vh] mt-[300px]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {imageInfo.map((data, index) => (
          <motion.div
            style={{
              scale: data.scale,
              ...data.position, // Apply the position for each image
            }}
            className="absolute w-full h-full top-0 flex items-center justify-center "
          >
            <div className="h-[25vh] w-[25vw] relative">
              <img
                src={data.image}
                alt={`Dragon`}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Images;
