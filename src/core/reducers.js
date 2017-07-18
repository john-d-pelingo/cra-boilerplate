import { combineReducers } from 'redux';

import { idReducer } from './features/id';
import { counterReducer } from './features/counter';

export default combineReducers({
  counter: counterReducer,
  id: idReducer
});
