import React from "react";
import Navbar from "../components/Navbar";

const Content = ({ children,handleHover }) => {
  return (
    <div className="h-screen">
      <div className="flex w-full justify-center mt-2">
        <Navbar handleHover={handleHover} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Content;
