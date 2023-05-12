import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";
import {setToken} from "./userSlice";

const baseUrl = 'http://localhost:3001/api/v1';

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        const response = await axios.post(`${baseUrl}/user/login`, user.payload);
        const data = await response.data;
        if (data.status === 200) {
            localStorage.setItem("authToken", data.body.token);
            const authToken = localStorage.getItem("authToken");
            thunkAPI.dispatch(setToken(authToken));
        }
        return data
    }
);

export const putProfile = createAsyncThunk(
    'user/putProfile',
    async (data) => {
        const headers = {
            'accept': 'application/json',
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json'
        };
        try {
            const response = await axios.put(`${baseUrl}/user/profile`, {
                "firstName": data.user.firstName,
                "lastName": data.user.lastName
            }, {headers});
            return await response.data;
        } catch (error) {
            console.log('Erreur lors de la requête POST', error);
            throw error;
        }
    }
);

export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (token) => {

        const headers = {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        try {
            const response = await axios.post(`${baseUrl}/user/profile`, {}, {headers});
            const rawData = await response.data;
            return {
                id: rawData.body.id,
                firstName: rawData.body.firstName,
                lastName: rawData.body.lastName,
                email: rawData.body.email
            };
        } catch (error) {
            console.log('Erreur lors de la requête POST', error);
            throw error;
        }
    }
);
