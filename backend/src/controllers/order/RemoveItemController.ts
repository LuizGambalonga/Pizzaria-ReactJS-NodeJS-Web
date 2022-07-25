import { Request,Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController{
    async handle(req:Request,res:Response){

        const item_id = req.query.item_id as string;

        const itemRemoveService = new RemoveItemService()

        const item = await itemRemoveService.execute({
            item_id
        })

        return res.json(item)
    }
}

export {RemoveItemController}