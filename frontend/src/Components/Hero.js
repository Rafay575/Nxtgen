// Hero.js
import React from 'react';
import Navbar from './Navbar'; // Make sure the path to Navbar.js is correct

const Hero = () => {
    return (
        <div className="relative ">
            <Navbar />
            <div className="w-full max-h-[100vh] overflow-hidden">
                <img
                    src="/images/Poster.jpg"
                    alt="Poster"
                    className="w-full max-h-full object-cover object-top"
                />
            </div>
        </div>
    );
};

export default Hero;
