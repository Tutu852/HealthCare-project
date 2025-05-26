import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left: Logo */}
      <div className="text-2xl font-semibold whitespace-nowrap">
        <span className="text-blue-900">Health</span>
        <span className="text-blue-500">care.</span>
      </div>

      {/* Center: Search bar */}
      <div className="relative w-1/2 max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">🔍</span>
      </div>

      {/* Right: Profile Avatar & Add Button */}
      <div className="flex items-center space-x-4">
        <div className="w-9 h-9 rounded-full bg-sky-500 text-white font-semibold flex items-center justify-center">
          <img src="/assets/avatar.jpg" alt="avatar" className="w-full h-full object-cover rounded-full" />
        </div>
        <button className="w-8 h-8 flex items-center justify-center bg-blue-900 hover:bg-blue-700 text-white rounded-md text-lg font-bold">
          +
        </button>
      </div>
    </header>
  );
};

export default Header;
