import React, { useEffect, useRef } from "react";
import Event from "./Event";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { events } from "../data";
const Events = () => {
  const containerRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  return (
    <div ref={containerRef} className="mb-[10vh] " id="events">
      {events.map((data, index) => (
        <Event key={index} range={[index * 0.2, 1]} progress={scrollYProgress} {...data}/>
      ))}
    </div>
  );
};

export default Events;
