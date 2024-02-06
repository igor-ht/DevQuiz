import { useEffect, useState } from 'react';
import useCategoryQueryHook from '../hooks/useQueryHooks';

export type State = {
	id?: string;
	quizId?: string;
	questionId?: string;
};

export default function CategoriesContextApi() {
	const [state, setState] = useState<State>({});
	const { allCategories, status, getCategory, getQuizzFromCategory, getQuestionFromQuizz } = useCategoryQueryHook(
		state.id,
		state.quizId,
		state.questionId
	);

	useEffect(() => {
		if (allCategories) {
			setState((prev) => ({ ...prev, id: allCategories[0].id }));
		}
	}, [allCategories]);

	return { state, setState, allCategories, status, getCategory, getQuizzFromCategory, getQuestionFromQuizz };
}
