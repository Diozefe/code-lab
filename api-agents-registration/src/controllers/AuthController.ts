import { Request, Response } from "express";
import AgentService from "../services/AgentService";
import jwt from "jsonwebtoken";
import { auth } from "../config/settings";
import bcrypt from "bcryptjs";

interface IAuth{
    login: string;
    password: string;
}
export default class AuthController{
    async handle(request: Request, response: Response) {

        try {
            const { login, password }:IAuth = request.body;
            const service = new AgentService();
            const agent = await service.getAgentByField('login',login);
    
            if(agent instanceof Error){
                return response.status(400).json({message: 'Login inválido'});
            }
    
            if(!agent){
                return response.sendStatus(401);
            }
            const isValidPassword = bcrypt.compare(password, new String(agent.password).toString()) 
    
            if(!isValidPassword){
                return response.sendStatus(401);
            }
            const token = jwt.sign({id: agent.id }, auth.key, { expiresIn: '1d' });
            
            agent.password=undefined;

            return response.json({
                agent,
                token
            })
            
        } catch (error) {
            console.log(error)
            return response.sendStatus(500).json({message: error.message});
        }
    }
}