import express, { Express, json, urlencoded } from "express";
import { routesApp } from "../routes";

const application:Express = express();

//Serialize
application.use(json());
application.use(urlencoded({extended:true}));

//Routes
application.use('/v1',routesApp);

export { application }
