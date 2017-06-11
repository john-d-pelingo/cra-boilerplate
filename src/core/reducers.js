import { combineReducers } from 'redux';

import { idReducer } from './id';
import { counterReducer } from './counter';

export default combineReducers({
  counter: counterReducer,
  id: idReducer
});
