import { OrderIdRequestInterface } from "../../interfaces/order/OrderIdRequestInterface";
import prismaClient from "../../prisma";

class RemoveOrderService{
    async execute({order_id}: OrderIdRequestInterface){
        const order = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        })
        return order;
    }
}
export {RemoveOrderService}