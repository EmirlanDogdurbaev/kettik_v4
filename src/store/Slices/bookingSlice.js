import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { BASE_API } from "../api/base_api.js";

export const getAuthorizationHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem("access_token")}`
});

export const bookingPost = createAsyncThunk(
    'booking/addNewBooking',
    async function (formData, { rejectWithValue, dispatch }) {
        try {
            const data = {
                tour_id: formData.tour_id,
                date: formData.date,
                phone: formData.phoneNumber,
                people: formData.people,
            };

            console.log(data);
            const response = await axios.post(`${BASE_API}/booking/book`, data, {
                headers: getAuthorizationHeader()
            });
            console.log(response);
            if (response.status !== 201) {
                throw new Error('Can\'t add task. Server error.');
            }

            dispatch(makeBooking(response.data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        bookings: [],
        status: null,
        error: null,
    },
    reducers: {
        makeBooking: (state, action) => {
            state.bookings.push(action.payload);
        },
        removeBooking: (state, action) => {
            state.bookings = state.bookings.filter(booking => booking.id !== action.payload.id);
        },
    },
});

export const { makeBooking, removeBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
