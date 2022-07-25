import prismaClient from "../../prisma";
import { ConcludedOrderRequestInterface } from "../../interfaces/order/ConcludedOrderRequestInterface";

class ConcludedOrderService{
    async execute({ order_id}: ConcludedOrderRequestInterface){
            const order = await prismaClient.order.update({
                where: {
                    id: order_id
                },
                data: {
                    status: true
                }
            })
            return order;
        }
    }   
export {ConcludedOrderService}