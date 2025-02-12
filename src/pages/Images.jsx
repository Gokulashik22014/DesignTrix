import React from "react";
import { motion } from "framer-motion";
const Images = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="bg-black-900 text-white flex items-center justify-center p-4 w-screen"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="relative flex flex-grow overflow-hidden rounded-xl shadow-lg transition-transform duration-300"
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
    </div>
  );
};

export default Images;
