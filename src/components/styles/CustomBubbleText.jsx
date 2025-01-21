import React from "react";
import { motion } from "framer-motion";

const CustomBubbleText = ({ text }) => {
  return (
    <div>
      <BubbleText text={text} />
    </div>
  );
};

const BubbleText = ({ text }) => {
  return (
    <h2 className="text-3xl font-thin text-indigo-300">
      {text.split("").map((child, idx) => (
        <motion.span
          key={idx}
          className="hoverText"
          whileHover={{ scale: 1.2, fontWeight: 900, color: "rgb(238, 242, 255)" }}
          transition={{ duration: 0.35 }}
        >
          {child}
        </motion.span>
      ))}
    </h2>
  );
};

export default CustomBubbleText;
