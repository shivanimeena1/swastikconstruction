import React from 'react';
import Navbar from './Navbar';
import buildingImage from '../assets/0.jpg'; // Background image
import pdfFile from "../assets/pdf.pdf"; // Import the PDF file

const Project = () => {
  return (
    <>
      <Navbar />
      {/* Background Image Section */}
      <div
        className="bg-cover bg-center bg-no-repeat h-screen w-full"
        style={{ backgroundImage: `url(${buildingImage})` }}
      >
        {/* Content Section with overlay */}
        <div className="flex flex-col items-center justify-center h-full bg-opacity-50 bg-black">
          {/* PDF Embed Section */}
          <div className="w-full h-4/5 overflow-auto bg-white shadow-md rounded-lg mt-8">
            <iframe
              src={pdfFile}
              title="PDF Preview"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* PDF Download Link */}
          <div className="mt-6">
            <a
              href={pdfFile}
              download="Project_Details.pdf"
              className="bg-[#dda54f] text-white px-6 py-3 rounded-md text-lg font-medium shadow-md hover:bg-[#bf8e3e] transition"
            >
              Download Project Details (PDF)
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
