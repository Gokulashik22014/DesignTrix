import React from "react";
import Event from "./Event";

const Events = () => {
  return (
    <div className="mt-[50vh] mb-[100vh]">
      {[1, 2, 3, 4, 5].map((data) => (
        <Event key={data} />
      ))}
    </div>
  );
};

export default Events;
