'use client'

import React, { useState } from 'react';
import { auth } from '../../firebaseConfig'; // Adjust path as per your project structure
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleLoginWithEmailPassword = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or do something after successful login
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            // Redirect or do something after successful Google sign-in
        } catch (err: any) {
            setError(err.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-md shadow-md w-full md:w-96">
                <h2 className="text-2xl text-gray-600 font-bold mb-4">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLoginWithEmailPassword}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-gray-600"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 py-2"
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mb-4"
                    >
                        Login
                    </button>
                </form>
                <button
                    onClick={handleLoginWithGoogle}
                    className="w-full bg-white border border-gray-300 text-gray-600 p-2 rounded-md flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:shadow-outline mb-4"
                >
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                    Login with Google
                </button>
                <div className="pt-2 text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <Link href="/signup">
                        <span className="text-blue-500 hover:underline">Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

