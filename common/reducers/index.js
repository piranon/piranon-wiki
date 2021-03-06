import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import pages from './pages'

const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  pages
})

export default rootReducer