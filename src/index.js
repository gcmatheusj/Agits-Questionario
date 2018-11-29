import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Base from './base'

ReactDOM.render(<App Base={Base} />, document.getElementById('root'))
registerServiceWorker()
