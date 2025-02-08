import React from "react";
import { motion } from "framer-motion";
const Images = () => {
  return (
    <div className="bg-black-900 text-white flex items-center justify-center p-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {[1].map((num) => (
          <div
            key={num}
            className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`/images/dragon_${num}.jpg`}
              alt={`Image ${num}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
        <motion.div
          initial={{
            scale: 1,
          }}
          whileInView={{
            scale: 5,
          }}
          viewport={{
            margin:"-500px"
          }}
          transition={{
            duration:2,
            ease:"easeInOut"
          }}
          className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={`/images/dragon_${2}.jpg`}
            alt={`Image ${2}`}
            className="w-full h-48 object-cover"
          />
        </motion.div>
        {[3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`/images/dragon_${num}.jpg`}
              alt={`Image ${num}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const Images = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   return (
//     <div ref={containerRef} className="relative h-[200vh] bg-black flex flex-col items-center justify-center space-y-10">
//       <div className="sticky top-0 flex flex-col gap-10">
//         {[1, 2, 3, 4, 5, 6].map((index) => {
//           const scale = useTransform(scrollYProgress, [0, 1], [1, 2]); // Scale effect as user scrolls

//           return (
//             <motion.img
//               key={index}
//               src={`/images/dragon_${index}.jpg`}
//               alt={`Image ${index}`}
//               className="w-[300px] h-[200px] object-cover rounded-lg"
//               style={{ scale }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Images;

