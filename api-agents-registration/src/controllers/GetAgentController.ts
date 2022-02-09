import { Request, Response } from "express";
import AgentService from "../services/AgentService";
import { BaseController } from "./BaseController";

export default class GetAgentController extends BaseController{
    async handle(request: Request, response: Response) {
        
        try {
            const stateValue = request.query.state;
            
            const service = new AgentService();
            if(stateValue){
                const result = await service.getAgents({field:'state',value:stateValue.toString()}); 
                if(result instanceof Error){
                    return response.status(400).json(result);
                }
                return response.json(result);
            }
    
            const result = await service.getAgents(); 
                if(result instanceof Error){
                    return response.status(400).json(result);
                }
            return response.json(result);
            
        } catch (error) {
            console.log(error);
            return response.sendStatus(500);
        }

    }
}