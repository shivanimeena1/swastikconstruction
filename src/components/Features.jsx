import React from "react";

const features = [
  {
    title: "High-Quality",
    description: "Experienced Best in Industry Professionals!",
    icon: "🧱", // Replace with appropriate icon or SVG
    bgColor: "bg-gray-100",
  },
  {
    title: "Private Security",
    description: "CCTV and Security Guards on the Campus.",
    icon: "👮", // Replace with appropriate icon or SVG
    bgColor: "bg-blue-900 text-white",
  },
  {
    title: "Luxury",
    description: "Luxurious and State-Of-The-Art Infrastructure.",
    icon: "🏛️", // Replace with appropriate icon or SVG
    bgColor: "bg-gray-100",
  },
  {
    title: "Fitness Center",
    description: "Gymnasium, Swimming Pool, Kids Play Area.",
    icon: "🏋️‍♂️", // Replace with appropriate icon or SVG
    bgColor: "bg-blue-900 text-white",
  },
  {
    title: "Location",
    description: "At the Prime Location of the City.",
    icon: "📍", // Replace with appropriate icon or SVG
    bgColor: "bg-blue-900 text-white",
  },
  {
    title: "Parking Space",
    description: "Alloted/Shared Parking Area.",
    icon: "🚗", // Replace with appropriate icon or SVG
    bgColor: "bg-gray-100",
  },
  {
    title: "Charm of Nature",
    description: "In the Greenest Hub of the City.",
    icon: "🌳", // Replace with appropriate icon or SVG
    bgColor: "bg-blue-900 text-white",
  },
  {
    title: "Medical Center",
    description: "Close to Healthcare Facilities.",
    icon: "🏥", // Replace with appropriate icon or SVG
    bgColor: "bg-gray-100",
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${feature.bgColor}`}
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-orange-600 uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
