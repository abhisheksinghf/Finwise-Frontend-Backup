import React from 'react';
import phoneImage from '../assets/images/calltoaction.svg'; // Replace with your actual image path
import REAButton from './REAButton'; // Adjust the path if needed

const FinancialJourney = () => {
  return (
    <div className="w-full h-[90vh] border-none rounded-xl bg-gradient-to-br from-purple-700  to-purple-900 text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
        {/* Left Section: Text and Button */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Start Your Financial <br /> Journey Today
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Want to level up your money game before everyone else? Join our exclusive early access club and be part
            of the UK's most exciting financial education revolution. Limited spots available - grab yours now and get
            rewarded for being an early adopter! ⚡
          </p>
          {/* <button className="flex items-center justify-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold hover:opacity-90 transition">
            <span>Request early access</span>
            <span className="text-lg">&#8594;</span>
          </button> */}
          <REAButton/>
        </div>

        {/* Right Section: Phone mockup */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img src={phoneImage} alt="Phone mockup" className="w-64 md:w-72 lg:w-80 rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default FinancialJourney;
