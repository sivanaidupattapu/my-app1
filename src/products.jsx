import axios from "axios";
import React, { useEffect, useState } from "react";
function Product() {
    var [products, setProducts] = useState([])
    var [selectproduct, setSelectproduct] = useState([])
    useEffect(() => {
        // fetch("https://fakestoreapi.in/api/products")
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {setProducts(data.products) })
        //     })
        axios.get("https://fakestoreapi.in/api/products")
            .then((res) => {
                var temp = res.data.products.map((t) => { return { ...t, status: false } })
                setProducts(temp)
                console.log(temp)
            })
    }, [])
    function expand(id) {
        var temp = products.map((p) => {
            if(p.id===id){p.status=!p.status}
            return p
         })
         setSelectproduct(temp)
         console.log(selectproduct)
        }
    return <div>
        <h2>E-cart</h2>
        {
            products?.map((p, i) => {
                return <div key={i} className="p-1">
                    <li className="bg-success text-light p-2 m-1">
                        {p.title}
                        <i class={p.status?"bi bi-dash-circle":"bi bi-plus-circle"} onClick={() => { expand(p.id) }}></i>
                        {
                            p.status && (
                            <div>
                            <h2>Product details</h2>
                            <img src={p.image} alt="" style={{ width: '75px' }} />
                        </div>
                            )
                        }
                    </li>
                </div>
            })
        }
    </div>
}
export default Product