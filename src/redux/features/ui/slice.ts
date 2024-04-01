import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type TInitialState = {
    isCalmingDomain: boolean;

};

const initialState: TInitialState = {
    isCalmingDomain: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setIsDomainCLaim: (state, action: PayloadAction<boolean>) => {
            state.isCalmingDomain = action.payload;
        },
    },
});

export const { setIsDomainCLaim } =
    uiSlice.actions;

export default uiSlice.reducer;