import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import { agentRoutes } from "./agent.routes";
import { authRoutes } from "./auth.routes";
import { healthyRoutes } from "./healthy.routes";

const routesApp = Router();


routesApp.use('/public', authMiddleware, agentRoutes);
routesApp.use('/auth', authRoutes);
routesApp.use('/healthy', healthyRoutes);

export { routesApp };