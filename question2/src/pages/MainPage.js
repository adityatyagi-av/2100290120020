import React from 'react';

import { Container, Typography } from '@mui/material';
import ProductList from '../components/AllProducts';

const HomePage = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Top Products
            </Typography>
            <ProductList categoryname="Laptop" />
        </Container>
    );
};

export default HomePage;
