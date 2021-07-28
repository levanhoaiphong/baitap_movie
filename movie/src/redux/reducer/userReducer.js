import { actionType } from "../action/type";


const initialState = {
	credentials: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			state.credentials = action.payload
			return { ...state }
		default:
			return { ...state }
	}
}
export default userReducer