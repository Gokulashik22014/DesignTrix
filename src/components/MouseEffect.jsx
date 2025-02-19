import { useState, useEffect, useRef } from "react";

const CURSOR_SIZE = 40;

export default function MouseEffect({ hover }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({
        x: clientX - CURSOR_SIZE / 2,
        y: clientY - CURSOR_SIZE / 2,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const styleWhenNotHovered = {
    width: CURSOR_SIZE,
    height: CURSOR_SIZE,
    backgroundColor: "cyan",
    borderRadius: "50%",
    transition: "width 0.2s ease, height 0.2s ease, transform 0.1s ease",
    opacity: 0.2,
  };

  const styleWhenHovered = {
    width: CURSOR_SIZE*1.2,
    height: CURSOR_SIZE*1.2,
    borderWidth:"3px",
    borderColor: "cyan",
    borderRadius:"10%",
    transition: "width 0.2s ease, height 0.2s ease, transform 0.1s ease",
    transform: "rotateZ(45deg)", // Correct way to apply rotation
    opacity: 0.4,
  };

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: cursorPosition.y,
        left: cursorPosition.x,
        pointerEvents: "none",
        ...(!hover ? styleWhenNotHovered : styleWhenHovered), // Apply styles dynamically
      }}
    />
  );
}
