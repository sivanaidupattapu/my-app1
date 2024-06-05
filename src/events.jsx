import React, { useState } from "react";
function Eventactions() {
    var [newcolor, setNewcolor] = useState('')
    function changecolor(color) {
        setNewcolor(color)
    }
    return <div>
        <div className="d-flex justify-content-center p-2">
            <div className="w-25 border border-2 border-dark"
                style={{ height: "100px", backgroundColor: newcolor }}></div>
        </div>
        <div className="text-center">
            <button onClick={() => { changecolor('red') }} className="btn btn-sm btn-danger m-1">Red</button>
            <button onClick={() => { changecolor('skyblue') }} className="btn btn-sm btn-primary m-1">Blue</button>
            <button onClick={() => { changecolor('orange') }}
                className="btn btn-sm m-1" style={{ backgroundColor: 'orange' }}>Orange</button>
            <button onClick={() => { changecolor('purple') }}
                className="btn btn-sm text-light m-1" style={{ backgroundColor: 'purple' }}>Purple</button>
            <button onClick={() => { changecolor('yellow') }} className="btn btn-sm btn-warning m-1">Yellow</button>
            <button onClick={() => { changecolor('green') }} className="btn btn-sm btn-success m-1">Green</button>
            <button onClick={() => { changecolor('white') }} className="btn btn-sm btn-secondary m-1">Reset</button>
            <button onClick={() => { changecolor('orangered') }}
                className="btn btn-sm text-light m-1" style={{ backgroundColor: 'orangered' }}>Orangered</button>

        </div>
    </div>
}
export default Eventactions