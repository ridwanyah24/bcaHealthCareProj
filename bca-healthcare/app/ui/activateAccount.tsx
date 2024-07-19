'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import { useActivateAccountMutation } from '@/app/lib/api/apiSlice';
import { z } from 'zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

// Define the schema for account activation form
const ActivateAccountSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    OTP: z.string().nonempty({ message: 'OTP is required' }),
});

type ActivateAccountData = z.infer<typeof ActivateAccountSchema>;

export default function AccountActivationForm() {
    const router = useRouter();
    const [activateAccount, { isLoading, isError, error }] = useActivateAccountMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<ActivateAccountData>({ resolver: zodResolver(ActivateAccountSchema) });

    const onSubmit = async (data: ActivateAccountData) => {
        try {
            await activateAccount(data).unwrap();
            router.push('/login');  // Navigate to dashboard upon successful activation
        } catch (err) {
            console.error('Account activation failed:', err);
        }
    };

    // Type guard to check if the error is a FetchBaseQueryError
    const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
        return error && typeof error === 'object' && 'data' in error;
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl text-gray-500 mt-4 mb-8">Activate Your Account</h2>
            <form className="w-full max-w-md" method="post" onSubmit={handleSubmit(onSubmit)}>
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
                    <legend className="block text-sm font-medium text-gray-700 mb-2">OTP</legend>
                    <input
                        type="text"
                        {...register("OTP")}
                        name="OTP"
                        id="OTP"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.OTP && <span className="text-red-400">{errors.OTP.message}</span>}
                </fieldset>

                <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded-md flex justify-center items-center" disabled={isLoading}>
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-3 border-white border-2 rounded-full" viewBox="0 0 24 24"></svg>
                    ) : (
                        'Activate Account'
                    )}
                </button>
            </form>
            {isError && (
                <div className="text-red-400 mt-4">
                    {isFetchBaseQueryError(error) ? error.status : 'Account activation failed'}
                </div>
            )}
        </div>
    );
}
