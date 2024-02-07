'use client';

import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';
import StartQuiz from './StartQuiz/StartQuiz';
import Quiz from './Quiz/Quiz';
import QuizComplete from './QuizComplete/QuizComplete';

export default function QuizPage() {
	const { state } = useContext(CategoriesContext);

	if (state.quizStatus === 'idle') return <StartQuiz />;

	if (state.quizStatus === 'completed') return <QuizComplete />;

	return <Quiz />;
}
