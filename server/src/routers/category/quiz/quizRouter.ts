import express from 'express';
import questionRouter from './question/questionRouter';
import { getAllQuizzes, getQuizzById } from './quizApi';

const quizRouter = express.Router({ mergeParams: true, caseSensitive: true });

quizRouter.get('/', getAllQuizzes);

quizRouter.get('/:quizId', getQuizzById);

quizRouter.use('/:quizId/question', questionRouter);

export default quizRouter;
