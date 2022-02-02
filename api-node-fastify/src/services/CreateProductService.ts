import Product from "../models/Product";
import { IProductCreated } from "../models/ProductCreated";


export default class CreateProductService {
    constructor(){}

    execute({ name, category, price }:Product):Promise<IProductCreated | Error>{
        return new Promise((resolve, reject)=>{
            if(name && category && price){
                const id = 'asdasda'
                return resolve({
                   id, name, category, price
                });
            }else{
                return reject(new Error('Invalid fields'));
            }
        });
    }
}
