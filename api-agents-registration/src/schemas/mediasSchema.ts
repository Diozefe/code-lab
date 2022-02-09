import { Schema, model } from "mongoose";
import { IMedias } from "../interfaces/IMedias";
type MediasSchema = IMedias;
const schema = new Schema<MediasSchema>({
    voice: {
        min: Number,
        max: Number,
        selected: Number,
        handleMode: String,
        device: String,
        devicePassword: String,
    },
    email:{
        min: Number,
        max: Number,
        selected: Number
    },
    chat:{
        min: Number,
        max: Number,
        selected: Number,
        handleMode: String
    }
},{id:true, versionKey:false});

const MediasModel = model<MediasSchema>('Medias', schema);

export { MediasModel };