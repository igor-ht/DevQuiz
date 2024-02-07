'use client';

import styles from './Timer.module.scss';
import { useContext, useEffect } from 'react';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';

interface TimerProps {
	maxTimeInMinutes: number;
}

export default function Timer(props: TimerProps) {
	const { state, timer, setTimer, stateDispatch } = useContext(CategoriesContext);

	useEffect(() => {
		if (state.quizStatus === 'stop' || state.quizStatus === 'completed') return;

		if (+timer.split(':')[0] >= props.maxTimeInMinutes) return stateDispatch({ type: 'SET_QUIZ_STATUS', payload: 'completed' });

		const interval = setInterval(() => {
			const time = timer.split(':');
			let minutes = +time[0];
			let seconds = +time[1];
			let milliseconds = +time[2];

			if (milliseconds < 99) {
				milliseconds++;
			} else {
				milliseconds = 0;
				if (seconds < 59) {
					seconds++;
				} else {
					seconds = 0;
					minutes++;
				}
			}

			setTimer(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`);
		}, 8);

		return () => clearInterval(interval);
	}, [timer]);

	return (
		<div className={styles.timer}>
			<span>
				<p>⏲</p>
				<p>{timer}</p>
			</span>
		</div>
	);
}
