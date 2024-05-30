import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createTour = createAsyncThunk(
    'tour/createTour',
    async (tourData, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            for (const key in tourData) {
                if (Array.isArray(tourData[key])) {
                    tourData[key].forEach(item => formData.append(key, item));
                } else if (tourData[key]) {
                    formData.append(key, tourData[key]);
                }
            }
            const response = await axios.post('http://localhost:8080/tour/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        title: '',
        miniTitle: '',
        price: 0,
        priceInclude: [],
        bring: '',
        bringCharacteristics: [],
        fullDescription: '',
        day: '',
        category: '',
        image: null,
        image2: null,
        image3: null,
        image4: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        setField: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        addBringCharacteristic: (state, action) => {
            state.bringCharacteristics.push(action.payload);
        },
        removeBringCharacteristic: (state, action) => {
            state.bringCharacteristics = state.bringCharacteristics.filter(
                (_, index) => index !== action.payload
            );
        },
        addPriceInclude: (state, action) => {
            state.priceInclude.push(action.payload);
        },
        removePriceInclude: (state, action) => {
            state.priceInclude = state.priceInclude.filter((_, index) => index !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTour.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createTour.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(createTour.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const {
    setField,
    addBringCharacteristic,
    removeBringCharacteristic,
    addPriceInclude,
    removePriceInclude,
} = tourSlice.actions;

export default tourSlice.reducer;
