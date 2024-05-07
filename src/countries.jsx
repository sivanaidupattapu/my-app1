import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Country() {
    let [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then((res) => {
            res.json().then((data) => {
                console.log(data)
                setCountry([...data])
            })
        })
    }, [])
    return <div className='border border-2 border-info p-2 d-flex flex-wrap'>
        <h2 className='text-danger-emphasis w-100 text-center'>Countrys</h2>
        <div className="w-50 border border-2 border-warning p-2 ">
            {
                country?.map((c, i) => {
                    return <li key={i} className="list-unstyled p-2">
                        <div>
                        <Link to={`countrydetails/${c.name.common}`}>{c.name.common}</Link>
                        </div>
                        </li>
                })
            }
        </div>
            <Outlet></Outlet>
    </div>
}
export default Country