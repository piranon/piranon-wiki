import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Pages, ShowPage, NewPage } from './containers'
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
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/pages/new" component={NewPage} />
        <Route exact path="/pages/:id(\d+)" component={ShowPage} />
      </div>
    </Router>
  )
}