import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todos: ['Siva', 'Ravi', 'Sai', 'Raju', 'Madan', 'Teja']
}
export const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})
export const {addTodo} =todolistSlice.actions;
export default todolistSlice.reducer