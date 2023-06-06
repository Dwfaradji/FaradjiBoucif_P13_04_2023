import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
const setToken = userSlice.actions.setToken;

/*
*   This code is creating a constant called `baseUrl` that contains the base URL for the API.
* */
const baseUrl = "http://localhost:3001/api/v1";

/* This code is creating an asynchronous thunk function called `loginUser` that will handle the login
process for a user. It takes two arguments: `user` and `thunkAPI`. */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    const response = await axios.post(`${baseUrl}/user/login`, user.payload);
    const data = await response.data;
    /*
    *   If the login is successful, the server will send back a response with a status code of 200
    *  and a body that contains the user's authentication token. The code below extracts the token
    * from the response and stores it in local storage. It then dispatches the `setToken` action
    * with the token as an argument. This action will update the state with the token.
    * */
    if (data.status === 200) {
      localStorage.setItem("authToken", data.body.token);
      const authToken = localStorage.getItem("authToken");
      thunkAPI.dispatch(setToken(authToken));
    }
    return data;
  }
);

/* This code is creating an asynchronous thunk function called `putProfile` that will handle updating
the user's profile information. It takes one argument: `data`, which contains the user's updated
first and last name as well as their authentication token. */
export const putProfile = createAsyncThunk("userInfos/putProfile", async (data) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${data.token}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.put(
      `${baseUrl}/user/profile`,
      {
        firstName: data.user.firstName,
        lastName: data.user.lastName,
      },
      { headers }
    );
    console.log(response.data)
    return await response.data;
  } catch (error) {
    console.log("Erreur lors de la requête POST", error);
    throw error;
  }
});

/* This code is creating an asynchronous thunk function called `getProfile` that will handle retrieving
the user's profile information. It takes one argument: `token`, which is the user's authentication
token. The function sends a POST request to the server with the token in the headers to authenticate
the user. If the request is successful, the function extracts the relevant data from the response
and returns it. If there is an error, the function logs the error and throws it. */
export const getProfile = createAsyncThunk("user/getProfile", async (token) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(
      `${baseUrl}/user/profile`,
      {},
      { headers }
    );
    const rawData = await response.data;
    return {
      id: rawData.body.id,
      firstName: rawData.body.firstName,
      lastName: rawData.body.lastName,
      email: rawData.body.email,
    };
  } catch (error) {
    console.log("Erreur lors de la requête POST", error);
    throw error;
  }
});
