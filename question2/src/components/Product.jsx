import React, { useState, useEffect } from 'react';
import { fetchProductById } from '../api/fetchData';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetails = () => {
    const { categoryname, productid } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await fetchProductById(categoryname, productid);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error loading product details:', error);
            }
        };

        loadProduct();
    }, [categoryname, productid]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://via.placeholder.com/140?text=${product.productName}`}
                alt={product.productName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Company: {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {categoryname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Availability: {product.availability}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetails;
