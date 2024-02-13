import styles from './page.module.scss';
import CategoriesTags from './components/CategoriesTags';
import CategoryQuizzes from './components/CategoryQuizzes';

export default async function Categories() {
	return (
		<div className={styles.categoriesContainer}>
			<CategoriesTags />
			<CategoryQuizzes />
		</div>
	);
}
