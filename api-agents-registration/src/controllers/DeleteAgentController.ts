import { Request, Response } from "express";
import AgentService from "../services/AgentService";
import { BaseController } from "./BaseController";


export default class DeleteAgentController extends BaseController{
    async handle(request: Request, response: Response) {

        try {
            const { login } = request.query;
    
            const service = new AgentService();
    
            const result = await service.deleteByLogin(login.toString());

            if(result instanceof Error){
                return response.status(400).json({message: result.message});
            }
            
            return response.sendStatus(200);

        } catch (error) {
            console.log(error);
            return response.sendStatus(500);
        }

    }

    async deleteOne(request: Request, response: Response){
        try {
            const { agentId } = request.params;
    
            const service = new AgentService();
    
            const result = await service.deleteByField('id', agentId);

            if(result instanceof Error){
                return response.status(400).json({message: result.message});
            }
            
            return response.sendStatus(200);

        } catch (error) {
            console.log(error);
            return response.sendStatus(500);
        }
    }
}