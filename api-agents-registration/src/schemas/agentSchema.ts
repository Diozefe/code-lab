import { Schema, model, Types } from "mongoose";
import { IAgent } from "../interfaces/IAgent";

type AgentSchema = IAgent;

const schema = new Schema<AgentSchema>({
    id:Types.ObjectId,
    name: String,
    login: {
        type:String, unique:true
    },
    domain: String,
    password:String,
    medias: { type: Schema.Types.ObjectId, ref: 'Medias'},
    token:String,
    state:String,
    createdAt:{
        type: Date,
        select: false
    },
    updatedAt:{
        type: Date,
        select: false
    },

},{versionKey:false});
const AgentModel = model<AgentSchema>('Agent', schema);

export { AgentModel };