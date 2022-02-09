import {  Router } from "express";
import AgentRegistrationController from "../controllers/AgentRegistrationController";
import DeleteAgentController from "../controllers/DeleteAgentController";
import GetAgentByFieldController from "../controllers/GetAgentByFieldController";
import GetAgentController from "../controllers/GetAgentController";
import UpdateAgentController from "../controllers/UpdateAgentController";

const agentRoutes = Router();

agentRoutes.get('/agents', new GetAgentController().handle);
agentRoutes.post('/agents', new AgentRegistrationController().handle);
agentRoutes.delete('/agents', new DeleteAgentController().handle);
agentRoutes.get('/agents/:agentId', new GetAgentByFieldController().handle);
agentRoutes.put('/agents/:agentId', new UpdateAgentController().handle);
agentRoutes.delete('/agents/:agentId', new DeleteAgentController().deleteOne);

export { agentRoutes }