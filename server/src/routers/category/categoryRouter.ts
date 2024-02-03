import express from 'express';
import quizRouter from './quiz/quizRouter';
import { getAllCategories, getCategoryById } from './categoryApi';

const categoryRouter = express.Router({ mergeParams: true, caseSensitive: true });

categoryRouter.get('/', getAllCategories);

categoryRouter.get('/:categoryId', getCategoryById);

categoryRouter.use('/:categoryId/quiz', quizRouter);

export default categoryRouter;
