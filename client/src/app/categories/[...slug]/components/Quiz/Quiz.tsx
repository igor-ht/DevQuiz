'use client';

import styles from './Quiz.module.scss';
import { useContext } from 'react';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import Loading from '@/app/loading';
import Question from './components/Question';
import Options from './components/Options';
import Buttons from './components/Buttons';

export default function Quiz() {
	const { currentQuestionStatus } = useContext(CategoriesContext);

	if (currentQuestionStatus === 'loading') return <Loading />;

	if (currentQuestionStatus === 'error') throw new Error('Failed to load question');

	return (
		<div className={styles.quiz}>
			<Question />
			<Options />
			<Buttons />
		</div>
	);
}
