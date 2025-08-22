import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from '../controllers/user.controller.js';
import { predict } from "../controllers/predict.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/recommend", verifyJWT, predict); // Protected route

export default router;
