import { combineReducers } from 'redux';
import userReducer from './userReducer';
import collectionReducer from './collectionReducer';

export default combineReducers({
  user: userReducer,
  collection: collectionReducer
});

