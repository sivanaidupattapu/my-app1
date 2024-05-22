import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, reset } from "./counterslice";
function Counter() {
    var { count } = useSelector(state => state.counterReducer)
    var dispatch = useDispatch();
    console.log('count :',{ count })
    return <div className="text-center border border-2 border-warning p-2 m-1">
        <h1 className="text-danger" >Counter Component</h1>
        <h2 className="text-dark">Counter : {count}</h2>
        <button className="btn btn-success m-1" onClick={() => { dispatch(inc()) }}>Increment</button>
        <button className="btn btn-danger m-1" onClick={() => { dispatch(dec()) }}>Decrement</button>
        <button className="btn btn-warning m-1" onClick={() => { dispatch(reset()) }}>Reset</button>
    </div>
}
export default Counter