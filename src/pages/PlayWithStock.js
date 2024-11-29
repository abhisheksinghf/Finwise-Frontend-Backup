import React from 'react';
import playwithstock from '../assets/images/playwithstock.svg';
import REAButton from './REAButton';

const PlayWithStock = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
        {/* Image Section (on the left in desktop, swapped to the bottom in mobile) */}
        <div className="relative w-full flex justify-center">
          <img
            src={playwithstock}
            alt="Play with stocks"
            className="w-[80%] sm:w-[60%] md:w-[32rem] lg:w-128 xl:w-160 object-contain"
          />
        </div>

        {/* Text Section (on the right in desktop, swapped to the top in mobile) */}
        <div className="w-full text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl text-white font-bold leading-tight">
            Play with <br /> stocks and learn
          </h1>
          <p className="text-gray-400 text-sm w-full md:w-[28rem] leading-relaxed md:text-lg">
            Finwise transformed my approach to financial planning. Their financial tools have made it so easy to
            set clear goals and track my progress. I finally feel that I am in control of my financial future.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            {/* <REAButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayWithStock;
