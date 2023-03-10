import { combineReducers } from 'redux';
import {authReducer} from './authReducer';
import {blogReducer} from './blogReducer';


const rootReducer = combineReducers({
	authReducer,
	blogReducer
})

export default rootReducer;