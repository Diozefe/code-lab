import path from "path";
import fs from "fs";
import { IAgent } from "../interfaces/IAgent";
import { AgentModel } from "../schemas/agentSchema";
import mongoose, { Document, Types } from "mongoose";
import { db_settings } from "../config/settings";
import { MediasModel } from "../schemas/mediasSchema";

mongoose.connect(db_settings.url);

const pathFile = path.resolve('agents.json');

let data = fs.readFileSync(pathFile, 'utf-8');

let agentsJson = JSON.parse(data) as IAgent[];

let agentsSchemas:(Document<unknown, any, IAgent> & IAgent & { _id: Types.ObjectId})[]=[];

for(let i=0; i<agentsJson.length; i++){
    const { name, login, domain, password, medias, state } = agentsJson[i];
    
    const mediasModel = new MediasModel(medias);

    mediasModel.save()
    
    agentsSchemas.push(new AgentModel({
        id: new mongoose.Types.ObjectId(), 
        name:name,
        login:login,
        domain:domain,
        password:password,
        state:state,
        medias: mediasModel._id
    }));
}

let done = 0;

for (let i = 0; i < agentsSchemas.length; i++) {
    agentsSchemas[i].save(function(err, result){
        if(err){
            console.log(err);
        }
        console.log(`Seed ${result.id} created...`);
        done++;
        if(done===agentsSchemas.length){
            exit();
        }
    });
    
}

function exit(){
    mongoose.disconnect();
    console.log('Seed process finished | Total Seeders: '+agentsSchemas.length);
}