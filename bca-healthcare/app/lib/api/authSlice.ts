import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    tokenReceived: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    loggedOut: (state) => {
    //   state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { tokenReceived, loggedOut } = authSlice.actions;

export default authSlice.reducer;
