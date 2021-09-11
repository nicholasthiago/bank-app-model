const initState = {
	userList 	: {},
	userActive	: {},
};

const reducer_User = ( state = initState, action ) => {

	switch (action.type) {

		case 'USER_LIST':
			return {
				...state,
				userList: action.payload,
			};

		case 'USER_ACTIVE':
			return {
				...state,
				userActive: action.payload,
			};

		default: return { ...state };
	};
};

export default reducer_User;