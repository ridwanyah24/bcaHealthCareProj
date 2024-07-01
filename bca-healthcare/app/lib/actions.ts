'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const FormSchema = z.object({
    companyName: z.string().nonempty({ message: 'Please Enter company Name.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
    confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters long.' })
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});

export async function signUp(formData: FormData) {
    try {
        const data = {
            companyName: formData.get('companyName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            confirmPassword: formData.get('confirmPassword') as string,
        };

        const result = FormSchema.parse(data);

        // Add logic to create a new user in your database or call an external API

        // Revalidate the path if needed
        revalidatePath('/');

        // Redirect to a success page or dashboard
        redirect('/dashboard');
    } catch (error) {
        if (error instanceof z.ZodError) {
            const formattedErrors = error.format();
            console.log('Validation errors:', formattedErrors);
            // Handle validation errors (e.g., display them in the form)
        } else {
            console.error('Sign-up error:', error);
            // Handle other types of errors
        }
    }
}
