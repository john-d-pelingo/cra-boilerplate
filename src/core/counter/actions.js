import * as actionTypes from './action-types';

// eslint-disable-next-line import/prefer-default-export
export function start() {
  return {
    type: actionTypes.START
  };
}

export function stop() {
  return {
    type: actionTypes.STOP
  };
}

export function reset() {
  return {
    type: actionTypes.RESET
  };
}

export function tick() {
  return {
    type: actionTypes.TICK
  };
}
