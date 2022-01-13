import React,{ useEffect,useState } from "react";
import { getProductById } from "../app/service/productCartServices"

export const ProductView = ( {match} ) => {

    const [productDetail, SetProductDetail] = useState(null);

    useEffect(() => {
        const { id } = match.params // aqui hice destructurin para sacar los params
        getProductById(id)
            .then((productFromDB) => SetProductDetail(productFromDB))
            .catch((err) => console.log(err)) 
    },[match]);

    return (
        <div>
            <h1> {productDetail && JSON.stringify(productDetail)} </h1>
        </div>

    )
}