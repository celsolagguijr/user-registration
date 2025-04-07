import { Router } from "express";
import AuthRouter from "./AuthRoute";
import UserRoute from './UserRoute'

const routes = Router();

routes.use(AuthRouter);
routes.use(UserRoute);


export default routes;