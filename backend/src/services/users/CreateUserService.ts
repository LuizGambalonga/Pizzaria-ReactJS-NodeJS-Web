import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'
//interface criada, para que seja feito a obrigatoriedade de informar os campos abaixo quando o Controller chamar este serviço.
interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){

    if(!email){
        throw new Error("Email incorreto")
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        }
    )
    const passwordHash = await hash(password, 8)
    
    if(userAlreadyExists){
        throw new Error("Usuario já existente")
    }
    const user = await prismaClient.user.create({
        data:{
            name: name,
            email: email,
            password: passwordHash
        },
        //o select devolve no response apenas oque nos queremos ver, neste caso não enviamos o "Password"
        select:{
            id: true,
            name: true,
            email: true
        }
    })
        return user;
    }
}

export {CreateUserService}