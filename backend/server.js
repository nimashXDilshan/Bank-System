import express from "express";
import dotenv from "dotenv";
import cookieParser  from "cookie-parser";
import cors from 'cors';


import authRoutes from "./routes/authRoutes.js"

const app=express();
dotenv.config();

const PORT=process.env.PORT || 5000;


app.use(
    cors({
      origin: "http://localhost:5173", // Replace with your frontend's URL
      credentials: true, // Allow cookies to be sent
    })
  );
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);


app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));