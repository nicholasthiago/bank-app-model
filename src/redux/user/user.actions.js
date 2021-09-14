// ---- User Actions ---- //

export const setList = ( list ) => ({
	type: 'USER_LIST',
	payload: list,
});

export const setActive = ( user ) => ({
	type: 'USER_ACTIVE',
	payload: user,
});