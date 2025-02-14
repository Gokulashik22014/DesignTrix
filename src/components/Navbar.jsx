import React from "react";
import ZapText from "./styles/ZapText";
import { navbarLinks } from "../data";
const Navbar = () => {
  return (
    <div className="border border-slate-200 px-12 py-4 max-w-1/2 flex justify-center items-center rounded-lg fixed z-50">
      <ul className="uppercase flex flex-row space-x-6 text-slate-600">
        {navbarLinks.map((data,index) => (
          <ZapText key={index} text={data.name} secondaryColor={"text-white"} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
