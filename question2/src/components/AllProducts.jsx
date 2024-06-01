import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/fetchData';
import { Card, CardContent, Typography, Grid,  CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = ({ categoryname }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                
                const data = await fetchProducts(categoryname, { top: 10,minPrice:1,maxPrice:1000,sortBy:'price',sortOrder:'asc' });
                setProducts(data.products);
                setLoading(false);
            } catch (error) {
                console.error('Error loading products:', error);
            }
        };

        loadProducts();
    }, [categoryname]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea component={Link} to={`/categories/${categoryname}/products/${product.id}`}>
                           
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.productName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: ${product.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: {product.rating}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
