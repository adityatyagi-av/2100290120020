import express from "express";
import { ProductRouter } from "./routes/product_routes.js";
import cors from "cors"

export const app=express();
app.use(cors())
app.use('/categories', ProductRouter);

app.all("*", (req,res,next) => {
    const err = new Error(`Route ${req.originalUrl} not found`) ;
    err.statusCode = 404;
    next(err);
  });