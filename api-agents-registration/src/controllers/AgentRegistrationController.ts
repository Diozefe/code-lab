import { Request, Response } from "express";
import { auth } from "../config/settings";
import { INewAgent } from "../interfaces/IAgent";
import AgentService from "../services/AgentService";
import { BaseController } from "./BaseController";
import jwt from "jsonwebtoken";
import * as carrier from "../utils/Carrier";

export default class AgentRegistrationController extends BaseController{
    
    async handle(request: Request, response: Response) {
        try {
            const body:INewAgent = request.body;
            
            carrier.setCarrier(request.userId);

            const service = new AgentService();
            const result = await service.create(body);

            if(result instanceof Error){
                return response.status(400).json({message: result.message});
            }
            result.password = undefined;

            const token = jwt.sign({id: result.id }, auth.key, { expiresIn: '1d' });

            response.cookie('authCookie',token,{maxAge: 1000 * 60 * 60 * 24, httpOnly: true});

            return response.status(201).json(result);
            
        } catch (error) {
            console.log(error);
            return response.status(500);
        }
    }
}