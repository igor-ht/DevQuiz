import express from 'express';
import cors from 'cors';
import categoryRouter from './routers/category/categoryRouter';
import userRouter from './routers/user/userRouter';

const server = express();

server.use(cors());

server.use('/category', categoryRouter);

server.use('/user', userRouter);

export default server;