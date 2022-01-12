import React, {useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import { Product } from "./Product";
import {getAllProducts} from "../../app/service/productCartServices";

export const ListProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts() 
     .then(data => setProducts(data))
  },[])

  return (
    <Row xs={4}>
      {products.length < 0 ? (
        <div>
          <p>Cargando productos ...</p>
        </div>
      ):(
        products.map((product, index) => < Product key={index} item={product} />)
      )}
    </Row>
  )
};

// esta es otra alternativa en return de como hacerlo
// { products.map((product, index) => <Product key={ index } title={ product.title } image={product.image}/>) }

// NOTA SIEMPRE PRESTAR ESPECIAL ATENCION EN LAS MAYUSCULAS DE COL Y ROW.
