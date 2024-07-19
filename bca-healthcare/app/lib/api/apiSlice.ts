import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store';
import { clearUser, setUser } from './userSlice'; // Adjust the import path as needed
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { tokenReceived, loggedOut } from './authSlice';
import { string } from 'zod';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({ baseUrl: 'https://bcahealthcare.onrender.com/api/v1',
    prepareHeaders: (headers, { getState, endpoint }) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        if (endpoint === 'getNewRefreshToken') {
            const state = getState() as RootState;
            const email = state.user.email;
            headers.set('x-user-email', email as string);
            headers.set('x-user-token', token as string);
        }
        return headers;
    },
 });
 
 const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
   await mutex.waitForUnlock();
   let result = await baseQuery(args, api, extraOptions);
 
   if (result.error && result.error.status === 401) {
     if (!mutex.isLocked()) {
       const release = await mutex.acquire();
       try {
         const refreshResult = await baseQuery('/auth/refreshToken', api, extraOptions);
         if (refreshResult.data) {
           api.dispatch(tokenReceived(refreshResult.data as string));
           result = await baseQuery(args, api, extraOptions);
         } else {
           api.dispatch(loggedOut());
         }
       } finally {
         release();
       }
     } else {
       await mutex.waitForUnlock();
       result = await baseQuery(args, api, extraOptions);
     }
   }
 
   return result;
 };

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth, // Use the custom base query with reauthorization
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (user) => ({
                url: '/auth/signUp',
                method: 'POST',
                body: user,
            }),
        }),
        activateAccount: builder.mutation({
            query: (activationData) => ({
                url: '/auth/activate-account',
                method: 'POST',
                body: activationData,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const { email, fullName: name } = data.data;
                    dispatch(setUser({ email, name, token: data.accessToken }));
                    localStorage.setItem('token', data.accessToken);
                } catch (error) {
                    console.error('Login failed:', error);
                }
            },
        }),
        resendOTP: builder.mutation({
            query: (email) => ({
                url: '/auth/resendOTP',
                method: 'POST',
                body: { email },
            }),
        }),
        getNewRefreshToken: builder.query({
            query: () => ({
                url: '/auth/refreshToken',
                method: 'GET',
            }),
        }),
        forgotPassword: builder.mutation({
            query: (email) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body: { email },
            }),
        }),
        logout: builder.mutation({
            query: (logoutData) => ({
                url: '/auth/logout',
                method: 'POST',
                body: logoutData,
            }),
        }),
    }),
});

export const {
    useSignUpMutation,
    useActivateAccountMutation,
    useLoginMutation,
    useResendOTPMutation,
    useGetNewRefreshTokenQuery,
    useForgotPasswordMutation,
    useLogoutMutation,
} = apiSlice;

