import { OrderRequestInterface } from "../../interfaces/order/OrderRequestInterface"
import prismaClient from "../../prisma"

class CreateOrderService{
async execute({table, name}: OrderRequestInterface){
    const order = await prismaClient.order.create({
        data:{
            table: table,
            name: name
        }
    })
    return order;
    }
}

export {CreateOrderService}