import * as actionTypes from './action-types';

export const idState = {
  age: -1,
  birthday: '',
  name: '',
  sex: '',
  surname: ''
};

export function idReducer(state = idState, { payload, type }) {
  switch (type) {
    case actionTypes.CHANGE_NAME:
      return {
        ...state,
        name: payload.name,
        surname: payload.surname
      };

    default:
      return state;
  }
}
