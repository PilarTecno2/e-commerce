import React from "react";
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";


// esto es un return inplisito solo se aplica cuando no tiene funcionalidades de js sino mas bien que es algo visual.
// esto se exporto nombrado para poder poner headerapp en el app.js.
export const HeaderApp = () => (
    <Navbar>
        <Container>
            <Row>
                <Col xs = {12}>
                    <div> Mini Ecommerce </div>
                </Col>
            </Row>
            <ShoppingCart/>
        </Container>
    </Navbar>
);
































