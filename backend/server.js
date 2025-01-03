import express from "express";
import dotenv from "dotenv";
import cookieParser  from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"

const app=express();
dotenv.config();

const PORT=process.env.PORT || 5000;



app.use(express.json());
app.use(cookieParser());

app.use("/auth",authRoutes);


app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));