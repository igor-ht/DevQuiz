'use client';

import styles from '../page.module.scss';
import Link from 'next/link';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';

export default function CategoryQuizzes() {
	const { allCategories, state } = useContext(CategoriesContext);
	const currentCategory = allCategories?.find((categ: { id: string }) => categ?.id === state?.id);

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
				{currentCategory?.quiz.map((quiz: { name: string }) => (
					<li key={quiz.name}>
						<section>{quiz.name}</section> <section>Total Questions: 10</section>{' '}
						<Link
							href={`/categories/${encodeURIComponent(currentCategory.name.toLowerCase())}/${encodeURIComponent(quiz.name.toLowerCase())}`}>
							<button type="button">Start</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
