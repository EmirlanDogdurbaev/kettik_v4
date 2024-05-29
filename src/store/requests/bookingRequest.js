import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_API} from "../api/base_api.js"; // Замените на вашу функцию API



console.log(header)
export const submitForm = createAsyncThunk(
    'tour/create',
    async ({phoneNumber, tourId, date, numberOfPeople, userToken}) => {
        const response = await BASE_API.post('/tour', {
            phoneNumber,
            tourId,
            date,
            numberOfPeople,
            userToken
        });
        return response.data;
    }
);