import React from 'react';
import playwithstock from '../assets/images/playwithstock.svg'; // Adjust the path if needed
import REAButton from './REAButton'; // Adjust the path if needed

const PlayWithStock = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
        {/* Image Section (on the left in larger screens, now swapped) */}
        <div className="relative w-full md:w-1/2 flex justify-between">
          <img
            src={playwithstock}
            alt="Play with stocks"
            className="w-full md:w-[32rem] lg:w-128 xl:w-160 object-contain" // Make the image more responsive and increase size
          />
        </div>

        {/* Text Section (on the right in larger screens, now swapped) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-6xl md:text-6xl text-white font-bold leading-tight">
            Play with <br /> stocks and learn
          </h1>
          <p className="text-gray-400 w-[28rem] leading-relaxed">
            Finwise transformed my approach to financial planning. Their financial tools have made it so easy to
            set clear goals and track my progress. I finally feel that I am in control of my financial future.
          </p>
          <REAButton />
        </div>
      </div>
    </div>
  );
};

export default PlayWithStock;
