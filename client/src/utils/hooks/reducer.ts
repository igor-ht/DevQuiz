export type State = {
	quizStatus: 'idle' | 'progress' | 'stop' | 'completed';
	currentAnswer: { answer: string; status: 'idle' | 'correct' | 'incorrect' };
	correctAnswers: number;
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
			type: 'INCREMENT_CORRECT_ANSWERS';
	  }
	| {
			type: 'RESET_CURRENT_ANSWER';
	  }
	| {
			type: 'RESET_STATE';
	  };

export const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_QUIZ_STATUS':
			return { ...state, quizStatus: action.payload };
		case 'SET_CURRENT_ANSWER':
			return { ...state, currentAnswer: { ...state.currentAnswer, answer: action.payload } };
		case 'SET_CURRENT_ANSWER_STATUS':
			return { ...state, currentAnswer: { ...state.currentAnswer, status: action.payload } };
		case 'INCREMENT_CORRECT_ANSWERS':
			return { ...state, correctAnswers: state.correctAnswers + 1 };
		case 'RESET_CURRENT_ANSWER':
			return { ...state, currentAnswer: { answer: '', status: 'idle' } } as State;
		case 'RESET_STATE':
			return initialState;
		default:
			return state;
	}
};

export const initialState: State = {
	quizStatus: 'idle',
	currentAnswer: { answer: '', status: 'idle' },
	correctAnswers: 0,
};
