import React, { useEffect, useState }  from 'react';
import db from '../../app/db/db';
import { useLiveQuery } from 'dexie-react-hooks';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartItem';
import { Link } from 'react-router-dom';

export const ShoppingCart = () => {

    const [productsCart, setProductCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    
    const getTotalPrice = () => {
       const total = productsCart?.reduce((totalPrice, currentProduct) => {
           return totalPrice + currentProduct.price
        },0)
       setTotalPrice(total)
    }

    useLiveQuery(async () => {
        const productsDB = await db.cart.toArray()
        setProductCart(productsDB)
    },[])

    useEffect(() => {
        if (productsCart.length > 0 ) {
            getTotalPrice()
        }
    }, [productsCart])

    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Carrito" id="basic-nav-dropdown"
            >
                {productsCart?.map((product) => {return <ShoppingCartItem key={product.id} item={product} />})}
                <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={"/purchase"}>
                            Total: ${totalPrice}
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </> 
    );
};