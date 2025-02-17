import React, { useState } from "react";
import EventDetails from "./EventDetails";
import SpotlightCard from "../SpotLightCard";
const EventCard = ({ title, hoverText, details, rules, prize, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full">
      
      {/* Event Card */}
      <div
        onClick={openModal}
        className="relative bg-gray-800 text-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 transform hover:scale-105"
      >
        <SpotlightCard className="custom-spotlight-card " spotlightColor="rgba(0, 229, 255, 0.2)">
        <img
          src={image} // Use the first image for the card preview
          alt={`${title} preview`}
          className="w-full h-40 object-cover"
          
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </div>
        {/* Hover Text */}
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
          <p className="text-center text-sm px-4">{hoverText}</p>
        </div>
        </SpotlightCard>
        
      </div>

      {/* Modal for Event Details */}
      {isModalOpen && (
        <EventDetails
          title={title}
          details={details}
          rules={rules}
          prize={prize}
          image={image}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default EventCard;
