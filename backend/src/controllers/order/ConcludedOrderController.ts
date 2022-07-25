import { Response,Request } from "express";
import { ConcludedOrderService } from "../../services/order/ConcludedOrderService";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class ConcludedOrderController{
    async handle(req:Request,res:Response){
        const order_id = req.query.order_id as string
        
        const concludedOrder = new ConcludedOrderService();

        const order  = await concludedOrder.execute({
            order_id
        })

        return res.json(order)
    }
}
export {ConcludedOrderController}