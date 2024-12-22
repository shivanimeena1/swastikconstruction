import React from "react";
import engineersPhoto from "../assets/engineers-photo.jpg"; // Correct import

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${engineersPhoto})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center h-full">
        <span className="uppercase text-lg tracking-wide mb-4">Luxury</span>
        <h1 className="text-5xl font-bold text-center">
          Enhanced Living Experience
        </h1>
      </div>

      {/* Book a Visit Button */}
      <a
        href="#"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-purple-700 text-white px-6 py-3 uppercase tracking-wide rotate-90"
        style={{ writingMode: "vertical-rl" }}
      >
        Book a Visit
      </a>
    </section>
  );
};

export default Hero;
