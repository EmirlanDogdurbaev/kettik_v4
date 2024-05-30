// src/app/store.js
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice.js';
import bookingReducer from './Slices/bookingSlice.js';
import tourReducer from './Slices/tourSlice.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
        booking: bookingReducer,
        tour: tourReducer,
    },
});

export default store;
