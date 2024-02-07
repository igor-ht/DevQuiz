import { ENDPOINT } from '@/config';
import styles from './page.module.scss';
import Quiz from './components/Quiz/Quiz';

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
		<div className={styles.quizPage}>
			<Quiz />
		</div>
	);
}
