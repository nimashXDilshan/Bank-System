import express from "express";

import  {login,logout} from "../controllers/authControllers.js"
import {authenticateToken} from "../middleware/authMiddleware.js" 

const  router =express.Router();

router.post("/login",login);

router.post("/logout",authenticateToken,logout);

export default router;
