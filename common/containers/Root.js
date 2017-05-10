import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'
import routes from '../routes'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

const history = createHistory()

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore(history)}>
        {routes(history)}
      </Provider>
    )
  }
}