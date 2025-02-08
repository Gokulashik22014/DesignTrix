import React, { useEffect } from "react";

const useControlScroll = (delay) => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent default scrolling
      window.scrollBy({
        top: event.deltaY * delay, // Reduce scroll speed (change factor)
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);
  return null;
};

export default useControlScroll;
