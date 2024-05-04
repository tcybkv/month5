import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './PostSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});
