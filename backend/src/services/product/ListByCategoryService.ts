import { ProductListCategoryInterface } from "../../interfaces/product/ProductListCategoryInterface"
import prismaClient from "../../prisma"

class ListByCategoryService{
   async execute({category_id}:ProductListCategoryInterface){

    const findByCategory = await prismaClient.product.findMany({
        where: {
            category_id: category_id 
        }
    })
    return findByCategory;
   }
}
export {ListByCategoryService}