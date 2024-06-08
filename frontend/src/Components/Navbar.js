// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-20 top-4 right-4 absolute"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Menu */}
      <div className={`absolute right-0 hidden md:flex bg-transparent transition-transform translate-x-full   md:translate-x-0 md:w-auto  md:h-auto  md:flex-row  md:justify-end  p-8`} style={{ zIndex: 10 }}>
        <a href="#home" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Home</a>
        <a href="#Athlete" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Athlete</a>
        <a href="#Social" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Social</a>
        {/* <a href="#contact" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Contact</a> */}
      </div>
      {
        isOpen && (
          <div className='md:hidden bg-black h-screen flex flex-col justify-center items-center'>
             <a href="#home" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Home</a>
        <a href="#Athlete" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Athlete</a>
        <a href="#Social" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Social</a>
            {/* <a href="#contact" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4">Contact</a> */}
          </div>
        )
      }


    </div>
  );
};

export default Navbar;
