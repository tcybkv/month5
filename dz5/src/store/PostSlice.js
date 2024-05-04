import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "fetchUsers",
    async (_, { dispatch }) => {
        try {
            dispatch(isLoadingOn());
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (response.status >= 200 && response.status <= 204) {
                const data = await response.json();
                dispatch(getUsers(data));
            }
        } catch (error) {
            throw error;
        } finally {
            dispatch(isLoadingOff());
        }
    }
);

export const postSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: 'idle',
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
            state.status = 'idle'
        },
        isLoadingOff: (state) => {
            state.status = 'idle'
        },
        isLoadingOn: (state) => {
            state.status = 'Загружаем😁'
        },
    },
});

export const { getUsers, isLoadingOff, isLoadingOn } = postSlice.actions
export default postSlice.reducer
