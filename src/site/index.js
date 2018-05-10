import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routers from './router'
import '../lib/styles/index.scss'

const App = () => {
  return <Router history={hashHistory} routes={routers} />
}

ReactDOM.render(<App />, document.getElementById('root'))
