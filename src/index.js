import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import './styles/reset.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

module.hot && module.hot.accept()
