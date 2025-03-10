import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ZapText = ({
  text,
  link,
  isSelected,
  classname,
  primaryColor,
  secondaryColor,
  handleHover,
}) => {
  if (isSelected) {
    return (
      <h1
        {...handleHover}
        className={`text-cyan-300 underline transition-all duration-75 ease-in-out`}
      >
        {text}
      </h1>
    );
  }
  return (
    <motion.div
      {...handleHover}
      whileHover="hover"
      initial="initial"
      transition={{ ease: "easeInOut" }}
      className="relative overflow-hidden block whitespace-nowrap items-start cursor-pointer"
    >
      <motion.div
        className={`${primaryColor}`}
        variants={{
          hover: { y: "-200%" },
          initial: { y: 0 },
        }}
      >
        <Link to={`#${link}`}>{text}</Link>
      </motion.div>
      <motion.div
        {...handleHover}
        className={`absolute inset-0 ${secondaryColor}`}
        variants={{
          hover: { y: 0 },
          initial: { y: "200%" },
        }}
      >
        <Link to={`#${link}`}>{text}</Link>
      </motion.div>
    </motion.div>
  );
};

export default ZapText;
