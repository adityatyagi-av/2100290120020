import express from "express";
import { ProductRouter } from "./routes/product_routes.js";
export const app=express();
app.use('/categories', ProductRouter);
app.all("*", (req,res,next) => {
    const err = new Error(`Route ${req.originalUrl} not found`) ;
    err.statusCode = 404;
    next(err);
  });