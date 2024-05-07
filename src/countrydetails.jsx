import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function CountryDetails() {
    let { cname } = useParams()
    let [cdetail,setCdetail]=useState(null)
    useEffect(() => {
        fetch(`https://restcountries.com/v3/name/${cname}`)
            .then(res => {
                res.json()
                .then(data => {
                    console.log(data)
                    setCdetail({...data[0]})
                })
            })
    },[cname])
    return <div className="border border-2 border-success p-3" style={{height:'300px'}}>
        <h6 className="text-danger">Country Details</h6>
        <div>
        <img src={(cdetail)?.flags[0]} alt="" width='100px' />
          <h4>Name : {(cdetail)?.name?.common}</h4>
          <h4>Capital : {(cdetail)?.capital}</h4>
          <h4>Continent : {(cdetail)?.continents}</h4>
          <h4>Region : {(cdetail)?.region}</h4>
          <h4>Population : {(cdetail)?.population}</h4>

        </div>
    </div>
    
}
export default CountryDetails