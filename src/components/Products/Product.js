import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../../assets/css/Styles.css";


const styles = {
  fontSize: "15px",
  color: "red",
};

export const Product = ({ item }) => {
  const { title, image, price } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
            <div className="global-text" style={styles}> {title} </div>
        </Col>
        <Col xs={4}>
            <Button variant="primary">
                Precio <Badge bg="secondary">{price}</Badge>
                <span className="visually-hidden">unread messages</span>
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
