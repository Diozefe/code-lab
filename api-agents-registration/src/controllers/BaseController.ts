import { Request, Response } from "express";

export abstract class BaseController {
    handle(request: Request, response:Response):any{

    }

}