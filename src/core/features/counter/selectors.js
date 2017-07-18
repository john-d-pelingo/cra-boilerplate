export function getCounter(state) {
  return state.counter;
}

export function getCount(state) {
  return getCounter(state).get('count');
}

export function getIsRunning(state) {
  return getCounter(state).get('isRunning');
}
