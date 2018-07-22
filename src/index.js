import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import './styles/reset.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// eslint-disable-next-line no-unused-expressions
module.hot && module.hot.accept();
