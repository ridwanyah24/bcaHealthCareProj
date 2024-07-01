'use client';

import Image from "next/image";
import { signUp } from "@/app/lib/actions";
import Link from "next/link";

export default function SignUpForm() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-4">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2 p-4">
                <Image src="/icon.png" alt="Company Icon" width={50} height={50} />
                <h1 className="text-2xl font-bold mt-4 mb-8 text-center lg:text-left">Join as a healthcare provider today</h1>
                <form action={signUp} className="w-full max-w-md">
                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Company Name</legend>
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
                <div className="mt-6 space-y-2 text-center lg:text-left">
                    <p>
                        Already have an account? <Link href="/login" className="text-teal-600">Login</Link>
                    </p>
                    <p>
                        Signup as a client? <Link href="/client-signup" className="text-teal-600">here</Link>
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 p-4">
                <Image src="/doc2.png" alt="Doctor Image" width={600} height={1000} className="object-cover" />
            </div>
        </div>
    );
}
