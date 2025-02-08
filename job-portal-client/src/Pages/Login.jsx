import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import 'animate.css'; // Import animate.css


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
    const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize form methods

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data); // Replace with actual login logic
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 p-6">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-3xl shadow-lg animate__animated animate__fadeInUp animate__faster">
                {/* Animated container */}
                <div className="text-center animate__animated animate__fadeInDown animate__faster">
                    {/* Animated header */}
                    <h2 className="text-4xl font-extrabold text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Or{' '}
                        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            create a new account
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                {...register('email', { required: true })}
                                className={`block w-full pl-12 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300`}
                                placeholder="Email address"
                            />
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                autoComplete="current-password"
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
                    </div>

                    <div className="flex items-center justify-between animate__animated animate__fadeInUp animate__delay-1s">
                        {/* Animated links */}
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 animate__animated animate__bounceIn animate__delay-2s"
                        >
                            {/* Animated submit button */}
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;



// Backup to Understand Firebase


// import React from 'react'
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from '../firebase/firebase.config';
// import { getAuth } from "firebase/auth";


// const Login = () => {

//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     const handleLogin = () => {
//         signInWithPopup(auth,provider) .then((result) => {
            
//             const user = result.user;
//             console.log(user)
            
//           }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//           });
//     }

//   return (
    
//     <div className='h-screen w-full flex items-center justify-center'>
//         <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button></div>
//   )
// }

// export default Login