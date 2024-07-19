'use client';

import Image from "next/image";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import { signupData, SignUpSchema } from "@/app/lib/actions";
import { useSignUpMutation } from "@/app/lib/api/apiSlice";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ApiError{
    status: number,
    data: {
        error: string,
        message:string
    }
}

export default function SignUpForm() {
    const router = useRouter();
    const [signUp, { isLoading, isError, error }] = useSignUpMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<signupData>({ resolver: zodResolver(SignUpSchema) });

    const onSubmit = async (data: signupData) => {
        try {
            await signUp(data).unwrap();
            router.push('/activateAccount');  // Navigate to account activation page upon successful sign-up
        } catch (err) {
            console.error('Sign-up failed:', err);
        }
    };

    // Type guard to check if the error is a FetchBaseQueryError
    const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
        return error && typeof error === 'object' && 'data' in error;
    };

    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-4 lg:h-[100vh]">
            <div className="flex flex-col items-center lg:items-center mb-40 lg:w-1/2 p-4 lg:my-20">
                <Link href="/dashboard">
                    <Image src="/icon.png" alt="Company Icon" width={50} height={50} />
                </Link>
                <h1 className="my-10 text-4xl">BCA HEALTHCARE</h1>
                <h2 className="text-2xl text-gray-500 mt-4 mb-8 text-center lg:text-left">Sign Up to Connect with Our Medical Professionals</h2>
                <form className="w-full max-w-md" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="mb-4 border-black-200">
                        <legend className="block font-medium text-sm text-gray-700 mb-2">Full Name</legend>
                        <input
                            type="text"
                            {...register("fullName")}
                            id="fullName"
                            name="fullName"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.fullName && <span className="text-red-400">{errors.fullName.message}</span>}
                    </fieldset>

                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Email</legend>
                        <input
                            type="email"
                            {...register("email")}
                            name="email"
                            id="email"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && <span className="text-red-400">{errors.email.message}</span>}
                    </fieldset>

                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Phone Number</legend>
                        <input
                            type="text"
                            {...register("phoneNumber", { valueAsNumber: true })}
                            name="phoneNumber"
                            id="phoneNumber"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.phoneNumber && <span className="text-red-400">{errors.phoneNumber.message}</span>}
                    </fieldset>

                    <fieldset className="mb-4">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Password</legend>
                        <input
                            type="password"
                            {...register("password")}
                            name="password"
                            id="password"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.password && <span className="text-red-400">{errors.password.message}</span>}
                    </fieldset>

                    <fieldset className="mb-6">
                        <legend className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</legend>
                        <input
                            type="password"
                            {...register("confirmPassword")}
                            id="confirmPassword"
                            name="confirmPassword"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.confirmPassword && <span className="text-red-400">{errors.confirmPassword.message}</span>}
                    </fieldset>
                    <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded-md flex justify-center items-center" disabled={isLoading}>
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 mr-3 border-white border-2 rounded-full" viewBox="0 0 24 24"></svg>
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>
                {isError && (
                    <div className="text-red-400 mt-4">
                        {isFetchBaseQueryError(error) && (error as ApiError)?.data.error ? (error as ApiError).data.error : 'Sign-up failed'}
                    </div>
                )}
                <div className="mt-6 space-y-2 text-center lg:text-left flex items-center">
                    <span className="border-gray-200 pr-2">
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
