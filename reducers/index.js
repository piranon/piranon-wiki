import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pages from './pages'

const rootReducer = combineReducers({
  form: formReducer,
  pages
})

export default rootReducer