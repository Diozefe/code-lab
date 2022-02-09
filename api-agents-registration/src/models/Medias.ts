import { Document } from "mongoose";
import Chat from "./Chat";
import Email from "./Email";
import Voice from "./Voice";

export default class Medias{
    
    constructor(
        public voice: Voice,
        public email: Email,
        public chat: Chat,
    ){}
}