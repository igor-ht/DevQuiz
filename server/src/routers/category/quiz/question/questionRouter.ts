import express from 'express';
import { getAllQuestions, getQuestionAnswer, getQuestionById } from './questionApi';

const questionRouter = express.Router({ mergeParams: true, caseSensitive: true });

questionRouter.get('/', getAllQuestions);

questionRouter.get('/:questionId', getQuestionById);

questionRouter.get('/:questionId/answer', getQuestionAnswer);

export default questionRouter;
