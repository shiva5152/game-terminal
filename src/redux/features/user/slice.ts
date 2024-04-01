import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TUser } from "@/types/user";

type TInitialState = {
    loading: boolean;
    error: null | string;
    isAuthenticatedUser: boolean;
    isAdmin: boolean;
    user: TUser | null;
    connectedWallet: string | null;
};

const initialState: TInitialState = {
    loading: false,
    error: null,
    isAuthenticatedUser: false,
    isAdmin: false,
    user: null,
    connectedWallet: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setUser: (state, action: PayloadAction<TUser | null>) => {
            state.user = action.payload;
        },
        setIsAuthenticatedUser: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticatedUser = action.payload;
        },
        setConnectedWallet: (state, action: PayloadAction<string | null>) => {
            state.connectedWallet = action.payload;
        },

    },
});

export const { setLoading, setError, setIsAuthenticatedUser, setUser } =
    userSlice.actions;

export default userSlice.reducer;