import { reducer as pictureReducer } from './picture/reducer'
import { combineReducers } from 'redux-immutable';

export default combineReducers({ pictureReducer });