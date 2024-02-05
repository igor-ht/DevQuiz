import { prisma } from '@/model/client';
import { Request, Response } from 'express';

export const getAllQuizzes = async (req: Request, res: Response) => {
	const { categoryId } = req.params;
	const quizzes = await prisma.category.findMany({
		where: {
			id: categoryId,
		},
		select: {
			quiz: {
				select: {
					id: true,
					name: true,
				},
			},
		},
	});

	if (!quizzes) return res.status(404).json({ message: 'Quizzes not found' });
	return res.status(200).json(quizzes);
};

export const getQuizzById = async (req: Request, res: Response) => {
	const { categoryId, quizId } = req.params;
	const category = await prisma.category.findUnique({
		where: {
			id: categoryId,
			quiz: {
				some: {
					id: +quizId,
				},
			},
		},
		select: {
			quiz: {
				select: {
					id: true,
					name: true,
				},
			},
		},
	});

	const quizById = category?.quiz.find((quiz) => quiz.id === +quizId);

	if (!quizById) return res.status(404).json({ message: 'Quiz not found' });
	return res.status(200).json(quizById);
};
