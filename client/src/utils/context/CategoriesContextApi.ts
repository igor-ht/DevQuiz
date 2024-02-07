import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCategoryQueryHook from '../hooks/useQueryHook';
import useStateHook from '../hooks/useStateHook';

export type QueryParams = {
	id: string;
	quizId: number;
	questionId: number;
	answer: string;
};

export default function CategoriesContextApi() {
	const router = useRouter();
	const { state, stateDispatch, queryParams, setQueryParams } = useStateHook();
	const { getAllCategories, getQuestionFromQuizz, getQuestionAnswer } = useCategoryQueryHook(
		queryParams.id,
		queryParams.quizId,
		queryParams.questionId,
		queryParams.answer
	);

	const { data: allCategories, status: allCategoriesStatus } = getAllCategories;
	const { data: currentQuestion, status: currentQuestionStatus } = getQuestionFromQuizz;
	const { data: currentQuestionAnswer, status: currentQuestionAnswerStatus } = getQuestionAnswer;

	const currentQuiz = allCategories
		?.find((categ: { id: string }) => categ.id === queryParams?.id)
		?.quiz.find((quiz: { id: number }) => quiz.id === queryParams?.quizId);

	useEffect(() => {
		if (allCategories) {
			setQueryParams((prev) => ({ ...prev, id: allCategories[0].id }));
		}
	}, [allCategories]);

	useEffect(() => {
		if (state.currentAnswer.answer && currentQuestionAnswer)
			stateDispatch({
				type: 'SET_CURRENT_ANSWER_STATUS',
				payload: currentQuestionAnswer?.answer === state.currentAnswer.answer ? 'correct' : 'incorrect',
			});
	}, [currentQuestionAnswer]);

	return {
		router,
		state,
		stateDispatch,
		queryParams,
		setQueryParams,
		allCategories,
		allCategoriesStatus,
		currentQuiz,
		currentQuestion,
		currentQuestionStatus,
		currentQuestionAnswer,
		currentQuestionAnswerStatus,
	};
}
