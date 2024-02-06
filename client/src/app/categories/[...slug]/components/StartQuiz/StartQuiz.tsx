'use client';

import { State } from '@/utils/context/CategoriesContextApi';
import styles from './StartQuiz.module.scss';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

export default function StartQuiz({ setQuizStatus }: { setQuizStatus: React.Dispatch<React.SetStateAction<'idle' | 'start' | 'stop'>> }) {
	const { router, state, setState, allCategories } = useContext(CategoriesContext);
	const pathName = usePathname();
	const lastPath = pathName.split('/').pop() as string;
	const currentCategory = allCategories?.find((categ: { id: string }) => categ?.id === state?.id);
	const currentQuizz = currentCategory?.quiz?.find((quiz: { name: string }) => quiz.name.toLowerCase() === decodeURIComponent(lastPath));

	return (
		<div className={styles.startQuiz}>
			<span>
				<p>Quiz:</p>
				<p>{currentQuizz?.name}</p>
			</span>
			<span>
				<p>Total Questions:</p>
				<p>{currentQuizz?.questions}</p>
			</span>
			<span>
				<p>Total Time:</p>
				<p>{Math.round(currentQuizz?.questions * 0.3)} min</p>
			</span>

			<section>
				<button
					onClick={() => router.back()}
					type="button">
					Back
				</button>
				<button
					onClick={() => (setQuizStatus('start'), setState((prev: State) => ({ ...prev, quizId: currentQuizz?.id, questionId: 1 })))}
					type="button">
					Start Quiz
				</button>
			</section>
		</div>
	);
}
