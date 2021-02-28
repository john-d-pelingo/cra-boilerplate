import ReactDOM from 'react-dom'

import './assets/reset.css'

import { App } from './components/App/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
