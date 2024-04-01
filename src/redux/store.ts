import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/redux/features/user/slice';
import uiSlice from '@/redux/features/ui/slice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        ui: uiSlice,
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch