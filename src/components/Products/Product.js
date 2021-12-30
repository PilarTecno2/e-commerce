import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../../assets/css/Styles.css";
import db from "../../app/db/db";
import { saveLastIterestProduct } from "../../app/service/storeageService";


const styles = {
  fontSize: "15px",
  color: "red",
};

export const Product = ({ item }) => {
  const { title, image, price } = item;
  
  const addProductCart = (product) =>{
    db.cart.add({
      title: product.title,
      price: product.price,
      category: product.category
    })
  } 
  
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
            <div className="global-text" style={styles}> {title} </div>
        </Col>
        <Col>
          <Button variant="warning" onClick={() => addProductCart(item)}>  Agregar al carrito </Button>
        </Col>
        <Col >
          <Button  onClick={ () => saveLastIterestProduct(title) } variant="primary">
              Precio <Badge bg="secondary"> {price} </Badge>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img className="img-product" alt="productImage" src={image}></img>
        </Col>
      </Row>
    </Col>
  );
};
