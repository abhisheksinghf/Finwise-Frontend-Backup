import React from 'react';
import communityimg from '../assets/images/community.svg';
import REAButton from './REAButton';

const JoinCommunity = () => {
    return (
        <div className="w-full mt-16 h-screen flex items-center justify-between bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
                <div className="relative w-full flex justify-center">
                    <img
                        src={communityimg}
                        alt="Community"
                        className="w-[80%] sm:w-[60%] md:w-[28rem] lg:w-128 xl:w-160 object-contain"
                    />
                </div>

                <div className="w-full text-center md:text-left space-y-6">
                    <h1 className="text-5xl md:text-6xl text-white font-bold leading-tight">
                        Join Community  <br />  and chat with <br />  experts
                    </h1>
                    <p className="text-gray-400 w-full md:w-[28rem] leading-relaxed text-base md:text-lg">
                        Your financial questions, answered in real-time. Join exclusive groups led by finance experts and fellow Gen-Z money masters. Whether it's crypto confusion or savings strategies, there's a community waiting to help you level up your money game.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        {/* <REAButton /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunity;
