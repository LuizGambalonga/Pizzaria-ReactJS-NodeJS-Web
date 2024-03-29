import { Router} from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import {isAuthenticated} from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { ConcludedOrderController } from "./controllers/order/ConcludedOrderController";
import uploadConfig from './config/multer';
const router = Router();
const upload = multer(uploadConfig.upload('./fotos_temporarias'))

//Routes User
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)

//Routes Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category',  isAuthenticated, new ListCategoryController().handle)

export {router};
//Routes Product
router.post('/product',isAuthenticated,upload.single('file'), new CreateProductController().handle)
router.get('/category/product',isAuthenticated, new ListByCategoryController().handle)

// Routes Order
router.post('/order',isAuthenticated, new CreateOrderController().handle)
router.delete('/order',isAuthenticated, new RemoveOrderController().handle)

router.post('/order/item',isAuthenticated, new AddItemController().handle)
router.delete('/order/item/delete',isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

router.put('/order/concluded', isAuthenticated, new ConcludedOrderController().handle)

