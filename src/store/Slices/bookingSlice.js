import { createSlice } from '@reduxjs/toolkit';
import {submitForm} from "../requests/bookingRequest.js";

const initialState = {
    loading: false,
    error: null,
    success: false,
};

const bookingSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.pending = "loading";
                state.error = null;
                state.success = false;
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.fulfilled = "succeeded";
                state.success = true;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.rejected = "error";
                state.error = action.payload;
            });
    },
});

export default bookingSlice.reducer;
