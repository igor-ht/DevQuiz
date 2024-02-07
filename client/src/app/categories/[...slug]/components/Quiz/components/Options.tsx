'use client';

import styles from '../Quiz.module.scss';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';

export default function Options() {
	const { state, stateDispatch, currentQuestion, currentQuestionAnswer } = useContext(CategoriesContext);

	return (
		<ul>
			{currentQuestion?.options?.map((option: string) => (
				<li
					key={option}
					onClick={() => (state.currentAnswer.status === 'idle' ? stateDispatch({ type: 'SET_CURRENT_ANSWER', payload: option }) : null)}
					className={
						state.currentAnswer.status !== 'idle' && option === currentQuestionAnswer.answer
							? styles.correct
							: state.currentAnswer.status === 'incorrect' && option === state.currentAnswer.answer
							? styles.incorrect
							: option === state.currentAnswer.answer
							? styles.select
							: state.currentAnswer.status !== 'idle' && state.currentAnswer.answer !== option
							? styles.disabled
							: ''
					}>
					{option}
				</li>
			))}
		</ul>
	);
}
