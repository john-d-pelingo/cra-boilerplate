import * as actionTypes from './action-types';

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
