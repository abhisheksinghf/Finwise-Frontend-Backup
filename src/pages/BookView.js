import React from 'react';
import bookImage from '../assets/images/bookbg.svg'; // Ensure the image is in your assets folder

const BookView = () => {
    return (
        <div className="bg-[#0c0c0c] font-inter flex justify-center items-center min-h-screen">
            {/* Main Container with increased space on both sides */}
            <div className="w-full max-w-[calc(100%-160px)] bg-[#070707] rounded-2xl p-8 backdrop-blur-xl bg-opacity-60 border border-gray-600 shadow-lg">
                
                {/* Book Image and Header with increased width */}
                <div className="bg-[#8A3FF2] bg-opacity-40 rounded-t-2xl p-8 flex justify-center relative w-full">
                    {/* Back Button inside purple box */}
                    <div className="absolute top-4 left-4 flex items-center text-white">
                        <i className="fas fa-arrow-left text-lg"></i>
                        <span className="ml-2 text-lg">Back</span>
                    </div>

                    <img
                        src={bookImage}  // Import the book image from assets
                        alt="The Budget Blueprint Cover"
                        className="rounded-lg shadow-lg w-[300px] h-[400px]" // Increased the size of the image
                    />
                </div>

                {/* Title */}
                <div className="py-6 text-center">
                    <h1 className="text-3xl font-bold text-white mb-6">The Budget Blueprint</h1>
                    <a
                        href="#"
                        className="bg-[#8A3FF2] text-white py-4 px-12 rounded-full text-2xl w-full max-w-[350px] mx-auto"
                    >
                        Download Now
                    </a>
                </div>

                {/* Description */}
                <div className="text-gray-200 p-8 rounded-b-2xl">
                    <p className="mb-6">
                        <span className="font-semibold">"The Budgeting Blueprint"</span> by Finwise School is a practical guide designed to help you master the art of budgeting and achieve financial freedom. This easy-to-follow guide walks you through every step, from understanding the basics of budgeting to setting meaningful financial goals, managing debt, and even investing for the future.
                    </p>

                    <h2 className="text-lg font-semibold mb-4">In this book, you'll learn how to:</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <li>
                            <span className="font-semibold">Create a Personalized Budget:</span> Break down your income, expenses, and savings in a way that suits your unique lifestyle.
                        </li>
                        <li>
                            <span className="font-semibold">Set SMART Financial Goals:</span> Whether you're saving for a dream vacation or paying off debt, discover how to reach your goals with clear, actionable steps.
                        </li>
                        <li>
                            <span className="font-semibold">Build Smart Spending Habits:</span> Learn how to track your expenses, cut unnecessary spending, and make smarter financial choices.
                        </li>
                        <li>
                            <span className="font-semibold">Manage Debt Efficiently:</span> Explore strategies to tackle debt, reduce interest payments, and gain financial control.
                        </li>
                        <li>
                            <span className="font-semibold">Invest for the Future:</span> Get an introduction to basic investing principles and start building long-term wealth.
                        </li>
                    </ul>

                    <p className="mt-6">
                        With practical tips, budgeting hacks, and simple strategies, <span className="font-semibold">"The Budgeting Blueprint"</span> turns managing your money into an approachable and rewarding task. Whether you're just starting your financial journey or looking for ways to refine your budget, this guide will give you the tools to create a secure financial future.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookView;
