import express from 'express';
import { getAllQuestions, getQuestionById } from './questionApi';

const questionRouter = express.Router({ mergeParams: true, caseSensitive: true });

questionRouter.get('/', getAllQuestions);

questionRouter.get('/:questionId', getQuestionById);

export default questionRouter;
