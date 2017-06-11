import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middlewares = applyMiddleware(sagaMiddleware, logger);

    // Configure redux-devtools-extension.
    // @see https://github.com/zalmoxisus/redux-devtools-extension
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      // Compose all of our middlewares one after another.
      middlewares = compose(middlewares, devToolsExtension());
    }
  }

  const store = createStore(reducers, initialState, middlewares);
  sagaMiddleware.run(sagas);

  return store;
};
