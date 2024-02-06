import { prisma } from '@/model/client';
import { Request, Response } from 'express';

export const getAllCategories = async (req: Request, res: Response) => {
	const categories = await prisma.category.findMany({
		select: {
			id: true,
			name: true,
			quiz: {
				select: {
					id: true,
					name: true,
					questions: {
						select: {
							id: true,
						},
					},
				},
			},
		},
	});

	if (!categories) return res.status(404).json({ message: 'Categories not found' });
	const returnObj = categories.map((category) => ({
		...category,
		quiz: category.quiz.map((quiz) => ({ ...quiz, questions: quiz.questions.length })),
	}));
	return res.status(200).json(returnObj);
};

export const getCategoryById = async (req: Request, res: Response) => {
	const { categoryId } = req.params;

	const category = await prisma.category.findUnique({
		where: {
			id: categoryId,
		},
		select: {
			name: true,
		},
	});

	if (!category) return res.status(404).json({ message: 'Category not found' });
	return res.status(200).json(category);
};
