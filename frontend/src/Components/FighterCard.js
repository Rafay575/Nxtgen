import React, { useState } from 'react';
import Modal from 'react-modal';
import AthleteDetails from './AthleteDetails';
import Stepper from './Stepper';

// Set the app element for accessibility
Modal.setAppElement('#root');

const FighterCard = () => {
  const [isAthleteModalOpen, setIsAthleteModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  const athletes = [
    {
      name: "RAJAB BUTT",
      img: "/images/img-1.png",
      stats: { wins: 46, kos: 30, draws: 1, losses: 2, winRate: 93, koRate: 65 },
      bio: "Rajab Butt is a renowned athlete known for his outstanding skills and dedication."
    },
    {
      name: "ANAS ALI",
      img: "/images/img-2.jpg",
      stats: { wins: 38, kos: 25, draws: 2, losses: 5, winRate: 85, koRate: 72 },
      bio: "Anas Ali is a celebrated athlete known for his perseverance and exceptional talent."
    }
  ];

  const openAthleteModal = (athlete) => {
    setSelectedAthlete(athlete);
    setIsAthleteModalOpen(true);
  };

  const closeAthleteModal = () => {
    setIsAthleteModalOpen(false);
    setSelectedAthlete(null);
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <>
      <div className='bg-black py-5 text-white text-center' id='Athlete'>
        <h1 className='font-bold text-3xl my-10'>Our ATHLETES</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
          {athletes.map((athlete, index) => (
            <div key={index} className="relative mb-8 group cursor-pointer" onClick={() => openAthleteModal(athlete)}>
              <div className="bg-black relative text-center">
                <img src={athlete.img} alt={athlete.name} className="w-full h-[400px]" />
                <p className="absolute bottom-0 left-0 right-0 bg-black text-white text-xl font-bold py-2">{athlete.name}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-lg">{athlete.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='py-5 pt-10'>
          <button
            onClick={openBookingModal}
            className="bg-transparent border-2 border-red-500 text-red-500 py-2 px-4 uppercase font-bold text-center text-sm md:text-base lg:text-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Athlete Details Modal */}
      <Modal
        isOpen={isAthleteModalOpen}
        onRequestClose={closeAthleteModal}
        contentLabel="Athlete Details Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        {selectedAthlete && <AthleteDetails athlete={selectedAthlete} closeModal={closeAthleteModal} />}
      </Modal>

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
    </>
  );
};

export default FighterCard;
