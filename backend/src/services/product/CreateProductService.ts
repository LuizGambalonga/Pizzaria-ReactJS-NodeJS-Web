import { ProductRequestInterface } from '../../interfaces/product/ProductRequestInterface'
import prismaCliente from '../../prisma'

class CreateProductService{
async execute({name,price,description,banner,category_id}: ProductRequestInterface){

    const product = await prismaCliente.product.create({
        data:{
            name: name,
            price: price,
            description: description,
            banner: banner,
            category_id: category_id
        },
        select:{
            name: true,
            price: true,
            description: true,
            category_id: true
        }
    })

    return product
    }
}

export {CreateProductService}