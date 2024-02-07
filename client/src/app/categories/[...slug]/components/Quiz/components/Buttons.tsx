'use client';

import { QueryParams } from '@/utils/context/CategoriesContextApi';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';

export default function Buttons() {
	const { state, stateDispatch, setQueryParams } = useContext(CategoriesContext);

	const handleCheckAnswer = async () => {
		setQueryParams((prev: QueryParams) => ({ ...prev, answer: state.currentAnswer.answer }));
	};

	const handleNextAnswer = () => {
		stateDispatch({ type: 'RESET_CURRENT_ANSWER' });
		setQueryParams((prev: QueryParams) => ({ ...prev, questionId: +prev.questionId! + 1, answer: '' }));
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
