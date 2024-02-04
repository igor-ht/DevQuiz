'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="error-page">
			<h1>Something went wrong!</h1>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
}
