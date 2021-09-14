// ---- Data Actions ---- //

export const setData = ( data ) => ({
	type: 'DATA_LOADED',
	payload: data,
});

export const setUpdated = () => ({
	type: 'DATA_UPDATED',
});