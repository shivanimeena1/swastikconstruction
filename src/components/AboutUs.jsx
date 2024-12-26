import React from "react";
import emerald1 from "../assets/emerald1.png";
import bg from "../assets/19.jpg";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import Navbar from "./Navbar";
import Footer from '../components/Footer';

const images = [
  { src: bg, title: "Design 1" },
  { src: bg3, title: "Design 2" },
  { src: bg2, title: "Design 3" },
  { src: bg1, title: "Design 4" }
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-3/5">
        <img
          src={emerald1}
          className="w-full h-full object-cover"
          alt="Contact Us"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="text-center w-3/4 md:w-1/2">
          <span
            className="text-6xl font-bold text-orange-500 shadow-2xl hover:scale-110 transition-all duration-300"
            style={{
              textShadow: "3px 3px 10px rgba(255, 165, 0, 0.7)", // orange shadow effect
            }}
          >
            卐
          </span>
          <p className="text-gray-700 text-xl mt-3 leading-relaxed">
            Welcome to{" "}
            <span className="text-orange-500 font-bold">
              Swastik Constructions
            </span>
            , a trusted name in real estate in Bhopal. Building on our growing
            legacy, we are proud to introduce our latest project,{" "}
            <span className="text-orange-500 font-bold">Emerald Park</span>, at
            Jeth Khedi, Bhopal.
          </p>
        </div>
      </div>

      {/* Image Cards Section */}
      <h1 className="text-4xl font-bold text-orange-500 text-center mt-14">Our Some Designs </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={image.src}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-center">
              <h3 className="text-white text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Styled Paragraph */}
      <div className="text-center mt-12 px-4 md:px-0 max-w-3xl mx-auto">
        <p className="text-gray-700 text-xl leading-relaxed mb-6">
          <span className="font-semibold text-orange-500">
            Emerald Park
          </span> is thoughtfully designed to offer modern amenities within a secure gated community, providing a perfect blend of comfort and convenience. As one of our early ventures, it reflects our commitment to quality and innovation in creating beautiful living spaces.
        </p>
        <p className="text-gray-700 text-xl leading-relaxed">
          Join us as we shape the future of modern living with{" "}
          <span className="font-semibold text-orange-500">Swastik Constructions</span>.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
