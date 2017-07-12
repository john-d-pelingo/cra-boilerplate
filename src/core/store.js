import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

export default (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  let appliedMiddlewares = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger, require('redux-immutable-state-invariant').default());
    appliedMiddlewares = applyMiddleware(...middlewares);

    // Configure redux-devtools-extension.
    // @see https://github.com/zalmoxisus/redux-devtools-extension
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    if (typeof devToolsExtension === 'function') {
      // Compose all of our middlewares one after another.
      appliedMiddlewares = composeEnhancers(appliedMiddlewares);
    }
  }

  const store = createStore(reducers, preloadedState, appliedMiddlewares);
  sagaMiddleware.run(sagas);

  return store;
};
