'use client';

import styles from './Quiz.module.scss';
import { useState, useContext } from 'react';
import StartQuiz from './StartQuiz/StartQuiz';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { State } from '@/utils/context/CategoriesContextApi';

export default function Quiz() {
	const { state, setState, allCategories, getQuestionFromQuizz } = useContext(CategoriesContext);
	const [quizStatus, setQuizStatus] = useState<'idle' | 'start' | 'stop'>('idle');
	const [currentAnswer, setCurrentAnswer] = useState('');
	const [answerChecked, setAnswerChecked] = useState(false);
	const { data, state: questionState } = getQuestionFromQuizz;
	const currentQuiz = allCategories
		?.find((categ: { id: string }) => categ.id === state.id)
		?.quiz.find((quiz: { id: number }) => quiz.id === state.quizId);

	const handleCheckAnswer = () => {
		console.log(currentAnswer);
		setAnswerChecked(true);
	};

	const handleNextAnswer = () => {
		setState((prev: State) => ({ ...prev, questionId: +prev.questionId! + 1 }));
		setCurrentAnswer('');
		setAnswerChecked(false);
	};

	if (quizStatus === 'idle') return <StartQuiz setQuizStatus={setQuizStatus} />;

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
						onClick={() => setCurrentAnswer(option)}
						className={option === currentAnswer ? styles.select : ''}>
						{option}
					</li>
				))}
			</ul>
			<section>
				<button
					type="button"
					disabled={!currentAnswer}
					onClick={handleCheckAnswer}>
					Check Answer
				</button>
				<button
					type="button"
					disabled={!answerChecked}
					onClick={handleNextAnswer}>
					Next Answer
				</button>
			</section>
		</div>
	);
}
