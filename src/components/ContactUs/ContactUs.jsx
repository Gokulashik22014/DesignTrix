import React from "react";
import ContactUsCard from "./ContactUsCard";
import SpotlightCard from "../SpotLightCard";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4 w-full">
      <ContactUsCard />
      <ContactUsCard />
      <ContactUsCard />
      <ContactUsCard />
    </div>
  );
};

export default ContactUs;
