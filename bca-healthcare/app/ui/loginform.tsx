'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/app/lib/api/apiSlice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [login, { isLoading, isError, error }] = useLoginMutation();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const userCredentials = { email, password };
            const response = await login(userCredentials).unwrap();
            localStorage.setItem('token', response.accessToken);
            router.push('/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-4 lg:h-[100vh]">
            <div className="flex flex-col items-center lg:items-center mb-40 lg:w-1/2 p-4 lg:my-20">
                <Link href="/">
                    <Image src="/icon.png" alt="Company Icon" width={50} height={50} />
                </Link>
                <h1 className="my-10 text-4xl">Welcome Back</h1>
                <h2 className="text-2xl text-gray-500 mt-4 mb-8 text-center lg:text-left">Login to Continue</h2>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <fieldset className="mb-4">
                        <input
                            type="email"
                            name="email"
                            id="emailId"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="block w-full p-2 border border-gray-300 rounded-md focus:border-teal-600"
                            required
                        />
                    </fieldset>
                    
                    <fieldset className="mb-4">
                        <input
                            type="password"
                            name="password"
                            id="passwordId"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="block w-full p-2 border border-gray-300 rounded-md focus:border-teal-600"
                            required
                        />
                    </fieldset>
                    <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded-md" disabled={isLoading}>
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 mr-3 border-white border-2 rounded-full" viewBox="0 0 24 24"></svg>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                {isError && (
                    <div className="text-red-400 mt-4">
                        {(error as FetchBaseQueryError)?.status ? (error as FetchBaseQueryError).status : 'Login failed'}
                    </div>
                )}
                <div className="mt-6 space-y-2 text-center lg:text-left flex items-center">
                    <span className="pl-4 my-0">
                        Don&apos;t have an account? <Link href="/signup" className="text-teal-600">Signup</Link>
                    </span>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 p-4 relative lg:w-3/5 lg:h-[90vh] mb-20">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/doc2.png')" }}></div>
                <div className="absolute inset-0 bg-cover bg-center bg-gray-700 opacity-40"></div>
                <div className="w-full h-full">
                    <Image
                        src="/icon.png"
                        alt="logo_Cover"
                        width={100}
                        height={100}
                        className="absolute top-[45%] left-[50%] z-10"
                    />
                </div>
            </div>
        </div>
    );
}
