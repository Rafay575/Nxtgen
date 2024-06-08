import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

const Confirmation = ({ onPrevious, formData,closeModal,success, setSuccess }) => {
    const { contactNumber, email, message, name, ticketType, image } = formData;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
   

    const handleSubmit = async () => {
        setLoading(true);
        setError(false);
        setSuccess(false);

        const formDataToSend = new FormData();
        formDataToSend.append('contactNumber', contactNumber);
        formDataToSend.append('email', email);
        formDataToSend.append('message', message);
        formDataToSend.append('name', name);
        formDataToSend.append('ticketType', ticketType);
        formDataToSend.append('image', image);

        try {
            const response = await axios.post('http://localhost:8000/submit', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false);
            if (response.data.success) {
                setSuccess(true);
            } else {
                setError(true);
            }
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <div className="flex items-center justify-center mt-5">
           <div  className="relative   p-5 bg-white rounded-lg shadow-xl">
                <button onClick={closeModal} className='absolute top-3 right-3'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 hover:text-red-600 transition-colors"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">Confirmation</h2>

                {error && (
                    <div className="flex items-center justify-center p-4 mb-6 text-red-800 bg-red-200 rounded-lg shadow" role="alert">
                        <ExclamationCircleIcon className="w-6 h-6 mr-2" />
                        <span>There was an error submitting the form. Please try again.</span>
                    </div>
                )}

                {success && (
                    <div className="flex items-center justify-center p-4 mb-6 text-green-800 bg-green-200 rounded-lg shadow" role="alert">
                        <CheckCircleIcon className="w-6 h-6 mr-2" />
                        <span>Form submitted successfully!</span>
                    </div>
                )}

                <div className="grid grid-cols-4 gap-x-4 gap-y-4 mb-8">
                    <p className="font-semibold col-span-1">Name:</p>
                    <p className="col-span-3">{name}</p>

                    <p className="font-semibold col-span-1">Contact </p>
                    <p className="col-span-3">{contactNumber}</p>
                    <p className="font-semibold col-span-1">Ticket</p>
                    <p className="col-span-3">{ticketType}</p>

                    <p className="font-semibold col-span-1">Email:</p>
                    <p className="col-span-3 text-sm ">{email}</p>

                  

                    {image && (
                        <>
                            <p className="font-semibold col-span-1">Image:</p>
                            <div className="col-span-2">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Image Preview"
                                    className="w-full max-w-xs max-h-[200px] rounded-lg shadow"
                                />
                            </div>
                        </>
                    )}
                </div>

                {!success && (
                    <div className="flex items-center justify-between">
                        <button
                            onClick={onPrevious}
                            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-all duration-200"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex items-center transition-all duration-200 disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? (
                                <svg className="w-5 h-5 mr-2 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0010 10v-4a6 6 0 01-6-6H2z"></path>
                                </svg>
                            ) : "Submit"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Confirmation;
