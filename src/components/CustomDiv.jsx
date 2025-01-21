import React from 'react'
import { motion } from 'framer-motion';
const CustomDiv = ({ children,className }) => {
    return (
      <motion.div
        initial={{ opacity: 0,y:75 }}
        animate={{ opacity: 1,y:0 }}
        transition={{duration:0.5,delay:0.25}}
        className={`bg-transparent backdrop-blur-sm rounded-md px-4 py-4 shadow-sm shadow-white ${className}`}
        
      >
        {children}
      </motion.div>
    );
  };

export default CustomDiv