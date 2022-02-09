import { IAgent, INewAgent } from "../interfaces/IAgent";
import { AgentModel } from "../schemas/agentSchema";
import bcrypt from "bcryptjs";
import { MediasModel } from "../schemas/mediasSchema";
import { getDateNow } from "../utils/date";
import {Types} from "mongoose";
import AgentMessageError from "../error/AgentMessageError";

type FindAgentsWithField = {
    field:string;
    value:string|number;
}

export const queryAgent = {
    async create(object:INewAgent):Promise<IAgent | Error>{
        const { name, login, password, medias } = object;

        try {

            const agentExists = await AgentModel.findOne({login: login})

            if(agentExists){
                return new Error(new AgentMessageError().exists);
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(`${name}${password}`, salt);
            
            const mediasModel = new MediasModel(medias);
            const mediasCreated = await mediasModel.save();
            
            const agentModel = new AgentModel({
                id: new Types.ObjectId(),
                name,
                login,
                password: hash,
                medias: mediasCreated.id,
                createdAt:getDateNow()
            });
            await agentModel.save();
            
            const agentCreated = await AgentModel.findById(agentModel._id).populate("medias");
            return agentCreated?agentCreated:new Error(new AgentMessageError().message);

        } catch (err) {
            throw new Error(err.message);
        }
    },

    async findByField(field: string, value:any): Promise<IAgent | Error>{
        try {
            const result = await AgentModel.findOne({[field]:value}).populate('medias');
            if(result){
                result._id = undefined;
                return result;
            }else{
                return new Error(new AgentMessageError().notData);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async find(findOptions?:FindAgentsWithField):Promise<IAgent[]>{
        try {
            if(findOptions){
                const {field, value} = findOptions;
                const result = await AgentModel.find({[field]:value}).populate('medias');
                return result.length > 0 ? result :[];
            }
            const result = await AgentModel.find().populate('medias');
            return result.length > 0 ? result :[];

        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(field:string, value:string):Promise<void|Error>{
        try {
            
            const result = await AgentModel.findOne({[field]:value});
            
            if(!result){
                return new Error(new AgentMessageError().notFound) 
            }
            
            await AgentModel.deleteOne({[field]:value});
            //@ts-ignore
            await MediasModel.deleteOne({_id:result.medias._id});
            
            return


        } catch (error) {
            throw new Error(error.message)
        }
    },

    async update(id:string, fields:IAgent):Promise<IAgent| Error>{
        try {
            const agent = await AgentModel.findById({id: id});

            if(!agent){
                return new Error(new AgentMessageError().notFound);
            }

            if(fields.medias){
                //@ts-ignore
                await MediasModel.findByIdAndUpdate(agent.medias._id,fields.medias);

            }
            for(let value in fields){
                await AgentModel.findByIdAndUpdate(id,{[value]:fields[value]})
            }

            const agentUpdated = await AgentModel.findById(id)
            
            return agentUpdated;

        } catch (error) {
            throw new Error(error.message);
        }
    }
}