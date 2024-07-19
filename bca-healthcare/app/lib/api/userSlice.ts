import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string | null;
    token: string | null;
    userName: string| null;
}

const initialState: UserState = {
    email: null,
    token: null,
    userName: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ email: string; token: string , name: string}>) {
            state.email = action.payload.email;
            state.userName = action.payload.name;
            state.token = action.payload.token;
        },
        clearUser(state) {
            state.email = null;
            state.token = null;
            state.userName = null;
            localStorage.clear();
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
