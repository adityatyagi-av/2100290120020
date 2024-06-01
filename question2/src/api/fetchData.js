import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const fetchProducts = async (categoryname, params) => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/${categoryname}/products`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (categoryname, productid) => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/${categoryname}/products/${productid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};
