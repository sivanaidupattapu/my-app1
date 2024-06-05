import { configureStore } from '@reduxjs/toolkit';
import colorReducer from '../features/array/arayslice';

export const store = configureStore({
  reducer: {
    color: colorReducer
  }
});
