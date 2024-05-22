import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    count: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc: (state) => {
            // state.count++;
            state.count = state.count + 1;
        },
        dec: (state) => {
            state.count--;
        },
        reset: (state) => {
            state.count = 0
        }
    }
})
export var { inc, dec, reset } = counterSlice.actions;
export default counterSlice.reducer