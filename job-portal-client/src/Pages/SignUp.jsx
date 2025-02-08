import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import 'animate.css'; // Import animate.css

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State to toggle confirm password visibility
    const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize form methods

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data); // Replace with actual signup logic
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 p-6">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-3xl shadow-lg animate__animated animate__fadeInUp animate__faster">
                {/* Animated container */}
                <div className="text-center animate__animated animate__fadeInDown animate__faster">
                    {/* Animated header */}
                    <h2 className="text-4xl font-extrabold text-gray-900">Create Account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Or{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            sign in to your account
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <label htmlFor="firstName" className="sr-only">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                {...register('firstName', { required: true })}
                                className={`block w-full pl-12 pr-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300`}
                                placeholder="First Name"
                            />
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            {errors.firstName && <span className="text-red-500 text-sm">First Name is required</span>}
                        </div>
                        <div className="relative">
                            <label htmlFor="lastName" className="sr-only">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                {...register('lastName', { required: true })}
                                className={`block w-full pl-12 pr-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300`}
                                placeholder="Last Name"
                            />
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            {errors.lastName && <span className="text-red-500 text-sm">Last Name is required</span>}
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                {...register('email', { required: true })}
                                className={`block w-full pl-12 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300`}
                                placeholder="Email address"
                            />
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                required
                                {...register('password', { required: true })}
                                className={`block w-full pl-12 pr-10 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300`}
                                placeholder="Password"
                            />
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                            >
                                {passwordVisible ? <FiEyeOff /> : <FiEye />}
                            </button>
                            {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
                        </div>
                        <div className="relative">
                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                required
                                {...register('confirmPassword', { required: true })}
                                className={`block w-full pl-12 pr-10 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300`}
                                placeholder="Confirm Password"
                            />
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <button
                                type="button"
                                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                            >
                                {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
                            </button>
                            {errors.confirmPassword && <span className="text-red-500 text-sm">Confirm Password is required</span>}
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInUp animate__delay-1s">
                        {/* Animated links */}
                        <p className="text-sm text-gray-600">
                            By signing up, you agree to our <Link to="/terms" className="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</Link> and <Link to="/privacy" className="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>.
                        </p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 animate__animated animate__bounceIn animate__delay-2s"
                        >
                            {/* Animated submit button */}
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
