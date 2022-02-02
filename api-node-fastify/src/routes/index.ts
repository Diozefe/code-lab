import Fastify, { FastifyInstance } from "fastify";
import ProductController from "../controllers/ProductController";
import { optionsProductCreateSchema, optionsProductListSchema } from "../schemas/productSchema";

const router:FastifyInstance = Fastify({});

router.post('/product',optionsProductCreateSchema, new ProductController().handleResponse);
router.get('/product',optionsProductListSchema, async (request, reply)=>{
    return reply.send({ message: 'Product Acessed'});
})
export { router }