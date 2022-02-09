import dotenv from 'dotenv';
import fs from "fs";

dotenv.config();

const env = {
    DB_MONGO_USER: process.env.DB_MONGO_USER && 
        process.env.DB_MONGO_USER!= '' ? 
        process.env.DB_MONGO_USER : 'root',

    DB_MONGO_PASSWORD: process.env.DB_MONGO_PASSWORD && 
        process.env.DB_MONGO_PASSWORD!= '' ? 
        process.env.DB_MONGO_PASSWORD : 'digitro123',

    DB_MONGO_HOST: process.env.DB_MONGO_HOST && 
        process.env.DB_MONGO_HOST!= '' ? 
        process.env.DB_MONGO_HOST : 'localhost',

    DB_MONGO_PORT: process.env.DB_MONGO_PORT && 
        process.env.DB_MONGO_PORT!= '' ? 
        process.env.DB_MONGO_PORT : 27017,
    
    DB_MONGO_NAME: process.env.DB_MONGO_NAME && 
        process.env.DB_MONGO_NAME!= '' ? 
        process.env.DB_MONGO_NAME : 'digitro',

    SERVER_PORT: process.env.SERVER_PORT && 
    process.env.SERVER_PORT!= '' ? 
    +process.env.SERVER_PORT : 3001,

    SECRET_KEY: process.env.SECRET_KEY && 
    process.env.SECRET_KEY!= '' ? 
    process.env.SECRET_KEY : '123456',
}

export const db_settings={
    url:`mongodb://${env.DB_MONGO_USER}:${env.DB_MONGO_PASSWORD}@${env.DB_MONGO_HOST}:${env.DB_MONGO_PORT}`,
    options:{
        useNewUrlParser: true
    }
}

export const server_properties={
    port: env.SERVER_PORT,
    https:{
        key: fs.readFileSync('./__secret/server.key'),
        cert: fs.readFileSync('./__secret/server.crt')
    }
}

export const auth={
    key: env.SECRET_KEY
}
