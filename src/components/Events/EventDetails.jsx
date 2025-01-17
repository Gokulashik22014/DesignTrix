import React from "react";

const EventDetails = ({ title, details, rules, prize, image, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative flex">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        {/* Left Section (Text: Title, Details, Rules, Prize) */}
        <div className="w-full md:w-2/3 pr-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>

          {/* Event Details */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">About the Event:</h3>
            <p className="text-gray-700">{details}</p>
          </div>

          {/* Event Rules */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Rules:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Event Prize */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Prize:</h3>
            <p className="text-gray-700">{prize}</p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:block w-1/3">
          <img
            src={image}
            alt={`${title} image`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
