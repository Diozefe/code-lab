import { RouteShorthandOptions } from "fastify";

export const optionsProductCreateSchema: RouteShorthandOptions = {
    schema:{
        querystring:{
            name: { type: 'string' },
            category: { type: 'string' },
            price: { type: 'number' },
        },
        response:{
            200:{
                type: 'object',
                properties:{
                    id: { type: 'string' },
                    name: { type: 'string' },
                    category: { type: 'string' },
                    price: { type: 'number' },
                }
            }
        },
    }
}

export const optionsProductListSchema: RouteShorthandOptions = {
    schema:{
        response:{
            200:{
                type: 'object',
                properties:{
                    message: { type: 'string' },
                }
            }
        },
    }
}