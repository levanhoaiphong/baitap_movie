import { actionType } from "../action/type"

const initialState = {
	movieList: [],
	movieDetail: [],
}

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.SET_MOVIE:
			console.log(action)
			state.movieList = action.payload;
			return { ...state }
		case actionType.SET_MOVIE_DETAIL:
			state.movieDetail = action.payload
			return { ...state }
		default:
			return { ...state }
	}
}

export default movieReducer