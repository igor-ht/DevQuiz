'use client';

import styles from './Quiz.module.scss';
import { useContext } from 'react';
import StartQuiz from '../StartQuiz/StartQuiz';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { QueryParams } from '@/utils/context/CategoriesContextApi';
import Loading from '@/app/loading';
import Question from './components/Question';
import Options from './components/Options';
import Buttons from './components/Buttons';

export default function Quiz() {
	const { state, currentQuestionStatus } = useContext(CategoriesContext);

	if (state.quizStatus === 'idle') return <StartQuiz />;

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
