import { Request,Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController{
async handle(req: Request,res: Response){
    const {product_id, order_id, amount} = req.body;

    const addItem = new AddItemService();
    
    const item = await addItem.execute({
        product_id, order_id, amount
    })
    return res.json(item)
    }
}
export {AddItemController}