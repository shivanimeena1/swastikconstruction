import React from "react";
import emerald from "../assets/emerald2.jpg";

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center text-[#dda54f] mb-4">
          Our Projects
        </h2>

        {/* Subheading with Horizontal Lines */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] bg-[#444175] w-1/6 md:w-1/4"></div>
          <h3 className="text-2xl font-semibold text-center text-[#444175] mx-4">
            Emerald Park
          </h3>
          <div className="h-[1px] bg-[#444175] w-1/6 md:w-1/4"></div>
        </div>

        {/* Project Cards */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Card 1 */}
          <div
            onClick={() =>
              document.getElementById("project").scrollIntoView({ behavior: "smooth" })
            }
            className="relative group w-[600px] h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={emerald}
              alt="Emerald Park"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center p-4 transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2">Emerald Park</h3>
              <p className="text-sm">
                A stunning residential project with breathtaking views and premium amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
