import React from 'react';
import gamemode from '../assets/images/gamemode.svg';
import REAButton from './REAButton';

const GameMode = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-gradient-to-r from-black via-[rgba(128,0,255,0.1)] to-black">
            <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
                <div className="relative w-full flex justify-center">
                    <img
                        src={gamemode}
                        alt="Play with stocks"
                        className="w-[80%] sm:w-[60%] md:w-[32rem] lg:w-128 xl:w-160 object-contain"
                    />
                </div>

                <div className="w-full text-center md:text-left space-y-6">
                    <h1 className="text-5xl md:text-6xl text-white font-bold leading-tight">
                        Learn in <br className="hidden md:block" /> Game Mode
                    </h1>
                    <p className="text-gray-400 text-sm  w-full md:w-[28rem] leading-relaxed text-base md:text-lg">
                        Step into a world where managing money feels like playing your favorite game. Master budgeting, saving, and investing through exciting challenges and real-life scenarios.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        {/* <REAButton /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameMode;
