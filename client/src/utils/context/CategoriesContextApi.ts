import { useEffect } from 'react';
import useCategoryQueryHook from '../hooks/useQueryHook';
import { useRouter } from 'next/navigation';
import useStateHook from '../hooks/useStateHook';

export type QueryParams = {
	id?: string;
	quizId?: string;
	questionId?: string;
	answer?: string;
};

export default function CategoriesContextApi() {
	const router = useRouter();
	const { state, stateDispatch, queryParams, setQueryParams } = useStateHook();
	const { getAllCategories, getQuestionFromQuizz, getQuestionAnswer } = useCategoryQueryHook(
		queryParams?.id,
		queryParams?.quizId,
		queryParams?.questionId,
		queryParams.answer
	);

	const { data: allCategories, status: allCategoriesStatus } = getAllCategories;
	const { data: currentQuestion, status: currentQuestionStatus } = getQuestionFromQuizz;
	const { data: currentQuestionAnswer, status: currentQuestionAnswerStatus } = getQuestionAnswer;

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
		currentQuestion,
		currentQuestionStatus,
		currentQuestionAnswer,
		currentQuestionAnswerStatus,
	};
}
