import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="h-screen ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="grid grid-cols-1 place-items-center ">
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-5 mb-4">
            Meet and collaborate with other designers. Grow your brand.
          </h1>
          <button className="bg-green-500 text-white px-6 py-2 mb-4 rounded-full hover:bg-green-600 focus:outline-none">
            Get Started
          </button>
        </div>

        {/* Image at the bottom */}
        <div className="mb-10 p-5">
          <img src="/homepage.jpg" alt="Description" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
