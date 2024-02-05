import express from 'express';
import { getUserSignin, postUserSignup } from './userApi';

const userRouter = express.Router();

userRouter.post('/signin', getUserSignin);

userRouter.post('/signup', postUserSignup);

export default userRouter;
