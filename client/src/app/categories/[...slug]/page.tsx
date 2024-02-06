import { ENDPOINT } from '@/config';
import Timer from './components/Timer/Timer';

export const dynamicParams = false;

export const revalidate = false;

export async function generateStaticParams() {
	const response = await fetch(`${ENDPOINT}/category`);

	if (!response.ok) {
		return [];
	}
	const categories = await response.json();
	const paths = categories.map((category: { name: string; quiz: { name: string }[] }) =>
		category.quiz.map((quiz) => ({ slug: [encodeURIComponent(category.name.toLowerCase()), encodeURIComponent(quiz.name.toLowerCase())] }))
	);

	return paths.flat();
}

export default function QuizPage({ params }: { params: { slug: string } }) {
	return (
		<div>
			Quiz Page
			<Timer maxTimeInMinutes={1} />
		</div>
	);
}
