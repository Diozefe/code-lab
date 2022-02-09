import { Request, Response } from "express";
import AgentService from "../services/AgentService";
import { BaseController } from "./BaseController";

export default class GetAgentByFieldController extends BaseController{
    async handle(request: Request, response: Response) {
        try {
            const { agentId } = request.params;
            const service = new AgentService();
            const result = await service.getAgentById(agentId);

            if(result instanceof Error){
                return response.status(400).json({message:result.message});
            }

            return response.json(result);
        } catch (error) {
            return response.sendStatus(500);
        }
    }
}