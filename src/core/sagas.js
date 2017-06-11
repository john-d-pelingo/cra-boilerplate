import { all } from 'redux-saga/effects';

import { counterSagas } from './counter';

export default function* sagas() {
  yield all([...counterSagas]);
}
