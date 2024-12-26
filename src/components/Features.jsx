import React from "react";
import { BsBricks } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { LuTrees } from "react-icons/lu";
import { FaBriefcaseMedical } from "react-icons/fa";

const features = [
  {
    title: "High-Quality",
    description: "Experienced Best in Industry Professionals!",
    icon: <BsBricks className="text-3xl" />, // Use the BsBricks icon
    bgColor: "bg-gray-100",
  },
  {
    title: "Private Security",
    description: "CCTV and Security Guards on the Campus.",
    icon:<MdSecurity  className="text-3xl"/>,
    bgColor: "bg-[#2a1771] text-white",
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
    icon: <IoIosFitness className="text-3xl"/>,
    bgColor: "bg-[#2a1771] text-white",
  },
  {
    title: "Location",
    description: "At the Prime Location of the City.",
    icon: <FaLocationDot  className="text-3xl"/>,
    bgColor: "bg-[#2a1771] text-white",
  },
  {
    title: "Parking Space",
    description: "Alloted/Shared Parking Area.",
    icon: <FaCar className="text-3xl"/>, 
    bgColor: "bg-gray-100",
  },
  {
    title: "Charm of Nature",
    description: "In the Greenest Hub of the City.",
    icon: <LuTrees className="text-3xl" />, // Replace with appropriate icon or SVG
    bgColor: "bg-[#2a1771] text-white",
  },
  {
    title: "Medical Center",
    description: "Close to Healthcare Facilities.",
    icon: <FaBriefcaseMedical className="text-3xl"/>, // Replace with appropriate icon or SVG
    bgColor: "bg-gray-100",
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="mb-8 text-6xl font-bold font-serif text-center text-[#dda54f]">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-md ${feature.bgColor}`}
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3
                className={`mb-2 text-lg font-bold uppercase ${
                  feature.bgColor === "bg-gray-100" ? "text-black" : "text-white"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`${
                  feature.bgColor === "bg-gray-100" ? "text-black" : "text-white"
                } text-gray-700`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
