import { combineReducers } from 'redux';
import userReducer from './userReducer';
import collectionReducer from './collectionReducer';
import currentReducer from './currentReducer';

export default combineReducers({
  collection: collectionReducer,
  current: currentReducer,
  user: userReducer
});

