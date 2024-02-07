'use client';

import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';
import StartQuiz from './StartQuiz/StartQuiz';
import Quiz from './Quiz/Quiz';
import QuizComplete from './QuizComplete/QuizComplete';
import Timer from './Timer/Timer';

export default function QuizPage() {
	const { state, currentQuiz } = useContext(CategoriesContext);

	if (state.quizStatus === 'idle') return <StartQuiz />;

	if (state.quizStatus === 'completed')
		return (
			<>
				<Timer maxTimeInMinutes={1} />
				<QuizComplete />
			</>
		);

	return (
		<>
			<Timer maxTimeInMinutes={1} />
			<Quiz />
		</>
	);
}
