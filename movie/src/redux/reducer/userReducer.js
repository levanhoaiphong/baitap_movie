import { actionType } from "../action/type";


const initialState = {
	credentials: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			state.credentials = action.payload
			return { ...state }
		case actionType.REMOVE_USER:
			state.credentials = null
			return { ...state }
		default:
			return { ...state }
	}
}
export default userReducer