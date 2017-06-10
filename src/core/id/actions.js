import * as actionTypes from './action-types';

// eslint-disable-next-line import/prefer-default-export
export function changeName({ name, surname }) {
  return {
    type: actionTypes.CHANGE_NAME,
    payload: {
      name,
      surname
    }
  };
}
