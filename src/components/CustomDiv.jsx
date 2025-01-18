import React from 'react'
import { motion } from 'framer-motion';
const CustomDiv = ({ children,className }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease:'easeInOut' }}
        className={`bg-transparent backdrop-blur-sm rounded-md px-4 py-4 shadow-sm shadow-white ${className}`}
      >
        {children}
      </motion.div>
    );
  };

export default CustomDiv