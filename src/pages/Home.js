import React from 'react';
import phoneImage from '../assets/images/Group 48095705.svg'; // Import the image
import arrowRight from '../assets/images/rea-arrow.svg'; // Import the SVG arrow

const LandingPage = () => {
    return (
        // <div className="bg-black text-white bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="bg-[#070707] text-white">
            {/* Hero Section */}
            <div className="relative text-center pt-16 pb-10">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b bg-[#070707] opacity-60"></div>

                {/* Phones Images with text and button overlay */}
                <div className="relative z-10 flex justify-center mt-24">
                    {/* Phone Image */}
                    <img className="w-full md:w-3/4 lg:w-2/3" src={phoneImage} alt="Phone 1" />

                    {/* Text, Description, and Button container */}
                    <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                        {/* Title Text */}
                        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
                            Master Your Money with
                            <br /> Finwise School
                        </h1>

                        {/* Description Text */}
                        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                            Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance
                            through personalized, gamified experiences.
                        </p>

                        {/* CTA Button with SVG Arrow */}
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="inline-block bg-gradient-to-r from-green-400 to-purple-500 text-white font-semibold py-3 px-5 rounded-full text-lg hover:opacity-90 transition-opacity flex justify-between items-center w-max"
                            >
                                <span className="mr-2">Request early access</span>
                                <img src={arrowRight} alt="Right Arrow" className="ml-2 w-8 h-8" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center gap-48 px-6 bg-black">
                <div className="text-center">
                    <div className="relative w-64 h-32 rounded-[30px] flex flex-col items-center justify-center mx-auto mb-4">
                        {/* Background with radial gradient and transparency */}
                        <div
                            className="absolute inset-0 rounded-[30px] opacity-65"
                            style={{
                                background: "radial-gradient(circle, rgba(138,63,242,0.65), rgba(107,41,184,0.65))",
                            }}
                        ></div>

                        {/* Text */}
                        <span className="text-4xl font-bold text-white z-10">10+</span>
                        <p className="text-xl text-white inter-thin mt-2 z-10">Financial tools</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="relative w-64 h-32 rounded-[30px] flex flex-col items-center justify-center mx-auto mb-4">
                        {/* Background with radial gradient and transparency */}
                        <div
                            className="absolute inset-0 rounded-[30px] opacity-65"
                            style={{
                                background: "radial-gradient(circle, rgba(138,63,242,0.65), rgba(107,41,184,0.65))",
                            }}
                        ></div>

                        {/* Text */}
                        <span className="text-4xl font-bold text-white z-10">20+</span>
                        <p className="text-xl text-white inter-thin mt-2 z-10">Gamified Modules</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="relative w-64 h-32 rounded-[30px] flex flex-col items-center justify-center mx-auto mb-4">
                        {/* Background with radial gradient and transparency */}
                        <div
                            className="absolute inset-0 rounded-[30px] opacity-65"
                            style={{
                                background: "radial-gradient(circle, rgba(138,63,242,0.65), rgba(107,41,184,0.65))",
                            }}
                        ></div>

                        {/* Text */}
                        <span className="text-4xl font-bold text-white z-10">100+</span>
                        <p className="text-xl text-white inter-thin mt-2 z-10">Live Leagues</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
