'use client';

import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';
import StartQuiz from './StartQuiz/StartQuiz';
import Quiz from './Quiz/Quiz';

export default function QuizPage() {
	const { state } = useContext(CategoriesContext);

	if (state.quizStatus === 'idle') return <StartQuiz />;

	if (state.quizStatus === 'completed') return <h1>Quiz Completed</h1>;

	return <Quiz />;
}
