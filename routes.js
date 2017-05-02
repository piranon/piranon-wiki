import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Pages } from './containers'
import {
  App,
  Home
} from './components'

export default () => {
  return (
    <Router>
      <div>
        <Route component={App} />
        <Route exact path="/" component={Home} />
        <Route path="/pages" component={Pages} />
      </div>
    </Router>
  )
}