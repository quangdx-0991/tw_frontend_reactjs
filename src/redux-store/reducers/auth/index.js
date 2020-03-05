
import clientUtils from '@utils/client-utils';

const reducer = (state = {}, action) => {
	let newState = { ...state }
	switch (action.type) {
		case 'SAVE_CURRENT_USER':
			clientUtils.auth = ((action.user || {}).loginToken || "")
			newState.auth = action.user;
			return newState;
		case 'AUTH-UPDATE-DATA':
			newState = { ...state, ...action.data || {} }
			return newState;
		case 'LOGOUT':
			newState.auth = null;
			return newState;
		case 'persist/REHYDRATE':
			if (action.payload && action.payload.auth && Object.keys(action.payload.auth).length)
				clientUtils.auth = ((action.payload.auth || {}).auth || {}).loginToken || "";
		default:
			return state
	}

}
export default reducer
