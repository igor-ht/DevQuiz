'use client';

import { useEffect, useState } from 'react';

interface TimerProps {
	maxTimeInMinutes: number;
}

export default function Timer(props: TimerProps) {
	const [timer, setTimer] = useState('00:00:00');

	useEffect(() => {
		if (+timer.split(':')[0] >= props.maxTimeInMinutes) return alert('Time is up!');
    
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
		}, 5);

		return () => clearInterval(interval);
	}, [timer]);

	return (
		<div>
			<h1>Timer</h1>
			<p>{timer}</p>
		</div>
	);
}
