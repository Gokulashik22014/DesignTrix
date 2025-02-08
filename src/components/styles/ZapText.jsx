import React from "react";
import { motion } from "framer-motion";
const ZapText = ({ text, classname,primaryColor,secondaryColor }) => {
  return (
    <motion.div whileHover="hover" initial="initial" transition={{ease:"easeInOut"}} className="relative overflow-hidden block whitespace-nowrap items-start cursor-pointer">
      <motion.div className={`${primaryColor}`} variants={{
        hover:{y:"-200%"},
        initial:{y:0}
      }}>
        {text}
      </motion.div>
      <motion.div
      className={`absolute inset-0 ${secondaryColor}`}
        variants={{
            hover:{y:0},
            initial:{y:"200%"}
          }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default ZapText;
