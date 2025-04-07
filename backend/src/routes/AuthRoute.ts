import { Router,Request, Response } from 'express';
import { AuthController, } from '../controller';

const router = Router();

const authController = new AuthController();

router.post('/auth', async (req:Request, res:Response) => {
  await authController.login(req, res);
});

router.post('/register', async (req:Request, res:Response) => {
  await authController.register(req, res);
});

export default router;
