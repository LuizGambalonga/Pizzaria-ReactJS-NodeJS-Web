import { Request,Response} from 'express';
import { AuthUserService } from '../../services/users/AuthUserService';
class AuthUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const userService= new AuthUserService();

         const auth = await userService.execute({
            email,
            password
         })
        return res.json(auth)
    }
}

export {AuthUserController}