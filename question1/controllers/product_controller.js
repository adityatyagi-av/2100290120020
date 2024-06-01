import {getProducts, getProductById } from "../services/product_services.js"
export async function GetProducts(req, res) {
    const { categoryname } = req.params;
    const { top, minPrice, maxPrice, page = 1, sortBy, sortOrder } = req.query;

    try {
        const products = await getProducts(categoryname, top, minPrice, maxPrice, page, sortBy, sortOrder);
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export async function GetProductById (req, res) {

    const { categoryname, productid } = req.params;

    try {
        const product = await getProductById(categoryname, productid);
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

