// ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInfo = ({ onNext, submitPersonalInfo, formData }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: formData });

    const onSubmit = data => {
        submitPersonalInfo(data)
        onNext()
    };

    return (
        <div className="flex items-center justify-center ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full p-8 bg-white rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Contact Form</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            {...register('contactNumber', { required: true })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber ? 'border-red-500' : ''}`}
                        />
                        {errors.contactNumber && <p className="text-red-500 text-xs italic">Contact number is required.</p>}
                    </div>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketType">
                        Ticket Type
                    </label>
                    <select
                        id="ticketType"
                        {...register('ticketType', { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ticketType ? 'border-red-500' : ''}`}
                    >
                        <option value="">Select a ticket type</option>
                        <option value="VipTicket">Vip Ticket (Rs5000) </option>
                        <option value="BasicTicket">Basic Ticket (Rs2000)</option>
                        <option value="OnlineLivePass">Online Live Pass (Rs1000) </option>
                    </select>
                    {errors.ticketType && <p className="text-red-500 text-xs italic">Ticket type is required.</p>}
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register('message')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>

                <div className="flex items-center justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfo;
