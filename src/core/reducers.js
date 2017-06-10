import { combineReducers } from 'redux';

import { idReducer } from './id';

export default combineReducers({
  id: idReducer
});
