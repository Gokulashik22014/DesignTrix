import React from "react";
import SpotlightCard from "../SpotLightCard";
import CustomDiv from "../CustomDiv";

const ContactUsCard = () => {
  return (
    <CustomDiv className={"flex justify-center items-center"}>
      <SpotlightCard className="flex flex-col justify-between items-center w-64 h-72 rounded-lg py-6 bg-transparent backdrop-blur-sm glass shadow-sm shadow-white hover:scale-105 transition-transform duration-300">
        <div className="object-cover h-24 w-24 rounded-full flex justify-center items-center bg-yellow-300">
          {/* image */}
          <img src="/images/headset.png" className="w-24 h-24 object-cover" loading="lazy"/>
        </div>
        <div className="flex flex-col justify-center items-center h-1/2">
          {/* details */}
          <p>Name of the person</p>
          {/* name phone email */}
          <ul className="flex flex-col justify-center items-center h-full">
            <li>No.: +91 1234567890</li>
            <li>gmailofSomeone@gmail.com</li>
          </ul>
        </div>
      </SpotlightCard>
    </CustomDiv>
  );
};

export default ContactUsCard;
