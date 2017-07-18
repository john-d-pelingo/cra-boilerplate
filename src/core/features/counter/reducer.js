import { fromJS } from 'immutable';

import * as actionTypes from './action-types';

export const initialState = fromJS({
  count: 0,
  isRunning: false
});

export function counterReducer(state = initialState, action = {}) {
  switch (action.type) {

    case actionTypes.START:
      return state.set('isRunning', true);

    case actionTypes.STOP:
      return state.set('isRunning', false);

    case actionTypes.TICK:
      return state.update('count', value => value + 1);

    case actionTypes.RESET:
      return state.merge(initialState);

    default:
      return state;
  }
}
