import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";

const Gallery = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#dda54f] text-center  mb-8">
          Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img1}
              alt="Gallery Item 1"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img2}
              alt="Gallery Item 2"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img3}
              alt="Gallery Item 3"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>

          {/* Video 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <video
              src={vid1}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              muted
              autoPlay
              loop
            ></video>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <video
              src={vid2}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              muted
              autoPlay
              loop
            ></video>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
