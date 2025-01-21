import React from "react";
import EventCard from "../components/Events/EventCard";
import { events } from "../data";
const EventsPage = () => {
  return (
    <div className="p-6">
      <header className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold">Events</h1>
      </header>
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
        {events.slice(0, 3).map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
        
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
        {/* Empty space to center the cards */}
        {events.slice(3).map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
