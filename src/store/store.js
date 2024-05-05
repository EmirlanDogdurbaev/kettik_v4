import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice.js";
import bookingReducer from "./Slices/bookingSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        bookingSlice: bookingReducer,
    },
});

export default store;