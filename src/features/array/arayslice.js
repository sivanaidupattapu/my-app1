import { createSlice } from '@reduxjs/toolkit';

const colors = ["red", "green","grey", "blue", "yellow", "purple","orangered","white","skyblue","black"];

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    bgcolor: ''
  },
  reducers: {
    changeColor: (state) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      state.bgcolor = randomColor;
    }
  }
})  
export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;