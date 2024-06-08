import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInfo = ({ onNext, submitPersonalInfo, formData, closeModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: formData });

    const onSubmit = data => {
        submitPersonalInfo(data);
        onNext();
    };

    return (
        <div className="flex items-center justify-center mt-5">
            <form onSubmit={handleSubmit(onSubmit)} className="relative   p-5 bg-white rounded-lg shadow-xl">
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
                <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">Contact Form</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            className={`transition-colors duration-200 shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            {...register('contactNumber', { required: true })}
                            className={`transition-colors duration-200 shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.contactNumber && <p className="text-red-500 text-xs italic">Contact number is required.</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true })}
                        className={`transition-colors duration-200 shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="ticketType">
                        Ticket Type
                    </label>
                    <select
                        id="ticketType"
                        {...register('ticketType', { required: true })}
                        className={`transition-colors duration-200 shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 ${errors.ticketType ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Select a ticket type</option>
                        <option value="VipTicket">Vip Ticket (Rs5000)</option>
                        <option value="BasicTicket">Basic Ticket (Rs2000)</option>
                        <option value="OnlineLivePass">Online Live Pass (Rs1000)</option>
                    </select>
                    {errors.ticketType && <p className="text-red-500 text-xs italic">Ticket type is required.</p>}
                </div>

                <div className="flex items-center justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfo;
