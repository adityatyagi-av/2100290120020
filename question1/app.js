import express from "express";
export const app=express();


app.get("/test", (req ,res, next) => {
    res.status(200).json({
      succcess: true,
      message: "API is working",
    });
  });
  

app.all("*", (req,res,next) => {
    const err = new Error(`Route ${req.originalUrl} not found`) ;
    err.statusCode = 404;
    next(err);
  });
  
