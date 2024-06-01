import express from 'express';
import { GetProductById, GetProducts } from '../controllers/product_controller.js';
export const ProductRouter = express.Router();
ProductRouter.get('/:categoryname/products',GetProducts);
ProductRouter.get('/:categoryname/products/:productid',GetProductById);

