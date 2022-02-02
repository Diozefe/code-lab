import { FastifyReply, FastifyRequest } from "fastify";
import Product from "../models/Product";
import CreateProductService from "../services/CreateProductService";

export default class ProductController{
    constructor(){}

    async handleResponse(request:FastifyRequest, response:FastifyReply){
        const body = request.body as Product;
        const service = new CreateProductService();
        const result = await service.execute(body);

        if( result instanceof Error){
            return {
                error: result.message
            }
        }

        return result;
    }
}