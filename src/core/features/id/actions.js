import * as actionTypes from './action-types';

export function changeName({ name, surname }) {
  return {
    type: actionTypes.CHANGE_NAME,
    payload: {
      name,
      surname
    }
  };
}
