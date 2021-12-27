import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartItem';

export const ShoppingCart = () => {

    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Carrito" id="basic-nav-dropdown">
                   <ShoppingCartItem/>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </>
    );
};