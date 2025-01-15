import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COLORS_TOP } from "../constants";

const Square = ({ hexagon, index, hexagonSize }) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const playAnimationAtRandom = () => {
      setTrigger(true); // Start animation
      setTimeout(() => setTrigger(false), 500); // Reset after animation
    };

    const randomInterval = () => Math.random() * 4000 + 6000; // Random interval between 6-10 seconds

    const loop = () => {
      playAnimationAtRandom();
      const timeout = setTimeout(loop, randomInterval()); // Schedule next animation
      return () => clearTimeout(timeout); // Cleanup
    };

    const cancelLoop = loop(); // Start the loop
    return () => cancelLoop();
  }, []);

  return (
    <motion.div
      className={`square-element rounded-md`}
      key={hexagon.id}
      initial={{ scale: 0, opacity: 1 }}
      animate={
        trigger
          ? { scale: 1.04, opacity: 0.3, rotate: 0.5 }
          : { scale: 1, opacity: 1, rotate: 0 }
      }
      transition={{
        duration: Math.max(0.008 * (index / 2), 0.01),
      }}
      style={{
        position: "absolute",
        top: hexagon.top,
        left: hexagon.left,
        width: `${hexagonSize.width}px`,
        height: `${hexagonSize.height}px`,
        backgroundColor: 'black', // Random color
        borderColor:COLORS_TOP[Math.floor(Math.random() * 2)],
        borderWidth:1
      }}
    ></motion.div>
  );
};

const SquarePattern = () => {
  const [hexagons, setHexagons] = useState([]);
  const hexagonSize = {
    width: 40,
    height: 40, // Same width and height for square
    verticalSpacing: 45,
    horizontalSpacing: 45,
  };

  useEffect(() => {
    const generateHexagons = () => {
      const { width, height, verticalSpacing, horizontalSpacing } = hexagonSize;

      // Calculate grid dimensions
      const countY = Math.ceil(window.innerHeight / verticalSpacing) + 1;
      const countX = Math.ceil(window.innerWidth / horizontalSpacing) + 1;

      const newHexagons = [];

      // Populate square positions
      for (let i = 0; i < countY; i++) {
        for (let j = 0; j < countX; j++) {
          newHexagons.push({
            id: `${i}-${j}`,
            top: i * verticalSpacing,
            left: j * horizontalSpacing + ((i * (horizontalSpacing / 2)) % horizontalSpacing),
          });
        }
      }

      setHexagons(newHexagons);
    };

    generateHexagons();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      className="hexagon"
    >
      {hexagons.map((hexagon, index) => (
        <Square hexagon={hexagon} index={index} hexagonSize={hexagonSize} />
      ))}
    </div>
  );
};

export default SquarePattern;
