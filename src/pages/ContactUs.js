import React from 'react';
import contactImage from '../assets/images/contact-hero.svg'; // Update the path to match your project structure
import ContactFooter from './ContactFooter';
import CallToAction from './CallToAction';

const ContactUs = () => {
    return (
        <div className="bg-gradient-to-l from-black via-[rgba(128,0,255,0.2)] to-black font-inter flex flex-col min-h-screen m-0 p-0">
            {/* Top Section */}
            <div className="w-full flex p-12 bg-[#070707]">
                {/* Text Section */}
                <div className="flex-1 mt-10 text-white">
                    <h1 className="text-5xl font-semibold leading-tight mb-6">
                        <span className="text-[#9F9F9F]">Get in Touch</span><br />
                        with Finwise School
                    </h1>
                    <p className="text-lg leading-relaxed text-[#B1B1B1] mb-6">
                        Welcome to Finwise School Contact Us page. We're here to help you with any questions, feedback, or support you may need.
                    </p>
                    <p className="text-lg leading-relaxed text-[#B1B1B1] mb-6">
                        Whether you're looking to improve your financial literacy, need guidance on using our tools, or want to learn more about our rewards program.
                    </p>
                    <p className="text-lg italic text-white">
                        We're just a message away. Reach out to us, and let's start building your financial future together.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-end items-start">
                    <div className="w-[600px] h-[600px]">
                        <img
                            src={contactImage}
                            alt="Person holding a phone"
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="w-full flex justify-center items-center bg-[#070707] py-12">
                <div className="w-full px-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Fill out the below form and we will get back to you.
                    </h2>
                    {/* Full Width Form Container with Glassy Effect */}
                    <div className=" backdrop-blur-md shadow-lg rounded-lg p-8 border border-white w-full">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                </div>
                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                </div>
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                </div>
                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter Phone Number"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    />
                                </div>
                                {/* Inquiry Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Inquiry Type</label>
                                    <select
                                        name="inquiryType"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    >
                                        <option value="" className="bg-black text-gray-300">Select Inquiry Type</option>
                                        <option value="general" className="bg-black text-gray-300">General</option>
                                        <option value="feedback" className="bg-black text-gray-300">Feedback</option>
                                        <option value="support" className="bg-black text-gray-300">Support</option>
                                    </select>
                                </div>
                                {/* How Did You Hear */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">How Did You Hear About Us?</label>
                                    <select
                                        name="hearAboutUs"
                                        className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                    >
                                        <option value="" className="bg-black text-gray-300">Select</option>
                                        <option value="social_media" className="bg-black text-gray-300">Social Media</option>
                                        <option value="referral" className="bg-black text-gray-300">Referral</option>
                                        <option value="web_search" className="bg-black text-gray-300">Web Search</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Enter your Message here."
                                    className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-gray-500"
                                ></textarea>
                            </div>

                            {/* Checkbox - Terms and Privacy */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                                    I agree with <a href="#" className="text-indigo-400">Terms of Use</a> and <a href="#" className="text-indigo-400">Privacy Policy</a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8A3FF2] hover:[bg-[#4A3FF6]] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full sm:w-auto"
                                >
                                    Send Your Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <ContactFooter/> */}
            <CallToAction/>
        </div>
    );
};

export default ContactUs;
