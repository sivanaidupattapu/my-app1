import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todos: ['Siva', 'Ravi', 'Teja']
}
export const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        delTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})
export const {addTodo,delTodo} =todolistSlice.actions;
export default todolistSlice.reducer