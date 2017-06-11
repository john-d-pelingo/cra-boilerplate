/* eslint-disable no-constant-condition, import/prefer-default-export */

import { delay } from 'redux-saga';
import { call, fork, put, select, take } from 'redux-saga/effects';

import { tick } from './actions';
import * as actionTypes from './action-types';
import * as selectors from './selectors';

const ONE_SECOND = 1000;

function* watchStartTimer() {
  // Wake up when user starts timer.
  while (yield take(actionTypes.START)) {
    while (true) {
      // This side effect is not run yet, so it can be treated as data, making it easier to test if needed.
      yield call(delay, ONE_SECOND);

      // Check if the timer is still running.
      // If so, then dispatch a TICK.
      const isRunning = yield select(selectors.getIsRunning);

      if (isRunning) {
        yield put(tick());
        // Otherwise, go idle until user starts the timer again.
      } else {
        break;
      }
    }
  }
}

export const counterSagas = [
  fork(watchStartTimer)
];
