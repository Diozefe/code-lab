import { ObjectId } from "mongoose";
import { IMedias } from "./IMedias";

export interface INewAgent {
    name:string,
    login:string,
    medias:IMedias,
    password:string,
}

export interface IAgent {
    id:ObjectId;
    name:String;
    login:String;
    medias:IMedias;
    password:String;
    domain:String;
    token:String;
    state:String;
    createdAt:Date;
    updatedAt:Date;
}