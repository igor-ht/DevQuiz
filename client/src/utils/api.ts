import { ENDPOINT } from '../config';

export const getAllCategories = async () => {
	const response = await fetch(`${ENDPOINT}/category`);
	return response.json();
};

export const getCategoryById = async (categoryId: string) => {
	const response = await fetch(`${ENDPOINT}/category/${categoryId}`);
	return response.json();
};

export const getAllQuizzesFromCategory = async (categoryId: string) => {
	const response = await fetch(`${ENDPOINT}/category/${categoryId}/quiz`);
	return response.json();
};

export const getQuizzByIdFromCategory = async (categoryId: string, quizId: string) => {
	const response = await fetch(`${ENDPOINT}/category/${categoryId}/quiz/${quizId}`);
	return response.json();
};

export const getAllQuestionsFromQuizz = async (categoryId: string, quizId: string) => {
	const response = await fetch(`${ENDPOINT}/category/${categoryId}/quiz/${quizId}/question`);
	return response.json();
};

export const getQuestionByIdFromQuizz = async (categoryId: string, quizId: string, questionId: string) => {
	const response = await fetch(`${ENDPOINT}/category/${categoryId}/quiz/${quizId}/question/${questionId}`);
	return response.json();
};
