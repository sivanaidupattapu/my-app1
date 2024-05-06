import React, { useEffect, useState } from "react";
function Country() {
    let [countrys, setCountrys] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then((res)=>{
            res.json().then((data)=>{
                setCountrys([...data])
            })
        })
    },[])
    return <div className='border border-2 border-info p-2'>
        <h2>Countries</h2>
        <div>
            {
                countrys?.map((c)=>{return <li>{c.name.common}</li> })
            }
        </div>
    </div>
}
export default Country