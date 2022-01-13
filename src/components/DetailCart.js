import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../app/service/productCartServices";

export const DetailCart = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((allProductsFromDB) => setProducts(allProductsFromDB))
    },[])

  return (
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITULO</th>
                <th>CATEGORIA</th>
                <th>PRESIO</th>
            </tr>
        </thead>
        <tbody>
            { products.length > 0 && 
                products.map((product, index) => (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                </tr>
            ))}
        </tbody>
    </Table>
  );
};
 