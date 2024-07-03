'use client';

import Image from "next/image";
import { signUp } from "@/app/lib/actions";
import Link from "next/link";

export default function SignUpForm() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-4 lg:h-[100vh]">
            <div className="flex flex-col items-center lg:items-center mb-40 lg:w-1/2 p-4 lg:my-20">
            <Link href="/dashboard"><Image src="/icon.png" alt="Company Icon" width={50} height={50} /></Link>
                <h1 className="my-10 text-4xl">BCA HEALTHCARE</h1><h2 className="text-2xl text-gray-500 mt-4 mb-8 text-center lg:text-left">Sign Up to Connect with Our Medical Professionals</h2>
                <form action={signUp} className="w-full max-w-md">
                <fieldset className="mb-4 border-black-200">
                        <legend className="block font-medium text-sm text-gray-700 mb-2">Full Name</legend>
                        <input 
                            type="text" 
                            id="companyId" 
                            name="companyName"
                            defaultValue=""
                            aria-describedby="company-error"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset> 

                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Email</legend>
                        <input 
                            type="email" 
                            name="email" 
                            id="emailId" 
                            defaultValue=""
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset>

                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Phone Number</legend>
                        <input 
                            type="number" 
                            name="number" 
                            id="phoneNumberId" 
                            defaultValue=""
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset>
                    
                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Password</legend>
                        <input 
                            type="password" 
                            name="password" 
                            id="passwordId" 
                            defaultValue=""
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset>
                    
                    <fieldset className="mb-6">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</legend>
                        <input 
                            type="password" 
                            id="confirmPasswordId"
                            name="confirmPassword"
                            defaultValue=""
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset>
                    <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded-md">Sign Up</button>
                </form>
                <div className="mt-6 space-y-2 text-center lg:text-left flex items-center">
                    <span className="border-gray-200  pr-2">
                        Already have an account? <Link href="/login" className="text-teal-600">Login</Link>
                    </span>
                    <span className="pl-4 border-l-2 my-0">
                        Signup as a client? <Link href="/dashboard/healthcare" className="text-teal-600">here</Link>
                    </span>
                </div> 
            </div>
            <div className="hidden lg:block lg:w-1/2 p-4 relative lg:w-3/5 lg:h-[90vh] mb-20">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/doc2.png')" }}></div>
                <div className="absolute inset-0 bg-cover bg-center bg-gray-700 opacity-40"></div>
                <div className="w-full h-full ">
                    <Image 
                    src="/icon.png" 
                    alt="logo_Cover" 
                    width={100} 
                    height={100} 
                    className="absolute top-[45%] left-[50%] z-10 m "
                    />
                </div>
            </div>
        </div>
    );
}
