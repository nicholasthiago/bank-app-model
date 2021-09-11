import { createStore,combineReducers } from 'redux';

import reducer_User from 'redux/user/user.reducer';
import reducer_Data from 'redux/data/data.reducer';

const reducer = combineReducers({
	user: reducer_User,
	data: reducer_Data,
});

export const store = createStore(reducer);