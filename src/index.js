import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'core/store';
import App from 'views/app';
import { MainContainer } from 'views/containers';

// My base styles.
import 'static/css/style.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <App>
      <MainContainer />
    </App>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
