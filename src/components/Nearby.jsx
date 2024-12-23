import React from 'react';
import bg2 from "../assets/bg2.jpg";

const Nearby = () => {
  return (
    <section
      className="py-20 bg-center bg-cover"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="container px-6 mx-auto text-white">
        <h2 className="mb-10 text-4xl font-semibold text-center">Nearby Places</h2>
        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* School */}
          <div className="p-6 bg-white rounded-lg shadow-lg bg-opacity-60">
            <div className="flex items-center space-x-4">
              <div className="p-3 text-white bg-yellow-500 rounded-full">
                <i className="text-2xl fas fa-school"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">School</h3>
                <p>500 meters away</p>
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar percentage={100} />
            </div>
          </div>
          
          {/* Hospital */}
          <div className="p-6 bg-white rounded-lg shadow-lg bg-opacity-60">
            <div className="flex items-center space-x-4">
              <div className="p-3 text-white bg-red-500 rounded-full">
                <i className="text-2xl fas fa-hospital"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Hospital</h3>
                <p>1 km away</p>
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar percentage={75} />
            </div>
          </div>

          {/* Market */}
          <div className="p-6 bg-white rounded-lg shadow-lg bg-opacity-60">
            <div className="flex items-center space-x-4">
              <div className="p-3 text-white bg-green-500 rounded-full">
                <i className="text-2xl fas fa-shopping-cart"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Market</h3>
                <p>1.5 km away</p>
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar percentage={90} />
            </div>
          </div>

          {/* Additional nearby places */}
          <div className="p-6 bg-white rounded-lg shadow-lg bg-opacity-60">
            <div className="flex items-center space-x-4">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <i className="text-2xl fas fa-park"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Park</h3>
                <p>2 km away</p>
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar percentage={60} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Progress Bar Component
const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
      <div
        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default Nearby;
