'use client';

import styles from './Quiz.module.scss';
import { useState, useContext } from 'react';
import StartQuiz from './StartQuiz/StartQuiz';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { State } from '@/utils/context/CategoriesContextApi';
import Loading from '@/app/loading';

export default function Quiz() {
	const { state, setState, allCategories, getQuestionFromQuizz } = useContext(CategoriesContext);
	const [quizStatus, setQuizStatus] = useState<'idle' | 'start' | 'stop'>('idle');
	const [currentAnswer, setCurrentAnswer] = useState<{ answer: string; status: 'idle' | 'correct' | 'incorrect' }>({
		answer: '',
		status: 'idle',
	});
	const { data, status: questionState } = getQuestionFromQuizz;
	const currentQuiz = allCategories
		?.find((categ: { id: string }) => categ.id === state.id)
		?.quiz.find((quiz: { id: number }) => quiz.id === state.quizId);

	const handleCheckAnswer = () => {
		setCurrentAnswer((prev) => ({ ...prev, status: 'correct' }));
	};

	const handleNextAnswer = () => {
		setState((prev: State) => ({ ...prev, questionId: +prev.questionId! + 1 }));
		setCurrentAnswer({ answer: '', status: 'idle' });
	};

	if (quizStatus === 'idle') return <StartQuiz setQuizStatus={setQuizStatus} />;

	if (questionState === 'loading') return <Loading />;

	return (
		<div className={styles.quiz}>
			<h1>
				Question {data?.id}/{currentQuiz?.questions}
				<br />
				{data?.question}
			</h1>
			<ul>
				{data?.options?.map((option: string, index: number) => (
					<li
						key={index}
						onClick={() => setCurrentAnswer((prev) => ({ ...prev, answer: option }))}
						className={option === currentAnswer.answer ? styles.select : ''}>
						{option}
					</li>
				))}
			</ul>
			<section>
				<button
					type="button"
					disabled={currentAnswer.status !== 'idle' || !currentAnswer.answer}
					onClick={handleCheckAnswer}>
					Check Answer
				</button>
				<button
					type="button"
					disabled={currentAnswer.status === 'idle'}
					onClick={handleNextAnswer}>
					Next Answer
				</button>
			</section>
		</div>
	);
}
