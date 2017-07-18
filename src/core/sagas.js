import { all } from 'redux-saga/effects';

import { counterSagas } from './features/counter';

export default function* sagas() {
  yield all([...counterSagas]);
}
