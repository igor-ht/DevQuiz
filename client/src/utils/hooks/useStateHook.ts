import { useReducer, useState } from 'react';
import { QueryParams } from '../context/CategoriesContextApi';
import { reducer, initialState } from './reducer';

const useStateHook = () => {
	const [state, stateDispatch] = useReducer(reducer, initialState);
	const [queryParams, setQueryParams] = useState<QueryParams>({ id: '', quizId: 0, questionId: 0, answer: '' });

	return { state, stateDispatch, queryParams, setQueryParams };
};

export default useStateHook;
