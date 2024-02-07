import { ENDPOINT } from '@/config';
import { useQuery } from 'react-query';

const useCategoryQueryHook = (id?: string, quizId?: string, questionId?: string, answer?: string) => {
	const getAllCategories = useQuery({
		queryKey: ['categories'],
		retry: 3,
		cacheTime: Infinity,
		staleTime: Infinity,
		queryFn: async () => {
			try {
				const response = await fetch(`${ENDPOINT}/category`);

				if (!response.ok) throw new Error('Error fetching categories');
				return response.json();
			} catch (error) {
				throw new Error('Error fetching categories');
			}
		},
	});

	const getQuestionFromQuizz = useQuery({
		queryKey: ['category', id, 'quiz', quizId, 'question', questionId],
		enabled: !!id && !!quizId && !!questionId,
		retry: 3,
		cacheTime: Infinity,
		staleTime: Infinity,
		queryFn: async () => {
			try {
				const response = await fetch(`${ENDPOINT}/category/${id}/quiz/${quizId}/question/${questionId}`);

				if (!response.ok) throw new Error('Error fetching question');
				return response.json();
			} catch (error) {
				throw error;
			}
		},
	});

	const getQuestionAnswer = useQuery({
		queryKey: ['category', id, 'quiz', quizId, 'question', questionId, 'answer', answer],
		enabled: !!id && !!quizId && !!questionId && !!answer,
		retry: 3,
		cacheTime: Infinity,
		staleTime: Infinity,
		queryFn: async () => {
			try {
				const response = await fetch(`${ENDPOINT}/category/${id}/quiz/${quizId}/question/${questionId}/answer`);

				if (!response.ok) throw new Error('Error fetching answer');
				return response.json();
			} catch (error) {
				throw error;
			}
		},
	});

	return { getAllCategories, getQuestionFromQuizz, getQuestionAnswer };
};

export default useCategoryQueryHook;
