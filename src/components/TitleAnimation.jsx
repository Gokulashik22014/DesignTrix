import React from "react";
const TitleAnimation = () => {
  return (
    <motion.div
      className="shadow-sm h-full  flex justify-center items-center py-4 bg-yellow-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      
    </motion.div>
  );
};

export default TitleAnimation;
