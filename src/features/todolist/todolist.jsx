import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistslice";
import { useState } from "react";
function Todo() {
    let [newtodo,setNewtodo]=useState('')
    var {todos} = useSelector(state => state.todolistReducer)
    var dispatch=useDispatch()
    console.log({todos})
    console.log('newtodo :',newtodo)
    return <div className="border border-2 border-success p-2 m-1">
        <h2 className="text-info-emphasis">Todolist Component</h2>

        <div>
            <input type="text"  onChange={(e)=>{setNewtodo(e.target.value)}}/>
            <button className="btn btn-info m-1" onClick={()=>{dispatch(addTodo(newtodo))}}>Add Todo</button>
            {
                todos?.map((list) => {
                    return <li>{list}</li>
                })
            }
        </div>
    </div>
}
export default Todo