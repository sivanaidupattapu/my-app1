import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './arayslice';

function Arrayevent() {
    var dispatch = useDispatch();
    var randomcolor = useSelector((state) => state.color.bgcolor);
    console.log("randomcolor ::",randomcolor)
    return (
        <div>
            <div className="d-flex justify-content-center m-1">
                <div className="w-25 border border-2 border-dark"
                    style={{ height: "100px", backgroundColor: randomcolor }}></div>
            </div>
            <div className="text-center">
                <button className="btn btn-sm btn-primary m-1"
                    onClick={() => dispatch(changeColor())}>
                    Random colors
                </button>
            </div>
        </div>
    );
}

export default Arrayevent;
