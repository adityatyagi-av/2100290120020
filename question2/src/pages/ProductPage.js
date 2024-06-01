import React from 'react';
import ProductDetails from '../components/Product.jsx';
import { Container, Typography } from '@mui/material';

const ProductPage = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Product Details
            </Typography>
            <ProductDetails />
        </Container>
    );
};

export default ProductPage;
