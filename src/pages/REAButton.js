import React from 'react';
import arrowRight from '../assets/images/rea-arrow.svg'; // Import the SVG arrow

const ButtonLink = ({ href, text, icon }) => {
    return (
        <a
            href="#"
            className="inline-block bg-gradient-to-r from-green-400 to-purple-500 text-white font-semibold py-3 px-5 rounded-full text-lg hover:opacity-90 transition-opacity flex justify-between items-center w-max"
        >
            <span className="mr-2">Request early access</span>
            <img src={arrowRight} alt="Right Arrow" className="ml-2 w-8 h-8" />
        </a>
    );
};

export default ButtonLink;
