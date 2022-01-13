import React from 'react';
import { ListProducts } from '../components/Products/Listroducts';
import { AlertProducts } from '../components/Products/AlertProduct';
import { Container } from 'react-bootstrap';

export const Home = () => (
    <Container>
        <div className="App">
            <AlertProducts/>
            <ListProducts />
        </div>
  </Container>
);