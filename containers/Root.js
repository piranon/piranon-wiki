import React, { Component } from 'react'
import routes from '../routes'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        {routes()}
      </Provider>
    )
  }
}