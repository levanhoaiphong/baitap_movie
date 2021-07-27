import { actionType } from "../action/type";


const initialState = null;

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			state = action.payload
			return { ...state }
		default:
			return { ...state }
	}
}
export default userReducer