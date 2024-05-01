import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0
    },
    reducers: {
        increment: (state, action) => {
            state.number += action.payload;
        },
        decrement: (state, action) => {
            state.number -= action.payload;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
