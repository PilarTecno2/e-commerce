import React from "react";
import { Row } from "react-bootstrap";
import json from "../../examples/products.json";
import { Product } from "./Product";

export const ListProducts = () => {
  const products = json.products;

  return (
    <Row>
      {products.map((product, index) => (
        <Product key={index} item={product} />
      ))}
    </Row>
  );
};

// esta es otra alternativa en return de como hacerlo
// { products.map((product, index) => <Product key={ index } title={ product.title } image={product.image}/>) }

// NOTA SIEMPRE PRESTAR ESPECIAL ATENCION EN LAS MAYUSCULAS DE COL Y ROW.
