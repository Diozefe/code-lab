import mongoose  from "mongoose";
import { db_settings } from "../config/settings";
import { ApplicationError } from "../error/AplicationError";

export default class ConnectionDB{

    constructor(){
    }

    connect(){
        try {
            mongoose.connect(db_settings.url);        
        } catch (error) {
            throw new ApplicationError(error.message);
        }
    }
    disconect(){
        mongoose.disconnect();
    }
}