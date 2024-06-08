import React, { useState } from 'react';
import Stepper from './Stepper';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const FighterCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='bg-black py-5 text-white text-center'>
        <h1 className='font-bold text-3xl my-10'>Our ATHLETES</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
          <div className="mb-8">
            <div className="bg-black relative text-center">
              <img src="/images/img-1.png" alt="Jake Paul" className="w-full h-[400px]" />
              <p className="absolute bottom-0 left-0 right-0 bg-black text-white text-xl font-bold py-2">RAJAB BUTT</p>
            </div>
          </div>
          <div>
            <div className="bg-black relative text-center">
              <img src="/images/img-2.jpg" alt="Amanda Serrano" className="w-full h-[400px]" />
              <p className="absolute bottom-0 left-0 right-0 bg-black text-white text-xl font-bold py-2">ANAS ALI</p>
            </div>
          </div>
        </div>
        <div className='py-5 pt-10'>
          <button
            onClick={openModal}
            className="bg-transparent border-2 border-red-500 text-red-500 py-2 px-4 uppercase font-bold text-center text-sm md:text-base lg:text-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Stepper Modal"
        className="flex items-center justify-center "
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <div className="">       
          <Stepper closeModal={closeModal}/>
        </div>
      </Modal>
    </>
  );
};

export default FighterCard;
