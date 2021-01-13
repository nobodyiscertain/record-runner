import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';
import currentReducer from './currentReducer';
import historyReducer from './historyReducer';
import userReducer from './userReducer';

export default combineReducers({
  collection: collectionReducer,
  current: currentReducer,
  listeningHistory: historyReducer,
  user: userReducer
});

