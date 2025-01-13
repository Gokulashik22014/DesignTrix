import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto text-center p-8 z-10">
      <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
      <p className="mt-4 text-lg text-gray-700">
        We are a team of passionate developers creating innovative web applications.
        Our goal is to make the web a better place by building useful and engaging
        platforms.
      </p>
      <h3 className="text-2xl font-semibold mt-8 text-gray-800">Our Mission</h3>
      <p className="mt-2 text-lg text-gray-700">
        To provide high-quality solutions that empower businesses and individuals.
      </p>
      <h3 className="text-2xl font-semibold mt-8 text-gray-800">Our Team</h3>
      <p className="mt-2 text-lg text-gray-700">
        We are a diverse group of people with expertise in various areas of web
        development, from frontend design to backend architecture.
      </p>
    </div>
  );
};

export default About;
