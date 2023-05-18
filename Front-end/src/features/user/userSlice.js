import {createSlice} from '@reduxjs/toolkit';
import {putProfile, loginUser, getProfile} from './userApi';

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token: localStorage.getItem("authToken")
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
    }
})
export const {setToken} = tokenSlice.actions;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        isLoading: false,
        token: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
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
    },
});


const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        isLoading: false,
        error: null,
        profile: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(putProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(putProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.profile = action.payload;
            })
            .addCase(putProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

const getUserSlice = createSlice({
    name: 'userInfos',
    initialState: {
        isAuthenticated: false,
        isLoading: false,
        error: null,
        profileInfos: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.profileInfos = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export {authSlice, tokenSlice, userSlice, getUserSlice}

