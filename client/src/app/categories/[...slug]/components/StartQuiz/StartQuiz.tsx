'use client';

import { QueryParams } from '@/utils/context/CategoriesContextApi';
import styles from './StartQuiz.module.scss';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

export default function StartQuiz() {
	const { router, queryParams, setQueryParams, stateDispatch, allCategories } = useContext(CategoriesContext);
	const pathName = usePathname();
	const lastPath = pathName.split('/').pop() as string;
	const currentCategory = allCategories?.find((categ: { id: string }) => categ?.id === queryParams?.id);
	const currentQuiz = currentCategory?.quiz?.find((quiz: { name: string }) => quiz.name.toLowerCase() === decodeURIComponent(lastPath));

	return (
		<div className={styles.startQuiz}>
			<span>
				<p>Quiz:</p>
				<p>{currentQuiz?.name}</p>
			</span>
			<span>
				<p>Total Questions:</p>
				<p>{currentQuiz?.questions}</p>
			</span>
			<span>
				<p>Total Time:</p>
				<p>{Math.round(currentQuiz?.questions * 0.3)} min</p>
			</span>

			<section>
				<button
					onClick={() => router.back()}
					type="button">
					Back
				</button>
				<button
					onClick={() => (
						stateDispatch({ type: 'SET_QUIZ_STATUS', payload: 'start' }),
						setQueryParams((prev: QueryParams) => ({ ...prev, quizId: currentQuiz.id, questionId: 1 }))
					)}
					type="button">
					Start Quiz
				</button>
			</section>
		</div>
	);
}
