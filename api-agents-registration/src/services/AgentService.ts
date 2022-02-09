import { queryAgent } from "../database/querys";
import AgentMessageError from "../error/AgentMessageError";
import { IAgent, INewAgent } from "../interfaces/IAgent";
import * as carrier from "../utils/Carrier";

interface GetAgents {
    field:string;
    value:string|number
}

interface UpdateAgentFields extends IAgent { }

export default class AgentService{
    constructor(){}

    async create({ name, login, password, medias }:INewAgent): Promise<IAgent | Error>{

        const domainAgent = await queryAgent.findByField('id', carrier.getCarrier());
        
        if(domainAgent instanceof Error){
            return domainAgent;
        }

        const toSave = {
            name,
            login,
            password,
            medias,
            domain: domainAgent.domain
        }

        carrier.clearCarrier();
        
        const result = await queryAgent.create(toSave);

        if(result instanceof Error){
            return result;
        }
        
        return result;

    }
    /**
     * 
     * @param options if 'field' option is passed, you need to pass its value in 'value'. 
     * @returns List Agent
     */
    async getAgents(options?:GetAgents){
        try {
            if(options){
                const {field, value} = options;
                const result = await queryAgent.find({field:field, value: value});
                if(result instanceof Error){
                    return result;
                }
                return result;
            }

            const result = await queryAgent.find();

            if(result instanceof Error){
                return result;
            }
            return result;

        } catch (error) {
            return new Error(error.message);
        }
    }

    async getAgentByField(field:string, value:string){
        try {
            if(!field && !value){
                return new Error(new AgentMessageError().voidField);
            }else{
                const result = await queryAgent.findByField(field, value);
                if(result instanceof Error){
                    return result;
                }
                return result;
            }
        } catch (error) {
            return new Error(error.message);
        }
    }

    async deleteByLogin(login:string):Promise<void | Error>{
        try {
            if(!login) return new Error(new AgentMessageError().voidField);
            
            const result = await queryAgent.delete('login', login);
            
            
            if(result instanceof Error){
                return result;
            }

            return

        } catch (error) {
            return new Error(error.message);
        }
    }

    async deleteByField(field:string, value:string):Promise<void | Error>{
        try {
            if(!value && !field) return new Error(new AgentMessageError().voidField);
            
            const result = await queryAgent.delete(field, value);            
            
            if(result instanceof Error){
                return result;
            }

            return

        } catch (error) {
            return new Error(error.message);
        }
    }

    async getAgentById(id:string){
        try {
            if(!id){
                return new Error(new AgentMessageError(`O campo id é obrigatório`).message)
            }
            const result = await queryAgent.findByField('id', id);
            if(result instanceof Error){
                return result;
            }
            return result;

        } catch (error) {
            return new Error(error.message);
        }
    }
    
    async updateAgent(id:string, fields?:UpdateAgentFields){
        try {
            if(!fields){
                return new Error(new AgentMessageError(`É necessário passar os campos para atualizar`).message)
            }

            const agentUpdated = await queryAgent.update(id, fields);

            if(agentUpdated instanceof Error){
                return agentUpdated;
            }

            return agentUpdated;

        } catch (error) {
            return new Error(error.message);
        }
    }
}