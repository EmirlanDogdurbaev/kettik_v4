import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {BASE_API} from "../api/base_api.js"; // Замените на вашу функцию API

export const submitForm = createAsyncThunk(
    'form/submit',
    async (formValue, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_API}/bookings/book`, formValue); // Отправка данных формы на сервер
            return response.data; // Предполагается, что сервер возвращает данные после успешной отправки
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data); // Возвращаем данные об ошибке
        }
    }
);
