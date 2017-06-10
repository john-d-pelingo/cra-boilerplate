import { combineReducers } from 'redux';

function dummy(state = {}, { payload, type }) {
  switch (type) {
    case 'ACTION_SUCCESS':
      return {
        ...state,
        data: payload.data
      };

    default:
      return state;
  }
}

export default combineReducers({
  dummy
});
