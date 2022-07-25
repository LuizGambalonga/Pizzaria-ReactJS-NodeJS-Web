import { CategoryRequestInterface } from "../../interfaces/category/CategoryRequestInterface";
import prismaClient from "../../prisma";

class CreateCategoryService{
    async execute({name}: CategoryRequestInterface){

        if(name === ''){
          throw new Error('O nome da categoria não foi informada!')
        }
        
        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })
        return category;
    }
}

export {CreateCategoryService}