import React, { useEffect, useRef } from "react";
import Event from "./Event";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
const Events = () => {
  const containerRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  return (
    <div ref={containerRef} className="mb-[10vh] " id="events">
      {[1, 2, 3, 4, 5].map((data, index) => (
        <Event key={data} range={[index * 0.2, 1]} progress={scrollYProgress} />
      ))}
    </div>
  );
};

export default Events;
