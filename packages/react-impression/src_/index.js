import './app/styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppProvider from './provider'

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )

render(AppProvider)

if (DEBUG) {
  if (module.hot) module.hot.accept('./provider', () => render(AppProvider))
}
