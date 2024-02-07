'use client';

import { QueryParams } from '@/utils/context/CategoriesContextApi';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';

export default function Buttons() {
	const { state, stateDispatch, setQueryParams, currentQuiz, currentQuestion } = useContext(CategoriesContext);

	const handleCheckAnswer = async () => {
		setQueryParams((prev: QueryParams) => ({ ...prev, answer: state.currentAnswer.answer }));
	};

	const handleNextAnswer = () => {
		const isLastQuestion = currentQuiz?.questions === currentQuestion?.id;

		stateDispatch({ type: 'RESET_CURRENT_ANSWER' });
		setQueryParams((prev: QueryParams) => ({
			...prev,
			questionId: isLastQuestion ? 0 : prev.questionId + 1,
			answer: '',
		}));

		if (isLastQuestion) stateDispatch({ type: 'SET_QUIZ_STATUS', payload: 'completed' });
	};
	return (
		<section>
			<button
				type="button"
				disabled={state.currentAnswer.status !== 'idle' || !state.currentAnswer.answer}
				onClick={handleCheckAnswer}>
				Check Answer
			</button>
			<button
				type="button"
				disabled={state.currentAnswer.status === 'idle'}
				onClick={handleNextAnswer}>
				Next Answer
			</button>
		</section>
	);
}
