import {createSlice} from '@reduxjs/toolkit';
import {putProfile, loginUser, getProfile} from './userApi';

/* This code is creating a Redux slice called `tokenSlice` using the `createSlice` function from the
`@reduxjs/toolkit` library. */

const userSlice = createSlice({
    name: 'userInfos',
    initialState: {
        isAuthenticated: false,
        isLoading: false,
        error: null,
        profileInfos: null,
        profile: null,
        token: localStorage.getItem("authToken")
    },
    reducers: {
        /*Token*/
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            /*GET*/
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profileInfos = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            /*PUT*/
            .addCase(putProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(putProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
            })
            .addCase(putProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            /*LOGIN*/
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.token = action.payload.body.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export {userSlice}

