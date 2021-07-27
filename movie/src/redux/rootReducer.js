import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieReducer from './reducer/movieReducer'
import userReducer from './reducer/userReducer'

const rootReducer = combineReducers({
	movieReducer,
	userReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)

export default store