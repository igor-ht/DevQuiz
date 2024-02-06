'use client';

import styles from './Quiz.module.scss';
import { useContext } from 'react';
import StartQuiz from './StartQuiz/StartQuiz';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { QueryParams } from '@/utils/context/CategoriesContextApi';
import Loading from '@/app/loading';

export default function Quiz() {
	const { state, stateDispatch, queryParams, setQueryParams, allCategories, getQuestionFromQuizz } = useContext(CategoriesContext);

	const { data, status: questionState } = getQuestionFromQuizz;
	const currentQuiz = allCategories
		?.find((categ: { id: string }) => categ.id === queryParams?.id)
		?.quiz.find((quiz: { id: number }) => quiz.id === queryParams?.quizId);

	const handleCheckAnswer = () => {
		stateDispatch({ type: 'SET_CURRENT_ANSWER_STATUS', payload: 'correct' });
	};

	const handleNextAnswer = () => {
		stateDispatch({ type: 'RESET_CURRENT_ANSWER' });
		setQueryParams((prev: QueryParams) => ({ ...prev, questionId: +prev.questionId! + 1 }));
	};

	if (state.quizStatus === 'idle') return <StartQuiz />;

	if (questionState === 'loading') return <Loading />;

	return (
		<div className={styles.quiz}>
			<h1>
				Question {data?.id}/{currentQuiz?.questions}
				<br />
				{data?.question}
			</h1>
			<ul>
				{data?.options?.map((option: string) => (
					<li
						key={option}
						onClick={() => stateDispatch({ type: 'SET_CURRENT_ANSWER', payload: option })}
						className={option === state.currentAnswer.answer ? styles.select : ''}>
						{option}
					</li>
				))}
			</ul>
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
		</div>
	);
}
