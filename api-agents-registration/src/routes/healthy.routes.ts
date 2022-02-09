import { Router } from "express";
import ConnectionDB from "../database/connection";

const healthyRoutes = Router();

healthyRoutes.get('/', (req, res)=>{
    try {
        const db = new ConnectionDB();
        
        db.connect();
        db.disconect();

        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

export { healthyRoutes }