import { Router,Request, Response } from 'express';
import {UserController } from '../controller';
import ValidateToken from '../middlewares/ValidateToken';

const router = Router();

const userController = new UserController();
const validateToken = new ValidateToken();

// Note : I added the `validateToken` middleware here to restrict access and prevent public access to this endpoint.
router.get('/users/:id',[validateToken.validate], async (req:Request, res:Response) => {
  await userController.getUserDetails(req, res);
});


export default router;