import { ItemRequestInterface } from "../../interfaces/order/ItemRequestInterface";
import prismaClient from "../../prisma";

class AddItemService{
    async execute({order_id,product_id,amount}: ItemRequestInterface){
        
        const item = await prismaClient.item.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        })
        return item;
    }
}
export {AddItemService}