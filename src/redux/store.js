import { createStore } from 'redux';

const initState = {};

function reducer ( state = initState, action ) {

	if ( action.type === 'SET_DATA' ) {
		return {
			...state,
			data: action.data,
		}
	}
}

export const store = createStore(reducer);