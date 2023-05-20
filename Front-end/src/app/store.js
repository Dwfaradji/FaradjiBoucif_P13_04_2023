import { configureStore } from "@reduxjs/toolkit";
import {
  authSlice,
  getUserSlice,
  tokenSlice,
  userSlice,
} from "../features/user/userSlice";

/* This code is creating a Redux store using the `configureStore` function from the `@reduxjs/toolkit`
library. The store has four reducers defined under the `reducer` key: `token`, `auth`, `user`, and
`infosUser`. Each reducer is created using the `reducer` function from a corresponding slice file
(`tokenSlice.reducer`, `authSlice.reducer`, `userSlice.reducer`, and `getUserSlice.reducer`). These
reducers will handle the state updates for the corresponding parts of the application state. The
resulting store object is exported as the default export of the module. */
const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
    infosUser: getUserSlice.reducer,
  },
});

export default store;
