import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type TInitialState = {
    isCalmingDomain: boolean;
    isEditingTournament: boolean;

};

const initialState: TInitialState = {
    isCalmingDomain: false,
    isEditingTournament: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setIsDomainCLaim: (state, action: PayloadAction<boolean>) => {
            state.isCalmingDomain = action.payload;
        },
        setIsEditingTournament: (state, action: PayloadAction<boolean>) => {
            state.isEditingTournament = action.payload;
        },
    },

});

export const { setIsDomainCLaim, setIsEditingTournament } =
    uiSlice.actions;

export default uiSlice.reducer;