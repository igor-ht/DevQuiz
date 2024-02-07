'use client';

import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';

export default function Question() {
	const { queryParams, allCategories, currentQuestion } = useContext(CategoriesContext);

	const currentQuiz = allCategories
		?.find((categ: { id: string }) => categ.id === queryParams?.id)
		?.quiz.find((quiz: { id: number }) => quiz.id === queryParams?.quizId);
	return (
		<h1>
			Question {currentQuestion?.id}/{currentQuiz?.questions}
			<br />
			{currentQuestion?.question}
		</h1>
	);
}
