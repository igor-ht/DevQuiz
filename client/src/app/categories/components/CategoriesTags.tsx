'use client';

import styles from '../page.module.scss';
import Loading from '@/app/loading';
import CategoryTag from './CategoryTag';
import { CategoriesContext } from '@/utils/context/CategoriesContextProvider';
import { useContext } from 'react';
import { State } from '@/utils/context/CategoriesContextApi';

export default function CategoriesTags() {
	const { state, setState, allCategories, status } = useContext(CategoriesContext);

	if (status === 'loading') return <Loading />;

	if (status === 'success' && allCategories)
		return (
			<div className={styles.tagNames}>
				{allCategories.map((categ: { id: string; name: string }) => (
					<CategoryTag
						key={categ.id}
						className={state?.id === categ.id ? styles.active : ''}
						onClick={() => setState((prev: State) => ({ ...prev, id: categ.id }))}>
						{categ.name}
					</CategoryTag>
				))}
			</div>
		);
}
