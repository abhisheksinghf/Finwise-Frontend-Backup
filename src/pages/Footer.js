import React from 'react';
import footerimg from '../assets/images/footerimg.svg';

const Footer = () => {
    return (
        <div className="w-full">
            <footer className="bg-black w-full">
                <div className="max-w-screen-xl mx-auto px-0 py-16"> 
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start">
                
                        <div className="text-center lg:text-left mb-8 lg:mb-0">
                            <h1 className="text-4xl font-bold text-white">
                                <span className="text-green-400">Master your </span> <span className="text-purple-500">Finance with Finwise</span>
                            </h1>
                            <p className="text-gray-400 mt-4 w-1/2">
                            Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance through personalized, gamified experiences.
                            </p>
                            <div className="flex items-center mt-6 space-x-4">
                                <input
                                    type="text"
                                    placeholder="Phone no"
                                    className="bg-gray-800 text-white px-4 py-3 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <button className="bg-purple-500 text-white px-6 py-3 rounded-full flex items-center hover:bg-purple-600">
                                    Send <i className="fas fa-paper-plane ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr className="border-black my-8" />

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-white font-semibold mb-4">Tools</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Budget Boss</li>
                                <li>Goal SIP</li>
                                <li>SIP Calculator</li>
                                <li>F.I.R.E</li>
                                <li>Many more</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Blogs</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>UK Tax System</li>
                                <li>Debt Management</li>
                                <li>Negotiation Wizardry</li>
                                <li>How to Budget</li>
                                <li>Investing Yes or No?</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Budgeting</li>
                                <li>Stock Market</li>
                                <li>Taxation</li>
                                <li>Retirement Planning</li>
                                <li>More</li>
                            </ul>
                        </div>
                        <div>
                            <img
                                id="footerimgg"
                                src={footerimg}
                                alt="Footer Image"
                                className="w-full rounded-lg shadow-lg"
                                style={{
                                    width: "70%",
                                    marginTop: "0", // Default margin for mobile
                                }}
                            />
                            <style>
                                {`
                                @media (min-width: 1024px) {
                                    #footerimgg {
                                        position: relative;
                                        top: -10rem;
                                        width: 100%;
                                    }
                                }
                                `}
                            </style>
                        </div>
                    </div>

                    <hr className="border-gray-700 my-8" />

                    {/* Footer Bottom */}
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                            <span className="text-gray-400">Follow us</span>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-spotify"></i> {/* Spotify Icon */}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-tiktok"></i> {/* TikTok Icon */}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
                            </a>
                        </div>
                        {/* Contact Button */}
                        <button className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600">
                            Contact Us
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
