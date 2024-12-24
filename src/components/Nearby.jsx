import React from 'react';
import nearby from "../assets/nearby.webp";

const Nearby = () => {
  const facilities = [
    { name: "City Center", distance: "700 m", width: "w-7/12" },
    { name: "Shopping Mall", distance: "1.5 km", width: "w-10/12" },
    { name: "Main City Road", distance: "500 m", width: "w-6/12" },
    { name: "Public Transport", distance: "700 m", width: "w-7/12" },
    { name: "Hospitals", distance: "1 km", width: "w-8/12" },
  ];

  return (
    <div
      className="py-16 bg-gray-100 bg-center bg-cover"
      style={{ backgroundImage: `url(${nearby})` }}
    >
      <div className="container flex flex-col items-center p-8 mx-auto bg-white rounded-md bg-opacity-80 md:flex-row">
        {/* Left Section */}
        <div className="px-4 md:w-1/2">
          <h4 className="mb-4 text-sm tracking-widest text-gray-600 uppercase">
            Highest Standards in the Industry
          </h4>
          <h1 className="mb-6 text-4xl font-bold text-gray-800">
            For Those Who Know <span className="text-black">How to Choose!</span>
          </h1>
          <p className="leading-relaxed text-gray-600">
            Our every residential project starts with a vision and an emotion to
            provide everyone with an affordable home yet includes all the modern
            amenities. From the concept and design development to the structural,
            landscaping, and water supply & electrical connections, our
            architectures carefully craft each flat/apartment, duplex, or villa
            with these elements in mind.
          </p>
        </div>

        {/* Right Section */}
        <div className="px-4 mt-8 md:w-1/2 md:mt-0">
          <h4 className="mb-4 text-sm tracking-widest text-gray-600 uppercase">
            Our Residential Projects are Near to all Facilities!
          </h4>
          {facilities.map((facility, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-800">{facility.name}</span>
                <span className="text-sm text-blue-600">{facility.distance}</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded">
                <div
                  className={`${facility.width} bg-blue-600 h-2 rounded`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nearby;
