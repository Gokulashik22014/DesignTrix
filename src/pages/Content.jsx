import React from "react";
import Navbar from "../components/Navbar";
import HexagonPattern from "../components/HexagonPattern";
import SquarePattern from "../components/SquarePattren";

const Content = ({ children }) => {
  return (
    <>
      <div className="relative h-screen py-2 content-container">
        <Navbar />
        <div className="mt-24 px-12 z-10">
          {children}
        </div>
      </div>
      {/* <HexagonPattern /> */}
      <SquarePattern/>
    </>
  );
};

export default Content;
