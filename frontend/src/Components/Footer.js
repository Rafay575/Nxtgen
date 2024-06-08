import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex-1 mb-6 md:mb-0">
                        <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                    </div>
                    <div className="flex-1 text-right">
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#home" className="text-white hover:text-gray-300  block py-2   md:p-4">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#Athlete" className="text-white hover:text-gray-300  block py-2   md:p-4">Athlete</a>

                            </li>
                            <li>
                                <a href="#Social" className="text-white hover:text-gray-300  block py-2   md:p-4">Social</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-2 md:mb-0">© 2024 NxtGen. All rights reserved.</p>
                    <a href="mailto:nxtgenofficial00@gmail.com" className="text-sm">
                        Developed by &nbsp;<strong>NxtGen</strong>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
