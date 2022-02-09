import { NextFunction, Request, Response } from "express";
import AuthError from "../error/AuthError";
import jwt from "jsonwebtoken";
import { auth } from "../config/settings";

interface TokenPayload{
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(
    request:Request,
    response:Response,
    next: NextFunction
){
    const { authorization } = request.headers;

    if(!authorization){
        return response.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, auth.key);
        const { id } = data as TokenPayload;
        request.userId = id;
        next();
    } catch {
        return response.sendStatus(401);
    }


}