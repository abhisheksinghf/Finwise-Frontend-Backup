import React from 'react';
import phoneImage from '../assets/images/featurehome.svg'; // Replace with actual phone image path

const Features = () => {
  return (
    <div
      className="relative mt-20 w-full bg-[#070707]"
      style={{
        backgroundImage: `url(${phoneImage})`,
        backgroundSize: '100%',  // Ensures the image fits
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',  // Makes sure the section takes full height of the screen
      }}
    >
      {/* Overlay with opacity 0 (fully transparent) */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex justify-between w-full px-6">
          {/* Left Column */}
          <div className="space-y-8 w-1/3">
            {/* Grocery Coupon */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center space-x-4">
              <i className="fas fa-shopping-cart text-4xl text-green-400"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Grocery Coupons</h3>
                <p className="text-gray-400">Save big with exclusive grocery discounts tailored for you.</p>
              </div>
            </div>
            {/* Cashback Offer */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center space-x-4">
              <i className="fas fa-money-bill-wave text-4xl text-blue-400"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Cashback Offers</h3>
                <p className="text-gray-400">Earn rewards and cashback on everyday purchases.</p>
              </div>
            </div>
            {/* Exclusive Deals */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center space-x-4">
              <i className="fas fa-tags text-4xl text-purple-400"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Exclusive Deals</h3>
                <p className="text-gray-400">Access limited-time offers and unbeatable discounts.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 w-1/3">
            {/* Financial Tools */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center space-x-4">
              <i className="fas fa-coins text-4xl text-yellow-400"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Financial Tools</h3>
                <p className="text-gray-400">Manage your finances effortlessly with our smart tools.</p>
              </div>
            </div>
            {/* Gamified Learning */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center space-x-4">
              <i className="fas fa-gamepad text-4xl text-red-400"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Gamified Learning</h3>
                <p className="text-gray-400">Learn personal finance through engaging gamified modules.</p>
              </div>
            </div>
            {/* Leaderboard Challenges */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center space-x-4">
              <i className="fas fa-trophy text-4xl text-orange-400"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Leaderboard Challenges</h3>
                <p className="text-gray-400">Compete with others and climb the ranks to earn rewards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
