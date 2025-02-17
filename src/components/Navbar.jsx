import React, { useEffect, useState } from "react";
import ZapText from "./styles/ZapText";
import { navbarLinks } from "../data";
import { useLocation } from "react-router-dom";
const Navbar = ({handleHover}) => {
  const location = useLocation();
  const [selected, setSelected] = useState();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setSelected(id);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="border border-slate-200 px-12 py-4 max-w-1/2 flex justify-center items-center rounded-lg fixed z-50">
      <ul className="uppercase flex flex-row space-x-6 text-slate-600">
        {navbarLinks.map((data, index) => (
          <ZapText
            key={index}
            text={data.name}
            handleHover={handleHover}
            secondaryColor={"text-white"}
            link={data.link}
            isSelected={data.link === selected}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
