import React, { useState } from 'react';
import Modal from 'react-modal';
import Stepper from './Stepper';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    setIsOpen(false);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

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
      <div className={`absolute right-0 md:flex hidden bg-transparent transition-transform translate-x-full md:translate-x-0 md:w-auto md:h-auto md:flex-row md:justify-end p-8`} style={{ zIndex: 10 }}>
        <a href="#home" className="text-white hover:text-gray-300 font-bold text-xl block py-2 px-8 ">Home</a>
        <a href="#Athlete" className="text-white hover:text-gray-300 font-bold text-xl block py-2 px-8 ">Athlete</a>
        <a href="#Social" className="text-white hover:text-gray-300 font-bold text-xl block py-2 px-8 ">Social</a>
        <button
            onClick={openBookingModal}
            className="bg-transparent border-2 border-red-500 text-red-500 py-2 px-4 uppercase font-bold text-center text-sm md:text-base lg:text-lg"
          >
            Book Now
          </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-black h-screen fixed w-full flex flex-col justify-center items-center' style={{ zIndex: 1000 }}>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <a href="#home" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4" onClick={() => setIsOpen(!isOpen)}>Home</a>
          <a href="#Athlete" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4" onClick={() => setIsOpen(!isOpen)}>Athlete</a>
          <a href="#Social" className="text-white hover:text-gray-300 font-bold text-xl block py-2 pr-4 pl-3 md:p-4" onClick={() => setIsOpen(!isOpen)}>Social</a>
          <button
            onClick={openBookingModal}
            className="mt-10 bg-transparent border-2 border-red-500 text-red-500 py-2 px-4 uppercase font-bold text-center text-sm md:text-base lg:text-lg"
          >
            Book Now
          </button>
        </div>
      )}

      {/* Booking Modal (Stepper) */}
      <Modal
        isOpen={isBookingModalOpen}
        onRequestClose={closeBookingModal}
        contentLabel="Booking Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <Stepper closeModal={closeBookingModal} />
      </Modal>
    </div>
  );
};

export default Navbar;
