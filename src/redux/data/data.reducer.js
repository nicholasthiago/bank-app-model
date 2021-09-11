// ---- Data Reducer ---- //

const initState = {
	dataLoaded	: {},
	dataUpdated	: '',
};

const reducer_Data = ( state = initState, action ) => {

	switch (action.type) {

		case 'DATA_LOADED':
			return {
				...state,
				dataLoaded: action.payload,
			};

		case 'DATA_UPDATED':
			return {
				...state,
				dataUpdated: action.payload,
			};

		default: return { ...state };
	};
};

export default reducer_Data;