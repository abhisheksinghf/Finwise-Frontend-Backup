import React from 'react';
import leagueimage from '../assets/images/playleagues.svg';
import REAButton from './REAButton';

const PlayLeagues = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black">
            <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
                {/* Image Section (on the left in desktop, swapped to the bottom in mobile) */}
                <div className="relative w-full flex justify-center">
                    <img
                        src={leagueimage}
                        alt="Play leagues"
                        className="w-[80%] sm:w-[60%] md:w-[32rem] lg:w-128 xl:w-160 object-contain"
                    />
                </div>

                {/* Text Section (on the right in desktop, swapped to the top in mobile) */}
                <div className="w-full text-center md:text-left space-y-6">
                    <h1 className="text-5xl md:text-6xl text-white font-bold leading-tight">
                        Play leagues and <br /> win rewards
                    </h1>
                    <p className="text-gray-400 w-full text-sm  md:w-[28rem] leading-relaxed md:text-lg">
                        Join thrilling financial leagues where knowledge pays off - literally. Compete with peers, solve money challenges, and climb the leaderboard while earning real rewards. From stock market simulations to budgeting battles, every game makes you financially smarter and potentially richer.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        {/* <REAButton /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayLeagues;
