
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z, ZodType } from 'zod';
import { useRouter } from 'next/router';

export type signupData = {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: number
}

const url= "https://bcahealthcare.onrender.com/"

export const SignUpSchema: ZodType<signupData> = z.object({
    fullName: z.string().nonempty({ message: 'Please Enter your Name.' }).min(2).max(30),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    phoneNumber:z.number().min(8)
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});
export async function ConnectSignUp(formData: FormData) {
    try {
        const data = {
            fullName: formData.get('fullName') as string,
            phoneNumber: formData.get('phoneNumber') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            confirmPassword: formData.get('confirmPassword') as string,
        };

        const result = SignUpSchema.parse(data);
        const response = await fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify(result)
        });

        console.log(response.json());
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Sign-up error:', errorData);
            // Handle error response from the API
            throw new Error('Sign-up failed');
        }
        const responseData = await response.json();
        console.log('Sign-up success:', responseData);
        
        // Revalidate the path if needed
        // revalidatePath('/');
        // Redirect to a success page or dashboard
        // redirect('/activateAccount');
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


const ActivateAccountSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    OTP: z.string().nonempty({ message: 'Please enter the OTP sent to your email.' }),
});

export async function ActivateAccount(formData: FormData) {
    try {
        const data = {
            email: formData.get('email') as string,
            OTP: formData.get('OTP') as string,
        };

        const result = ActivateAccountSchema.parse(data);
        const response = await fetch(`${url}api/v1/auth/activate-account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Activation error:', errorData);
            // Handle error response from the API
            throw new Error('Activation failed');
        }

        const responseData = await response.json();
        console.log('Activation success:', responseData);

        // Revalidate the path if needed
        // revalidatePath('/');
        const router = useRouter();
        // Redirect to a success page or dashboard
        router.push('/dashboard');
    } catch (error) {
        if (error instanceof z.ZodError) {
            const formattedErrors = error.format();
            console.log('Validation errors:', formattedErrors);
            // Handle validation errors (e.g., display them in the form)
        } else {
            console.error('Activation error:', error);
            // Handle other types of errors
        }
    }
}

const ResendOtpSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export async function resendOtp(formData: FormData) {
    try {
        const data = {
            email: formData.get('email') as string,
        };

        const result = ResendOtpSchema.parse(data);
        console.log("i should work regardless")

        const response = await fetch(`${url}/api/v1/auth/resend-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Resend OTP error:', errorData);
            throw new Error('Resend OTP failed');
        }

        const responseData = await response.json();
        console.log('Resend OTP success:', responseData);

        revalidatePath('/activate-account');
    } catch (error) {
        if (error instanceof z.ZodError) {
            const formattedErrors = error.format();
            console.log('Validation errors:', formattedErrors);
        } else {
            console.error('Resend OTP error:', error);
        }
    }
}

// const LoginSchema = z.object({
//     email: z.string().email({ message: 'Please enter a valid email address.' }),
//     password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
// });

export async function Login(formData: FormData) {

    try {
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        const response = await fetch(`${url}api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const accessToken = result.accessToken;
        const userName = result.userName
        // Store the JWT token in local storage
        localStorage.setItem('userName', userName)
        localStorage.setItem('jwt', accessToken);
        // Optionally, you can return some data or status to the caller
        return result;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

export async function Logout(){
    try{

    } catch(error){

    }
}



