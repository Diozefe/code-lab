import { Request, Response } from "express";
import { IAgent } from "../interfaces/IAgent";
import AgentService from "../services/AgentService";
import { BaseController } from "./BaseController";

export default class UpdateAgentController extends BaseController{
    async handle(request: Request, response: Response) {
        try {
            const { agentId } = request.params;
            const body = request.body as IAgent;

            if(body.password){
                return response.status(400).json({
                    message: new Error('O campo senha foi passado, mas não faz referência nesta rota.')
                });
            }

            const service = new AgentService();

            const result = await service.updateAgent(agentId, body);

            if(result instanceof Error){
                return response.status(400).json({message: result.message});
            }

            return response.json(result);

        } catch (error) {
            console.log(error);
            return response.sendStatus(500);
        }
    }
}