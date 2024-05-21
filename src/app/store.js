import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import todolistReducer from '../features/todolist/todolistslice'
export const store = configureStore({
  reducer: { counterReducer,todolistReducer },
})