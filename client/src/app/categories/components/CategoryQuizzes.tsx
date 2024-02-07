'use client';

import styles from '../page.module.scss';
import Link from 'next/link';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';
import { State } from '@/utils/hooks/reducer';

export default function CategoryQuizzes() {
	const { allCategories, queryParams, setQueryParams, stateDispatch, setTimer } = useContext(CategoriesContext);
	const currentCategory = allCategories?.find((categ: { id: string }) => categ?.id === queryParams?.id);

	const handleStartQuiz = (quizId: string) => {
		stateDispatch({ type: 'RESET_STATE' });
		setQueryParams((prev: State) => ({ ...prev, quizId: quizId, questionId: 1 }));
		setTimer('00:00:00');
	};

	if (!allCategories) return <></>;

	if (currentCategory && !currentCategory?.quiz?.length)
		return (
			<div className={styles.quizzes}>
				<p style={{ color: 'white', fontSize: '2rem', fontFamily: 'system-ui', textAlign: 'center', margin: '1rem' }}>
					There is no quiz available for this category
				</p>
			</div>
		);

	return (
		<div className={styles.quizzes}>
			<ul>
				{currentCategory?.quiz.map((quiz: { id: string; name: string; questions: number }) => (
					<li key={quiz.name}>
						<section>{quiz.name}</section> <section>Total Questions: {quiz.questions}</section>{' '}
						<Link
							href={`/categories/${encodeURIComponent(currentCategory.name.toLowerCase())}/${encodeURIComponent(quiz.name.toLowerCase())}`}>
							<button
								type="button"
								onClick={() => handleStartQuiz(quiz?.id)}>
								Start
							</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
