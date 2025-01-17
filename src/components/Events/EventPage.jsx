import React from "react";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  const events = [
    {
      title: "Coding Contest",
      hoverText: "Put your coding skills into the competition to win prizes!",
      details: "Solve the given problems within 30 mins. Team with most points wins.",
      rules: [
        "Maximum team size: 4.",
        "All code must be written during the event.",
        "Plagiarism will lead to disqualification.",
      ],
      prize: "1st Place: Rs 2000, 2nd Place: Rs 1000, 3rd Place: Rs 750",
      image: "../../public/coding.jpg",
    },
    {
        title: "Coding contest",
        hoverText: "Put your coding skills into the competition to win prizes!",
        details: "Solve the given problems within 30 mins. Team with most points wins.",
        rules: [
          "Maximum team size: 4.",
          "All code must be written during the event.",
          "Plagiarism will lead to disqualification.",
        ],
        prize: "1st Place: Rs 2000, 2nd Place: Rs 1000, 3rd Place: Rs 750",
        image: "../../public/coding.jpg",
      },
      {
        title: "Coding contest",
        hoverText: "Put your coding skills into the competition to win prizes!",
        details: "Solve the given problems within 30 mins. Team with most points wins.",
        rules: [
          "Maximum team size: 4.",
          "All code must be written during the event.",
          "Plagiarism will lead to disqualification.",
        ],
        prize: "1st Place: Rs 2000, 2nd Place: Rs 1000, 3rd Place: Rs 750",
        image: "../../public/coding.jpg",
      },
      {
        title: "Coding contest",
        hoverText: "Put your coding skills into the competition to win prizes!",
        details: "Solve the given problems within 30 mins. Team with most points wins.",
        rules: [
          "Maximum team size: 4.",
          "All code must be written during the event.",
          "Plagiarism will lead to disqualification.",
        ],
        prize: "1st Place: Rs 2000, 2nd Place: Rs 1000, 3rd Place: Rs 750",
        image: "../../public/coding.jpg",
      },
      {
        title: "Coding contest",
        hoverText: "Put your coding skills into the competition to win prizes!",
        details: "Solve the given problems within 30 mins. Team with most points wins.",
        rules: [
          "Maximum team size: 4.",
          "All code must be written during the event.",
          "Plagiarism will lead to disqualification.",
        ],
        prize: "1st Place: Rs 2000, 2nd Place: Rs 1000, 3rd Place: Rs 750",
        image: "../../public/coding.jpg",
      },
  ];

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
      <div className="flex justify-center gap-6 mt-6">
        {/* Empty space to center the cards */}
        <div className="hidden md:block"></div>
        {events.slice(3).map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
};

export default EventsPage;
