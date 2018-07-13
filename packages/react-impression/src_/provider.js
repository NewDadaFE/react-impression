import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import store from './store'
import createRoutes from './routes'

class AppProvider extends Component {
  render() {
    if (!this.routes) this.routes = createRoutes(store)

    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={this.routes} />
      </Provider>
    )
  }
}

export default AppProvider
