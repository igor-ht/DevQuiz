import express from 'express';
import { userSignin, userSignup } from './userApi';

const userRouter = express.Router();

userRouter.post('/signin', userSignin);

userRouter.post('/signup', userSignup);

export default userRouter;
