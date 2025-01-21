import React from "react";
import Navbar from "../components/Navbar";

const Content = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="flex w-full justify-center mt-2">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Content;
