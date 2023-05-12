import { configureStore } from '@reduxjs/toolkit';
import {authSlice, getUserSlice, tokenSlice, userSlice} from "../features/counter/counterSlice";

const store = configureStore({
    reducer: {
        token: tokenSlice.reducer,
        auth: authSlice.reducer,
        user:userSlice.reducer,
        infosUser:getUserSlice.reducer
    },
});

export default store;

