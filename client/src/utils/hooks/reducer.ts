export type State = {
	quizStatus: 'idle' | 'progress' | 'stop' | 'completed';
	currentAnswer: { answer: string; status: 'idle' | 'correct' | 'incorrect' };
};
type Action =
	| {
			type: 'SET_QUIZ_STATUS';
			payload: 'idle' | 'progress' | 'stop' | 'completed';
	  }
	| {
			type: 'SET_CURRENT_ANSWER';
			payload: string;
	  }
	| {
			type: 'SET_CURRENT_ANSWER_STATUS';
			payload: 'idle' | 'correct' | 'incorrect';
	  }
	| {
			type: 'RESET_CURRENT_ANSWER';
	  };

export const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_QUIZ_STATUS':
			return { ...state, quizStatus: action.payload };
		case 'SET_CURRENT_ANSWER':
			return { ...state, currentAnswer: { ...state.currentAnswer, answer: action.payload } };
		case 'SET_CURRENT_ANSWER_STATUS':
			return { ...state, currentAnswer: { ...state.currentAnswer, status: action.payload } };
		case 'RESET_CURRENT_ANSWER':
			return { ...state, currentAnswer: { answer: '', status: 'idle' } } as State;
		default:
			return state;
	}
};

export const initialState: State = {
	quizStatus: 'idle',
	currentAnswer: { answer: '', status: 'idle' },
};
