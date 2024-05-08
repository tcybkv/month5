import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCard = createAsyncThunk("getCard", async (_, { dispatch }) => {
    try {
        dispatch(loadingTurnedOn());
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.status >= 200 || response.status <= 204) {
            const data = await response.json();
            dispatch(getCardData(data));
        }
    } catch (error) {
        throw error;
    } finally {
        dispatch(loadingTurnedOff());
    }
});

export const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        cards: [],
        loading: false,
    },
    reducers: {
        loadingTurnedOff: (state) => {
            state.loading = false;
        },
        loadingTurnedOn: (state) => {
            state.loading = true;
        },
        getCardData: (state, action) => {
            state.cards = action.payload;
        },
    },
})

export const { loadingTurnedOff, loadingTurnedOn, getCardData } = cardSlice.actions
export default cardSlice.reducer