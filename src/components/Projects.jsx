import React from "react";
import emerald from "../assets/emerald2.jpg";
import emerald2 from "../assets/emerald3.jpg";
import emerald3 from "../assets/emerald5.jpg";

const Projects = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Featured Projects
        </h2>

        {/* Project Cards */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Card 1 */}
          <div className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <img
              src={emerald}
              alt="Emerald Complex"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center p-4 transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2">Emerald Complex</h3>
              <p className="text-sm">
                A stunning residential project with breathtaking views and premium amenities.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <img
              src={emerald2}
              alt="Emerald Tower"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center p-4 transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2">Emerald Tower</h3>
              <p className="text-sm">
                Luxurious high-rise living with cutting-edge design and features.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <img
              src={emerald3}
              alt="Emerald Garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center p-4 transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2">Emerald Garden</h3>
              <p className="text-sm">
                A tranquil community surrounded by lush greenery and modern amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
