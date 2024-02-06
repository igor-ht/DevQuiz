import { useEffect, useState } from 'react';
import useCategoryQueryHook from '../hooks/useQueryHooks';
import { useRouter } from 'next/navigation';

export type State = {
	id?: string;
	quizId?: string;
	questionId?: string;
};

export default function CategoriesContextApi() {
	const router = useRouter();
	const [state, setState] = useState<State>({});
	const { allCategories, status, getQuestionFromQuizz } = useCategoryQueryHook(state?.id, state?.quizId, state?.questionId);

	useEffect(() => {
		if (allCategories) {
			setState((prev) => ({ ...prev, id: allCategories[0].id }));
		}
	}, [allCategories]);

	return { router, state, setState, allCategories, status, getQuestionFromQuizz };
}
