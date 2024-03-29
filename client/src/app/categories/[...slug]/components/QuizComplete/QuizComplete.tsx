'use client';

import styles from './QuizComplete.module.scss';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { State } from '@/utils/hooks/reducer';
import { useContext } from 'react';

export default function QuizComplete() {
	const { router, state, stateDispatch, timer, setTimer, currentQuiz, setQueryParams } = useContext(CategoriesContext);

	const handleTryAgain = () => {
		stateDispatch({ type: 'RESET_STATE' });
		stateDispatch({ type: 'SET_QUIZ_STATUS', payload: 'progress' });
		setTimer('00:00:00');
		setQueryParams((prev: State) => ({ ...prev, questionId: 1 }));
	};

	const handleBackToCategories = () => {
		router.push('/categories');
		stateDispatch({ type: 'RESET_STATE' });
		setTimer('00:00:00');
		setQueryParams((prev: State) => ({ ...prev, quizId: 0, questionId: 0 }));
	};

	return (
		<div className={styles.quizComplete}>
			<h1>
				Quiz Complete: <span>{currentQuiz.name}</span>
			</h1>
			<div>
				<section>
					<p>Total Questions:</p>
					<p>{currentQuiz?.questions}</p>
				</section>
				<section>
					<p>Total Correct Answers:</p>
					<p>{state.correctAnswers}</p>
				</section>
				<section>
					<p>Timer:</p>
					<p>{timer}</p>
				</section>
			</div>
			<section>
				<button
					type="button"
					onClick={handleBackToCategories}>
					Back to Categories
				</button>
				<button
					type="button"
					onClick={handleTryAgain}>
					Try Again
				</button>
			</section>
		</div>
	);
}
