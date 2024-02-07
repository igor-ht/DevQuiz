'use client';

import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';

export default function Question() {
	const { currentQuiz, currentQuestion } = useContext(CategoriesContext);

	return (
		<h1>
			Question {currentQuestion?.id}/{currentQuiz?.questions}
			<br />
			{currentQuestion?.question}
		</h1>
	);
}
