import { prisma } from '@/model/client';
import { Request, Response } from 'express';

export const getAllQuestions = async (req: Request, res: Response) => {
	const { categoryId, quizId } = req.params;

	const allQuizzes = await prisma.category.findFirst({
		where: {
			id: categoryId,
		},
		select: {
			name: true,
			quiz: {
				select: {
					id: true,
					questions: {
						select: {
							id: true,
							question: true,
						},
					},
				},
			},
		},
	});
	const allQuestions = allQuizzes?.quiz.find((quiz) => quiz.id === +quizId)?.questions;

	if (!allQuestions) return res.status(404).json({ message: 'Questions not found' });
	return res.status(200).json(allQuestions);
};

export const getQuestionById = async (req: Request, res: Response) => {
	const { categoryId, quizId, questionId } = req.params;

	const allQuizzes = await prisma.category.findFirst({
		where: {
			id: categoryId,
		},
		select: {
			name: true,
			quiz: {
				select: {
					id: true,
					questions: {
						select: {
							id: true,
							question: true,
						},
					},
				},
			},
		},
	});
	const question = allQuizzes?.quiz.find((quiz) => quiz.id === +quizId)?.questions.find((question) => question.id === +questionId);

	if (!question) return res.status(404).json({ message: 'Question not found' });
	return res.status(200).json(question);
};
