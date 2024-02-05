import { ENDPOINT } from '@/config';
import { useQuery } from 'react-query';

const useCategoryQueryHook = (id: string, quizId?: string, questionId?: string) => {
	const getCategory = useQuery({
		queryKey: ['category', id],
		queryFn: async () => {
			try {
				const response = await fetch(`${ENDPOINT}/category/${id}`);

				if (!response.ok) throw new Error('Error fetching category');
				return response.json();
			} catch (error) {
				throw new Error('Error fetching category');
			}
		},
	});

	const getQuizzFromCategory = useQuery({
		queryKey: ['category', id, 'quiz', quizId],
		queryFn: async () => {
			try {
				if (!quizId) throw new Error('Missing quizId');

				const response = await fetch(`${ENDPOINT}/category/${id}/quiz/${quizId}`);

				if (!response.ok) throw new Error('Error fetching quiz');
				return response.json();
			} catch (error) {
				throw error;
			}
		},
	});

	const getQuestionFromQuizz = useQuery({
		queryKey: ['category', id, 'quiz', quizId, 'question', questionId],
		queryFn: async () => {
			try {
				if (!quizId || !questionId) throw new Error('Missing quizId or questionId');

				const response = await fetch(`${ENDPOINT}/category/${id}/quiz/${quizId}/question/${questionId}`);

				if (!response.ok) throw new Error('Error fetching question');
				return response.json();
			} catch (error) {
				throw error;
			}
		},
	});

	return { getCategory, getQuizzFromCategory, getQuestionFromQuizz };
};

export default useCategoryQueryHook;
