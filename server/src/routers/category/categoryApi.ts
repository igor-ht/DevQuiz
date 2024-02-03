import { prisma } from '@/model/client';
import { Request, Response } from 'express';

export const getAllCategories = async (req: Request, res: Response) => {
	const categories = await prisma.category.findMany({
		select: {
			id: true,
			name: true,
		},
	});

	if (!categories) res.status(404).json({ message: 'Categories not found' });
	res.status(200).json(categories);
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

	if (!category) res.status(404).json({ message: 'Category not found' });
	res.status(200).json(category);
};
