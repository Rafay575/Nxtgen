import React from 'react';

const AthleteDetails = ({ athlete, closeModal }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-[90%] max-w-3xl relative">
      <button onClick={closeModal} className="absolute top-4 right-4 text-red-500 font-bold text-xl hover:text-red-700 transition duration-300">X</button>
      <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-red-500 pb-2">{athlete.name}</h2>
      <div className="text-left">
        <h3 className="text-3xl font-bold mb-4 text-red-500">Stats</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <p className="text-5xl font-bold text-green-400">W{athlete.stats.wins}</p>
            <p className="text-lg">Wins</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-red-400">KO{athlete.stats.kos}</p>
            <p className="text-lg">KOs</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-yellow-400">D{athlete.stats.draws}</p>
            <p className="text-lg">Draws</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-400">L{athlete.stats.losses}</p>
            <p className="text-lg">Losses</p>
          </div>
        </div>
        <div className="flex justify-around my-8">
          <div className="text-center">
            <p className="text-6xl font-extrabold text-green-400">{athlete.stats.winRate}%</p>
            <p className="text-xl">Win Rate</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-extrabold text-red-400">{athlete.stats.koRate}%</p>
            <p className="text-xl">KO Rate</p>
          </div>
        </div>
        <h3 className="text-3xl font-bold mb-4 text-red-500">Bio</h3>
        <p className="text-lg">{athlete.bio}</p>
      </div>
    </div>
  );
};

export default AthleteDetails;
