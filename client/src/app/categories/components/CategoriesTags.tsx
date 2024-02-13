'use client';

import styles from '../page.module.scss';
import Loading from '@/app/loading';
import CategoryTag from './CategoryTag';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';
import { QueryParams } from '@/utils/context/CategoriesContextApi';

export default function CategoriesTags() {
	const { queryParams, setQueryParams, allCategories, allCategoriesStatus } = useContext(CategoriesContext);

	if (allCategoriesStatus === 'loading') return <Loading />;

	if (allCategoriesStatus === 'success' && allCategories)
		return (
			<div className={styles.tagNames}>
				<input
					type="search"
					placeholder="Search for a category or quiz"
				/>
				<section>
					{allCategories.map((categ: { id: string; name: string }) => (
						<CategoryTag
							key={categ.id}
							className={queryParams?.id === categ.id ? styles.active : ''}
							onClick={() => setQueryParams((prev: QueryParams) => ({ ...prev, id: categ.id }))}>
							{categ.name}
						</CategoryTag>
					))}
				</section>
			</div>
		);
}
