import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-2 md:mb-0">© 2024 NxtGen. All rights reserved.</p>
                    <a href="mailto:nxtgenofficial00@gmail.com">
                        <p className="text-sm">
                            Developed by &nbsp;
                            <strong>NxtGen</strong>
                        </p>
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
