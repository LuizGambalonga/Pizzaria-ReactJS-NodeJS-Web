import prismaClient from "../../prisma";
import { ItemRequestIdInterface } from "../../interfaces/order/ItemRequestIdInterface";

class RemoveItemService{
    async execute({item_id}:ItemRequestIdInterface){

        const item = await prismaClient.item.delete({
            where: {
            id: item_id
            }
        })
        return item;
    }
}

export {RemoveItemService}