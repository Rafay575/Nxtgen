import React from 'react';

function Hero() {
    return (
        <div className="relative">
            <img src="/images/Poster.jpg" alt="Poster" className="w-full" />
            <button className="absolute top-4 right-4 border-2 border-[#8B0000] hover:bg-[#8B0000] text-white font-bold py-2 px-4 rounded-full">
                Book Now
            </button>
        </div>
    );
}

export default Hero;
