'use client';

import Image from "next/image";
import { signUp } from "@/app/lib/actions";
import Link from "next/link";

export default function LoginForm() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-4 lg:h-[100vh]">
            <div className="flex flex-col items-center lg:items-center mb-40 lg:w-1/2 p-4 lg:my-20">
            <Link href="/dashboard"><Image src="/icon.png" alt="Company Icon" width={50} height={50} /></Link>
                <h1 className="my-10 text-4xl">Welcome Back</h1><h2 className="text-2xl text-gray-500 mt-4 mb-8 text-center lg:text-left">Login to Continue</h2>
                <form action={signUp} className="w-full max-w-md">

                    <fieldset className="mb-4">
                        <input 
                            type="email" 
                            name="email" 
                            id="emailId" 
                            defaultValue=""
                            placeholder="Email"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset>
                    
                    <fieldset className="mb-4">
                        <input 
                            type="password" 
                            name="password" 
                            id="passwordId" 
                            defaultValue=""
                            placeholder="Password"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </fieldset>
                    <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded-md">Login</button>
                </form>
                <div className="mt-6 space-y-2 text-center lg:text-left flex items-center">
                    <span className="pl-4 my-0">
                       Dont have an account?<Link href="/dashboard/healthcare" className="text-teal-600"> Signup</Link>
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
