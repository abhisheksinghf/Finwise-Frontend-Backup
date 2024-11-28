import React from 'react';
import gamemode from '../assets/images/gamemode.svg'; // Adjust the path if needed
import REAButton from './REAButton'; // Adjust the path if needed

const GameMode = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-gradient-to-r from-black via-[rgba(128,0,255,0.1)] to-black">
            <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
                {/* Image Section (on the right in larger screens) */}
                <div className="relative w-full md:w-1/2 flex justify-center">
                    <img
                        src={gamemode}
                        alt="Play with stocks"
                        className="w-full md:w-[32rem] lg:w-128 xl:w-160 object-contain" // Make the image more responsive and increase size
                    />
                </div>

                {/* Text Section (on the left in larger screens) */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-6xl md:text-6xl text-white font-bold leading-tight">
                        Learn in <br /> Game Mode
                    </h1>
                    <p className="text-gray-400  w-[28rem] leading-relaxed">
                        Step into a world where managing money feels like playing your favorite game. Master budgeting, saving, and investing through exciting challenges and real-life scenarios.
                    </p>
                    <REAButton />
                </div>
            </div>
        </div>
    );
};

export default GameMode;
