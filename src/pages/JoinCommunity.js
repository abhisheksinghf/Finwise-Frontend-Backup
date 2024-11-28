import React from 'react';
import communityimg from '../assets/images/community.svg'; // Adjust the path if needed
import REAButton from './REAButton'; // Adjust the path if needed

const JoinCommunity = () => {
    return (
        <div className="w-full h-screen flex items-center justify-between bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
                {/* Image Section (on the left in larger screens, now swapped) */}
                <div className="relative w-full md:w-1/2 flex justify-between">
                    <img
                        src={communityimg}
                        alt="Play with stocks"
                        className="w-full md:w-[28rem] lg:w-128 xl:w-160 object-contain" // Make the image more responsive and increase size
                    />
                </div>

                {/* Text Section (on the right in larger screens, now swapped) */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-6xl md:text-6xl text-white font-bold leading-tight">
                        Join Community  <br />  and chat with <br />  experts
                    </h1>
                    <p className="text-gray-400 w-[28rem] leading-relaxed">
                        Your financial questions, answered in real-time. Join exclusive groups led by finance experts and fellow Gen-Z money masters. Whether it's crypto confusion or savings strategies, there's a community waiting to help you level up your money game.
                    </p>
                    <REAButton />
                </div>
            </div>
        </div>
    );
};

export default JoinCommunity;
