import { useEffect, useReducer, useState } from 'react';
import useCategoryQueryHook from '../hooks/useQueryHooks';
import { useRouter } from 'next/navigation';
import { reducer, initialState } from './reducer';

export type QueryParams = {
	id?: string;
	quizId?: string;
	questionId?: string;
};

export default function CategoriesContextApi() {
	const router = useRouter();
	const [state, stateDispatch] = useReducer(reducer, initialState);
	const [queryParams, setQueryParams] = useState<QueryParams>({});

	const { allCategories, status, getQuestionFromQuizz } = useCategoryQueryHook(
		queryParams?.id,
		queryParams?.quizId,
		queryParams?.questionId
	);

	useEffect(() => {
		if (allCategories) {
			setQueryParams((prev) => ({ ...prev, id: allCategories[0].id }));
		}
	}, [allCategories]);

	return { router, state, stateDispatch, queryParams, setQueryParams, allCategories, status, getQuestionFromQuizz };
}
