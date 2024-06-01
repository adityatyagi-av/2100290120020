import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import getToken from "../utils/authorization.js"
const BASE_URL = 'http://20.244.56.144/test';
const COMPANIES = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];



//get all products function 
export const getProducts = async (categoryname, top = 10, minPrice = 0, maxPrice = Infinity, page = 1, sortBy, sortOrder) => {
    const allProducts = [];
    const limit = parseInt(top, 10);
    const token = await getToken();
    for (const company of COMPANIES) {
        const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${categoryname}/products`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { top: limit, minPrice, maxPrice }
        });
        response.data.forEach(product => {
            product.id = uuidv4();
            product.company = company;
        });
        allProducts.push(...response.data);
    }

    // Sorting logic
    if (sortBy) {
        allProducts.sort((a, b) => {
            if (sortOrder === 'desc') {
                return b[sortBy] - a[sortBy];
            }
            return a[sortBy] - b[sortBy];
        });
    }

    // Pagination logic
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return allProducts.slice(startIndex, endIndex);
};

export const getProductById = async (categoryname, productid) => {
    const allProducts = [];
    const token = await getToken();
    for (const company of COMPANIES) {
        const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${categoryname}/products`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { top: 100 }
        });
        response.data.forEach(product => {
            product.id = uuidv4();
            product.company = company;
        });
        allProducts.push(...response.data);
    }

    return allProducts.find(product => product.id === productid);
};

