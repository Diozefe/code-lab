import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRoutes = Router();

authRoutes.post('/', new AuthController().handle);

export { authRoutes }